import type { Fruta, FiltroFruta } from "~/types/fruta";

export const opcoesFiltro: { valor: FiltroFruta; rotulo: string }[] = [
  { valor: "todas", rotulo: "Toda a linha" },
  { valor: "mercado-interno", rotulo: "Mercado Interno" },
  { valor: "exportacao", rotulo: "Exportação" },
];

/** Frutas que atendem ao filtro. "todas" devolve o catálogo inteiro. */
export function filtrarFrutas(frutas: Fruta[], filtro: FiltroFruta): Fruta[] {
  if (filtro === "todas") return frutas;
  return frutas.filter((fruta) => fruta.categorias.includes(filtro));
}
