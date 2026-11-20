import type { FiltroFruta } from "~/types/fruta";
import { opcoesFiltro } from "./filtrosFrutas";

interface FiltrosFrutasProps {
  filtroAtivo: FiltroFruta;
  aoMudar: (filtro: FiltroFruta) => void;
}

export function FiltrosFrutas({ filtroAtivo, aoMudar }: FiltrosFrutasProps) {
  return (
    <div
      role="group"
      aria-label="Filtrar frutas por mercado"
      className="flex flex-wrap gap-1 self-start rounded-full border border-[#E2E0D4] bg-white p-1 md:shrink-0 md:flex-nowrap md:self-auto"
    >
      {opcoesFiltro.map(({ valor, rotulo }) => {
        const ativo = valor === filtroAtivo;
        return (
          <button
            key={valor}
            type="button"
            aria-pressed={ativo}
            onClick={() => aoMudar(valor)}
            className={`cursor-pointer rounded-full px-4 py-2 text-xs leading-4 font-bold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E37A24] ${
              ativo ? "bg-[#14261C] text-white" : "bg-transparent text-[#68706B] hover:text-[#14261C]"
            }`}
          >
            {rotulo}
          </button>
        );
      })}
    </div>
  );
}
