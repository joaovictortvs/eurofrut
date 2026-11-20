/** Categorias de mercado. Uma fruta pode pertencer a mais de uma. */
export type CategoriaFruta = "mercado-interno" | "exportacao";

/** Filtro ativo no catálogo: todas as frutas ou uma categoria. */
export type FiltroFruta = "todas" | CategoriaFruta;

export interface Fruta {
  /** Identificador único e estável (usado como key do React). */
  id: string;
  nome: string;
  descricao: string;
  /** Opcional enquanto a imagem oficial não foi entregue. */
  imagem?: { src: string; alt: string };
  /** Mercados atendidos. Vazio = classificação ainda não informada. */
  categorias: CategoriaFruta[];
  /** Peso ou tipo de embalagem. Ex.: "Caixa 4kg". */
  embalagem: string;
  /** Período de disponibilidade. Ex.: "Jun — Mar". */
  disponibilidade: string;
}
