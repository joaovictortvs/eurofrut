import type { CSSProperties, ReactNode } from "react";
import {
  introPersona,
  perfis,
  tituloPersona,
  type IdPerfil,
  type PerfilPersona,
} from "./dadosPersona";

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
      className="h-7 w-7"
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

// Ícones equivalentes aos do Figma (sacola e broto), no estilo Lucide.
const icones: Record<IdPerfil, ReactNode> = {
  comprador: (
    <Icone>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </Icone>
  ),
  produtor: (
    <Icone>
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </Icone>
  ),
};

// Cores por perfil: o Figma usa laranja para o comprador e verde para o produtor.
const tons: Record<
  IdPerfil,
  { fundoIcone: string; bordaIcone: string; corIcone: string; marcador: string; botao: string }
> = {
  comprador: {
    fundoIcone: "#FFFBEB",
    bordaIcone: "rgba(253,230,138,0.6)",
    corIcone: "#E37A24",
    marcador: "#E37A24",
    botao: "#E37A24",
  },
  produtor: {
    fundoIcone: "#ECFDF5",
    bordaIcone: "rgba(167,243,208,0.6)",
    corIcone: "#047857",
    marcador: "#059669",
    botao: "#14261C",
  },
};

function CardPerfil({ perfil }: { perfil: PerfilPersona }) {
  const tom = tons[perfil.id];
  return (
    // O id fica no card: o menu do site usa href="#produtor".
    <article
      id={perfil.id}
      className="flex min-w-0 scroll-mt-28 flex-col justify-between rounded-[32px] border border-[#E2E0D4] bg-white p-[41px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
    >
      <div className="flex flex-col gap-[11.3px]">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl border shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
          style={{ backgroundColor: tom.fundoIcone, borderColor: tom.bordaIcone, color: tom.corIcone }}
        >
          {icones[perfil.id]}
        </span>

        <h3 className="pt-[12.7px] text-[30px] leading-9 font-bold tracking-[-0.75px] text-[#14261C]">
          {perfil.titulo}
        </h3>

        <p className="pb-[12.7px] text-sm leading-[22.75px] text-[#68706B]">{perfil.descricao}</p>

        <hr className="m-0 h-px border-0 bg-[#F4F4F5]" />

        <ul className="m-0 flex list-none flex-col gap-[14px] p-0 pt-[12.7px]">
          {perfil.itens.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: tom.marcador }}
                aria-hidden="true"
              />
              <span className="text-sm leading-5 font-medium text-[#1A211E]/85">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-12">
        <a
          href={perfil.acao.href}
          className="flex items-center justify-between gap-3 rounded-full px-6 py-4 text-sm leading-5 font-bold text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E37A24]"
          style={{ backgroundColor: tom.botao }}
        >
          {perfil.acao.rotulo}
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

export function SecaoPersona() {
  return (
    <section
      id="persona"
      aria-labelledby="titulo-persona"
      className="px-4 py-12 md:px-8 md:py-16"
      style={estiloSecao}
    >
      <div className="mx-auto flex max-w-[1216px] flex-col items-center gap-14">
        <div className="flex max-w-[672px] flex-col gap-4 text-center">
          <h2
            id="titulo-persona"
            className="text-[clamp(2rem,5vw,3rem)] leading-none font-extrabold tracking-[-1.2px] text-[#14261C]"
          >
            {tituloPersona}
          </h2>
          <p className="text-lg leading-7 text-[#68706B]">{introPersona}</p>
        </div>

        <div className="grid w-full max-w-[1024px] grid-cols-1 gap-8 md:grid-cols-2">
          {perfis.map((perfil) => (
            <CardPerfil key={perfil.id} perfil={perfil} />
          ))}
        </div>
      </div>
    </section>
  );
}
