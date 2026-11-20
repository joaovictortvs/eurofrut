import { useState, type CSSProperties } from "react";
import type { Fruta, FiltroFruta } from "~/types/fruta";
import { Carrossel } from "./Carrossel";
import { frutas } from "./dadosFrutas";
import { FiltrosFrutas } from "./FiltrosFrutas";
import { filtrarFrutas } from "./filtrosFrutas";

/** Id da seção do formulário de cotação (ver "IDs das seções" no README). */
const ID_SECAO_COTACAO = "cotacao";

// Medidas e cores do Figma (frame de 1280px), definidas aqui para não alterar
// o app.css compartilhado, cujos tokens de card não correspondem a este design.
// Fonte: Plus Jakarta Sans (carregada em root.tsx).
const estiloSecao = {
  "--card-fruta-largura": "286px",
  "--card-fruta-gap-cards": "24px",
  "--frutas-ponto-ativo": "#E37A24",
  "--frutas-ponto": "#E2E0D4",
  backgroundColor: "#EFEFE7",
  fontFamily: '"Plus Jakarta Sans", var(--fonte-principal)',
} as CSSProperties;

interface SecaoFrutasProps {
  /**
   * Chamado ao clicar em "Solicitar Cotação". Sem ele, a página rola até a
   * seção de cotação (`#cotacao`), quando existir.
   */
  aoSolicitarCotacao?: (fruta: Fruta) => void;
}

function irParaCotacao() {
  document.getElementById(ID_SECAO_COTACAO)?.scrollIntoView({ behavior: "instant" });
}

export function SecaoFrutas({ aoSolicitarCotacao }: SecaoFrutasProps) {
  const [filtro, setFiltro] = useState<FiltroFruta>("todas");
  const visiveis = filtrarFrutas(frutas, filtro);

  const solicitar = (fruta: Fruta) => {
    if (aoSolicitarCotacao) aoSolicitarCotacao(fruta);
    else irParaCotacao();
  };

  return (
    <section
      id="frutas"
      aria-labelledby="titulo-frutas"
      className="scroll-mt-24 border-y border-[#E2E0D4] px-4 py-16 md:px-8 md:py-24"
      style={estiloSecao}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="text-xs leading-4 font-bold tracking-[1.2px] text-[#E37A24] uppercase">
              Catálogo especializado
            </p>
            <h2
              id="titulo-frutas"
              className="text-[clamp(2rem,6vw,3rem)] leading-none font-extrabold tracking-[-1.2px] text-[#14261C]"
            >
              Nossas frutas
            </h2>
            <p className="pt-[1.5px] text-base leading-6 text-[#68706B]">
              {frutas.length} frutas selecionadas cultivadas nas terras férteis do Vale do São Francisco.
            </p>
          </div>

          <FiltrosFrutas filtroAtivo={filtro} aoMudar={setFiltro} />
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {visiveis.length === 1 ? "1 fruta exibida" : `${visiveis.length} frutas exibidas`}
        </p>

        <div>
          {visiveis.length === 0 ? (
            <p
              className="rounded-[32px] border border-[#E2E0D4] bg-white px-6 py-12 text-center text-base text-[#68706B]"
            >
              Nenhuma fruta nesta categoria no momento.
            </p>
          ) : (
            <Carrossel
              rotulo="Catálogo de frutas"
              chaveReinicio={filtro}
              itens={visiveis.map((fruta) => ({
                key: fruta.id,
                conteudo: (
                  <CardFruta fruta={fruta} aoSolicitarCotacao={() => solicitar(fruta)} />
                ),
              }))}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function CardFruta({ fruta, aoSolicitarCotacao }: { fruta: Fruta; aoSolicitarCotacao: () => void }) {
  return (
    <article className="flex w-full flex-col justify-between rounded-[32px] border border-[#E2E0D4]/80 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div>
        {fruta.imagem ? (
          <img
            src={fruta.imagem.src}
            alt={fruta.imagem.alt}
            width={252}
            height={208}
            draggable={false}
            className="aspect-[252/208] w-full rounded-3xl object-cover"
          />
        ) : (
          <div className="aspect-[252/208] w-full rounded-3xl bg-[#F5F4EE]" aria-hidden="true" />
        )}

        <div className="flex flex-col gap-2 px-2 pt-5">
          <h3 className="text-2xl leading-8 font-bold text-[#14261C]">{fruta.nome}</h3>
          <p className="text-xs leading-[19.5px] text-[#68706B]">{fruta.descricao}</p>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0 pt-2">
            <li className="rounded-lg border border-[#E2E0D4] bg-[#F5F4EE] px-2.5 pt-[3px] pb-[4.5px] text-[11px] leading-[16.5px] font-semibold text-[#1A211E]">
              {fruta.embalagem}
            </li>
            <li className="rounded-lg border border-[#FDE68A]/50 bg-[#FFFBEB] px-2.5 pt-[3px] pb-[4.5px] text-[11px] leading-[16.5px] font-semibold text-[#E37A24]">
              {fruta.disponibilidade}
            </li>
          </ul>
        </div>
      </div>

      <div className="px-2 pt-6">
        <button
          type="button"
          onClick={aoSolicitarCotacao}
          className="flex w-full cursor-pointer items-center justify-center rounded-full bg-[#E37A24] py-2.5 text-xs leading-4 font-bold text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E37A24]"
        >
          Solicitar Cotação
        </button>
      </div>
    </article>
  );
}
