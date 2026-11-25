import type { ReactNode } from "react";
import { Card } from "../componentsReutilizaveis/Card";
import {
  dimensoes,
  introDimensoes,
  tituloDimensoes,
  type IdDimensao,
} from "./textosDimensoes";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      className="h-1/2 w-1/2"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

// Um ícone por dimensão. O Record garante que nenhuma dimensão fique sem ícone:
// se alguém criar um id novo em textosDimensoes.ts, o TypeScript avisa aqui.
const icones: Record<IdDimensao, ReactNode> = {
  comercial: (
    <Svg>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </Svg>
  ),
  economica: (
    <Svg>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </Svg>
  ),
  logistica: (
    <Svg>
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </Svg>
  ),
  financeira: (
    <Svg>
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </Svg>
  ),
  operacional: (
    <Svg>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </Svg>
  ),
  relacional: (
    <Svg>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  ),
};

export function SecaoDimensoes() {
  return (
    <section
      id="proposta-de-valor"
      aria-labelledby="titulo-proposta-de-valor"
      className="px-6 py-16"
      style={{ backgroundColor: "var(--fundo-pagina)" }}
    >
      <h2
        id="titulo-proposta-de-valor"
        className="mx-auto max-w-4xl text-center font-bold"
        style={{
          fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)",
          lineHeight: 1.1,
          color: "var(--verde-folha)",
        }}
      >
        {tituloDimensoes}
      </h2>

      <p
        className="mx-auto mt-4 max-w-3xl text-center"
        style={{
          fontFamily: "var(--fonte-principal)",
          fontSize: "clamp(1rem, 1.5vw, 1.75rem)",
          lineHeight: 1.2,
          letterSpacing: "var(--card-desc-tracking)",
          color: "var(--texto-principal)",
        }}
      >
        {introDimensoes}
      </p>

      <div
        className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          maxWidth:
            "calc(3 * var(--card-qualidade-largura) + 2 * var(--card-qualidade-gap-x))",
          columnGap: "var(--card-qualidade-gap-x)",
          rowGap: "clamp(64px, 5vw, var(--card-qualidade-gap-y))",
        }}
      >
        {dimensoes.map((d) => (
          // O id fica no wrapper: o menu usa href="#comercial", "#economica"...
          // scroll-mt deixa uma margem para o header fixo não cobrir o card.
          // O text-center faz a descrição herdar o alinhamento (o Card só
          // centraliza o título).
          <div
            key={d.id}
            id={d.id}
            className="flex scroll-mt-28 justify-center text-center"
          >
            <Card
              variante="qualidade"
              titulo={d.titulo}
              descricao={d.descricao}
              icone={icones[d.id]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}