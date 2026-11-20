import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Key,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

interface ItemCarrossel {
  key: Key;
  conteudo: ReactNode;
}

interface CarrosselProps {
  /** Nome lido por leitores de tela. Ex.: "Catálogo de frutas". */
  rotulo: string;
  itens: ItemCarrossel[];
  /** Quando muda (ex.: troca de filtro), o carrossel volta ao início. */
  chaveReinicio?: string;
}

const LIMITE_ARRASTE_PX = 5;

function prefereMenosMovimento() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Carrossel horizontal sem dependências: usa a rolagem nativa com scroll-snap
 * (touch e trackpad funcionam sozinhos) e acrescenta setas, arraste com mouse,
 * teclado e indicador de páginas. A rolagem fica dentro da faixa, nunca na página.
 */
export function Carrossel({ rotulo, itens, chaveReinicio }: CarrosselProps) {
  const faixa = useRef<HTMLUListElement>(null);
  const arraste = useRef({ ativo: false, moveu: false, xInicial: 0, scrollInicial: 0 });
  const [arrastando, setArrastando] = useState(false);
  const [estado, setEstado] = useState({ pagina: 0, total: 1, podeVoltar: false, podeAvancar: false });

  /** Largura de um item + espaço entre itens, e quantos itens cabem na tela. */
  const medir = useCallback(() => {
    const el = faixa.current;
    const primeiro = el?.firstElementChild as HTMLElement | null;
    if (!el || !primeiro) return null;
    const espaco = parseFloat(getComputedStyle(el).columnGap) || 0;
    const passoItem = primeiro.offsetWidth + espaco;
    const porPagina = Math.max(1, Math.floor((el.clientWidth + espaco) / passoItem));
    return { el, passoPagina: passoItem * porPagina, porPagina };
  }, []);

  const atualizar = useCallback(() => {
    const medidas = medir();
    if (!medidas) {
      setEstado({ pagina: 0, total: 1, podeVoltar: false, podeAvancar: false });
      return;
    }
    const { el, passoPagina, porPagina } = medidas;
    const total = Math.max(1, Math.ceil(el.children.length / porPagina));
    const podeVoltar = el.scrollLeft > 1;
    const podeAvancar = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    const pagina = !podeAvancar ? total - 1 : Math.min(total - 1, Math.round(el.scrollLeft / passoPagina));
    // Evita re-render a cada evento de scroll quando nada mudou.
    setEstado((atual) =>
      atual.pagina === pagina && atual.total === total && atual.podeVoltar === podeVoltar && atual.podeAvancar === podeAvancar
        ? atual
        : { pagina, total, podeVoltar, podeAvancar },
    );
  }, [medir]);

  useEffect(() => {
    const el = faixa.current;
    if (!el) return;
    atualizar();
    el.addEventListener("scroll", atualizar, { passive: true });
    const observador = new ResizeObserver(atualizar);
    observador.observe(el);
    return () => {
      el.removeEventListener("scroll", atualizar);
      observador.disconnect();
    };
  }, [atualizar, itens.length]);

  // Troca de filtro: volta ao início para nunca ficar numa posição inexistente.
  useEffect(() => {
    faixa.current?.scrollTo({ left: 0, behavior: "auto" });
    atualizar();
  }, [chaveReinicio, atualizar]);

  const irParaPagina = (pagina: number) => {
    const medidas = medir();
    if (!medidas) return;
    medidas.el.scrollTo({
      left: pagina * medidas.passoPagina,
      behavior: prefereMenosMovimento() ? "auto" : "smooth",
    });
  };

  const mover = (direcao: -1 | 1) => {
    const medidas = medir();
    if (!medidas) return;
    medidas.el.scrollBy({
      left: direcao * medidas.passoPagina,
      behavior: prefereMenosMovimento() ? "auto" : "smooth",
    });
  };

  const aoTeclar = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      mover(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      mover(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      irParaPagina(0);
    } else if (e.key === "End") {
      e.preventDefault();
      irParaPagina(estado.total - 1);
    }
  };

  // Arraste com mouse. Touch já rola nativamente, então é ignorado aqui.
  const aoPressionar = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0 || !faixa.current) return;
    arraste.current = { ativo: true, moveu: false, xInicial: e.clientX, scrollInicial: faixa.current.scrollLeft };
  };

  const aoMover = (e: PointerEvent<HTMLUListElement>) => {
    const a = arraste.current;
    const el = faixa.current;
    if (!a.ativo || !el) return;
    const deslocamento = e.clientX - a.xInicial;
    if (!a.moveu && Math.abs(deslocamento) < LIMITE_ARRASTE_PX) return;
    if (!a.moveu) {
      a.moveu = true;
      setArrastando(true);
      el.setPointerCapture(e.pointerId);
    }
    el.scrollLeft = a.scrollInicial - deslocamento;
  };

  const aoSoltar = (e: PointerEvent<HTMLUListElement>) => {
    const a = arraste.current;
    if (!a.ativo) return;
    a.ativo = false;
    if (faixa.current?.hasPointerCapture(e.pointerId)) faixa.current.releasePointerCapture(e.pointerId);
    setArrastando(false); // reativa o snap, que alinha o card mais próximo
  };

  // Depois de arrastar, o clique que o navegador dispara não deve acionar o botão do card.
  const aoClicarCaptura = (e: React.MouseEvent) => {
    if (arraste.current.moveu) {
      e.preventDefault();
      e.stopPropagation();
      arraste.current.moveu = false;
    }
  };

  if (itens.length === 0) return null;

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={rotulo}>
      <ul
        ref={faixa}
        tabIndex={0}
        aria-label={`${rotulo}. Use as setas do teclado para navegar.`}
        onKeyDown={aoTeclar}
        onPointerDown={aoPressionar}
        onPointerMove={aoMover}
        onPointerUp={aoSoltar}
        onPointerCancel={aoSoltar}
        onClickCapture={aoClicarCaptura}
        className={`m-0 flex list-none overflow-x-auto overscroll-x-contain p-0 py-1 outline-offset-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          arrastando ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
        }`}
        style={{ columnGap: "var(--card-fruta-gap-cards)" }}
      >
        {itens.map((item) => (
          <li
            key={item.key}
            className="flex flex-none snap-start"
            style={{ width: "min(85%, var(--card-fruta-largura))" }}
          >
            {item.conteudo}
          </li>
        ))}
      </ul>

      {estado.total > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <BotaoSeta direcao="anterior" desabilitado={!estado.podeVoltar} aoClicar={() => mover(-1)} />
          <div className="flex items-center gap-2">
            {Array.from({ length: estado.total }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para a página ${i + 1} de ${estado.total}`}
                aria-current={i === estado.pagina ? "true" : undefined}
                onClick={() => irParaPagina(i)}
                className="h-2 cursor-pointer rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--laranja-botao)]"
                style={{
                  width: i === estado.pagina ? "1.5rem" : "0.5rem",
                  backgroundColor: i === estado.pagina ? "var(--frutas-ponto-ativo, var(--verde-escuro-footer))" : "var(--frutas-ponto, var(--tag-bg))",
                }}
              />
            ))}
          </div>
          <BotaoSeta direcao="proximo" desabilitado={!estado.podeAvancar} aoClicar={() => mover(1)} />
        </div>
      )}
    </div>
  );
}

function BotaoSeta({
  direcao,
  desabilitado,
  aoClicar,
}: {
  direcao: "anterior" | "proximo";
  desabilitado: boolean;
  aoClicar: () => void;
}) {
  return (
    <button
      type="button"
      onClick={aoClicar}
      disabled={desabilitado}
      aria-label={direcao === "anterior" ? "Frutas anteriores" : "Próximas frutas"}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E2E0D4] bg-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--laranja-botao)] disabled:cursor-not-allowed disabled:opacity-40"
      style={{ color: "var(--verde-escuro-footer)" }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={direcao === "anterior" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );
}
