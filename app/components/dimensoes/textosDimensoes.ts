

export type IdDimensao =
  | "comercial"
  | "economica"
  | "logistica"
  | "financeira"
  | "operacional"
  | "relacional";

export interface Dimensao {
  /** Vira o id da âncora: o link do menu usa href="#<id>" */
  id: IdDimensao;
  titulo: string;
  descricao: string;
}

export const tituloDimensoes = "Por que produzir com a Eurofrut";

export const introDimensoes =
  "Veja, em seis pontos, como funciona a parceria e o que ela significa para quem fornece.";

export const dimensoes: Dimensao[] = [
  {
    id: "comercial",
    titulo: "Comercial",
    descricao:
      "Ajudamos a levar a sua produção ao mercado certo, com compradores do Brasil e do exterior.",
  },
  {
    id: "economica",
    titulo: "Econômica",
    descricao:
      "Acompanhamos o mercado para você entender o valor da sua safra e decidir o melhor momento de vender.",
  },
  {
    id: "logistica",
    titulo: "Logística",
    descricao:
      "Cuidamos do caminho da fruta, do campo ao destino, para que a produção chegue em boas condições.",
  },
  {
    id: "financeira",
    titulo: "Financeira",
    descricao:
      "As condições de pagamento são combinadas de forma clara, para você planejar o caixa da propriedade.",
  },
  {
    id: "operacional",
    titulo: "Operacional",
    descricao:
      "Seleção, classificação e embalagem seguem um padrão, com controle em cada etapa do processo.",
  },
  {
    id: "relacional",
    titulo: "Relacional",
    descricao:
      "Uma parceria próxima e de longo prazo: você sabe com quem falar e acompanha cada etapa.",
  },
];