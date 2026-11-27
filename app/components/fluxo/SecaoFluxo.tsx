import { useState, type CSSProperties, type ReactNode } from "react";
import {
  eyebrowFluxo,
  etapas,
  introFluxo,
  tituloFluxo,
  type EtapaFluxo,
  type IdEtapa,
} from "./dadosFluxo";

// Medidas e cores do Figma (frame de 1280px), definidas aqui para não alterar
// o app.css compartilhado. Fonte: Plus Jakarta Sans (carregada em root.tsx).
const estiloSecao = {
  backgroundColor: "var(--fundo-pagina)",
  fontFamily: '"Plus Jakarta Sans", var(--fonte-principal)',
} as CSSProperties;

function Icone({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Um ícone por etapa, equivalentes aos do Figma (estilo Lucide). O Record faz o
// TypeScript avisar se uma etapa nova ficar sem ícone.
const icones: Record<IdEtapa, ReactNode> = {
  produtor: (
    <Icone>
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </Icone>
  ),
  originacao: (
    <Icone>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icone>
  ),
  "packing-house": (
    <Icone>
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
      <path d="M12 22V12" />
      <path d="m3.3 7 8.7 5 8.7-5" />
    </Icone>
  ),
  distribuicao: (
    <Icone>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </Icone>
  ),
  porto: (
    <Icone>
      <path d="M12 10.189V14" />
      <path d="M12 2v3" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </Icone>
  ),
  mercado: (
    <Icone>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </Icone>
  ),
};

function CardEtapa({
  etapa,
  numero,
  ativa,
  ultima,
  aoAlternar,
}: {
  etapa: EtapaFluxo;
  numero: number;
  ativa: boolean;
  ultima: boolean;
  aoAlternar: () => void;
}) {
  return (
    <li
      className={
        // O ::after é o conector entre etapas: vertical no celular (uma coluna)
        // e horizontal no desktop (seis colunas, ocupa o vão de 16px entre os
        // cards, na altura do ícone). Em duas colunas fica oculto.
        ultima
          ? "relative flex"
          : "relative flex after:absolute after:top-full after:left-1/2 after:h-4 after:w-px after:bg-[#E2E0D4] after:content-[''] sm:after:hidden lg:after:top-[45px] lg:after:left-full lg:after:block lg:after:h-px lg:after:w-4"
      }
    >
      <button
        type="button"
        aria-pressed={ativa}
        aria-controls="explicacao-etapa"
        onClick={aoAlternar}
        className={`flex w-full cursor-pointer flex-col items-center rounded-3xl border bg-white p-[21px] pb-[37px] text-center shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:border-[#E37A24]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E37A24] ${
          ativa ? "border-[#E37A24]" : "border-[#E2E0D4]"
        }`}
      >
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#047857]">
          {icones[etapa.id]}
        </span>
        <span className="text-[11px] leading-[16.5px] font-bold tracking-[0.55px] text-[#E37A24] uppercase">
          Etapa {String(numero).padStart(2, "0")}
        </span>
        <span className="pt-1 text-base leading-6 font-bold text-[#14261C]">{etapa.nome}</span>
        <span className="pt-1 text-xs leading-4 text-[#68706B]">{etapa.descricao}</span>
      </button>
    </li>
  );
}

export function SecaoFluxo() {
  const [idAtivo, setIdAtivo] = useState<IdEtapa | null>(null);
  const indiceAtivo = etapas.findIndex((e) => e.id === idAtivo);
  const ativa = indiceAtivo >= 0 ? etapas[indiceAtivo] : null;

  return (
    <section
      id="fluxo"
      aria-labelledby="titulo-fluxo"
      className="px-4 py-16 md:px-8 md:py-28"
      style={estiloSecao}
    >
      <div className="mx-auto flex max-w-[1216px] flex-col items-center gap-16">
        <div className="flex max-w-[768px] flex-col items-center gap-[10.5px] pt-[5.5px] text-center">
          <p className="text-xs leading-4 font-bold tracking-[0.6px] text-[#E37A24] uppercase">
            {eyebrowFluxo}
          </p>
          <h2
            id="titulo-fluxo"
            className="text-[clamp(2rem,5vw,3rem)] leading-none font-extrabold tracking-[-1.2px] text-[#14261C]"
          >
            {tituloFluxo}
          </h2>
          <p className="pt-[5.5px] text-base leading-6 text-[#68706B]">{introFluxo}</p>
        </div>

        <div className="w-full">
          <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-6">
            {etapas.map((etapa, i) => (
              <CardEtapa
                key={etapa.id}
                etapa={etapa}
                numero={i + 1}
                ativa={etapa.id === idAtivo}
                ultima={i === etapas.length - 1}
                aoAlternar={() => setIdAtivo(etapa.id === idAtivo ? null : etapa.id)}
              />
            ))}
          </ol>

          <div
            id="explicacao-etapa"
            role="status"
            aria-live="polite"
            className="mx-auto mt-8 max-w-[768px] rounded-3xl border border-[#E2E0D4] bg-white p-6 text-center"
          >
            {ativa ? (
              <>
                <p className="text-[11px] leading-[16.5px] font-bold tracking-[0.55px] text-[#E37A24] uppercase">
                  Etapa {String(indiceAtivo + 1).padStart(2, "0")} · {ativa.nome}
                </p>
                <p className="pt-2 text-sm leading-[22.75px] text-[#68706B]">
                  {ativa.explicacao ?? ativa.descricao}
                </p>
              </>
            ) : (
              <p className="text-sm leading-[22.75px] text-[#68706B]">
                Toque em uma etapa para ver a explicação.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
