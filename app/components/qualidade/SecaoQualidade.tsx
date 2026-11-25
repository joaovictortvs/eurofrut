import type { CSSProperties, ReactNode } from "react";
import { Card } from "../componentsReutilizaveis/Card";

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

// Cores desta seção. O Card do Dev 1 recebe o NOME de uma variável CSS,
// então definimos as variáveis aqui, só para esta seção, sem mexer no app.css.
const cores = {
  "--qualidade-titulo-cor": "#0E2317",
  "--qualidade-desc-cor": "#3F664F",
  "--qualidade-icone-cor": "#E5892B",
} as CSSProperties;

const itens: { titulo: string; descricao: string; icone: ReactNode }[] = [
  {
    titulo: "Seleção",
    descricao:
      "Triagem criteriosa das frutas conforme padrões de qualidade definidos por cultura.",
    icone: (
      <Svg>
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
      </Svg>
    ),
  },
  {
    titulo: "Classificação",
    descricao:
      "Categorização por tamanho, cor e maturação, ajustada a cada mercado de destino.",
    icone: (
      <Svg>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </Svg>
    ),
  },
  {
    titulo: "Embalagem",
    descricao:
      "Acondicionamento adequado para preservação e transporte seguro até o destino.",
    icone: (
      <Svg>
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </Svg>
    ),
  },
  {
    titulo: "Rastreabilidade",
    descricao:
      "Monitoramento e registro de cada etapa, do campo até o destino final.",
    icone: (
      <Svg>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </Svg>
    ),
  },
  {
    titulo: "Segurança alimentar",
    descricao:
      "Boas práticas de produção e controle fitossanitário em toda a cadeia.",
    icone: (
      <Svg>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </Svg>
    ),
  },
  {
    titulo: "Logística",
    descricao:
      "Infraestrutura conectando regiões produtoras a diferentes mercados.",
    icone: (
      <Svg>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </Svg>
    ),
  },
];

export function SecaoQualidade() {
  return (
    <section
      id="qualidade"
      className="px-6 py-16"
      style={{ backgroundColor: "var(--fundo-pagina)", ...cores }}
    >
      <p
        className="mx-auto max-w-3xl text-center"
        style={{
          fontFamily: "var(--fonte-principal)",
          fontSize: "clamp(1rem, 1.5vw, 1.75rem)",
          lineHeight: 1.2,
          letterSpacing: "var(--card-desc-tracking)",
          color: "var(--texto-principal)",
        }}
      >
        A Eurofrut investe continuamente em boas práticas de produção,
        segurança dos alimentos e controle fitossanitário.
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
        {itens.map((item) => (
          // O wrapper centraliza o card na coluna e herda o text-center
          // para a descrição (o Card só centraliza o título).
          <div key={item.titulo} className="flex justify-center text-center">
            <Card
              variante="qualidade"
              titulo={item.titulo}
              descricao={item.descricao}
              icone={item.icone}
              corIcone="--qualidade-icone-cor"
              corTitulo="--qualidade-titulo-cor"
              corDescricao="--qualidade-desc-cor"
            />
          </div>
        ))}
      </div>
    </section>
  );
}