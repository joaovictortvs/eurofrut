import type { ReactNode } from "react";

interface CardQualidadeProps {
  icone: ReactNode;
  titulo: string;
  descricao: string;
}

// Os tamanhos usam os tokens --card-qualidade-* do app.css como valor máximo
// (desktop) e encolhem com clamp() em telas menores.
const ICONE = "clamp(56px, 4.5vw, var(--card-qualidade-icone))";

export function CardQualidade({ icone, titulo, descricao }: CardQualidadeProps) {
  return (
    <article
      className="relative flex flex-col items-center bg-white text-center shadow-xl shadow-black/5"
      style={{
        minHeight: "clamp(240px, 18.4vw, var(--card-qualidade-altura))",
        borderRadius: "clamp(40px, 4.4vw, var(--card-qualidade-raio))",
        padding: `calc(${ICONE} / 2 + clamp(16px, 2vw, 40px)) clamp(24px, 2.3vw, var(--card-qualidade-padding-x)) 40px`,
      }}
    >
      {/* Ícone: círculo com metade para fora da borda de cima */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white"
        style={{
          width: ICONE,
          height: ICONE,
          backgroundColor: "#E5892B",
        }}
      >
        <span className="flex h-1/2 w-1/2 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
          {icone}
        </span>
      </div>

      <h3
        className="font-bold"
        style={{
          fontSize: "clamp(1.25rem, 1.9vw, 2.25rem)",
          color: "#0E2317",
        }}
      >
        {titulo}
      </h3>

      <p
        className="mt-3 leading-snug"
        style={{
          fontSize: "clamp(0.9rem, 1.25vw, 1.5rem)",
          color: "#3F664F",
        }}
      >
        {descricao}
      </p>
    </article>
  );
}