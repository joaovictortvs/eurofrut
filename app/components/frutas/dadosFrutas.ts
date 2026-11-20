import abacate from "~/img/abacate.jpg";
import manga from "~/img/manga.jpg";
import maracuja from "~/img/maracuja.jpg";
import uva from "~/img/uva.jpg";
import type { Fruta } from "~/types/fruta";

/*
 * Catálogo "Nossas frutas" (Dev 4).
 *
 * Para adicionar, remover ou alterar uma fruta, edite apenas este arquivo:
 * o layout dos cards, os filtros e o carrossel se adaptam sozinhos.
 *
 * PENDENTE (não consta no Figma ou não foi informado):
 *  - `categorias` de todas as frutas: o card do Figma não mostra o mercado,
 *    então ficou vazio. Enquanto estiver vazio, a fruta só aparece em
 *    "Toda a linha". Preencha com "mercado-interno", "exportacao" ou ambas.
 *  - O subtítulo do Figma diz "7 frutas", mas o design só traz 4 cards; o
 *    texto do site usa a contagem real deste arquivo.
 */
export const frutas: Fruta[] = [
  {
    id: "manga",
    nome: "Manga",
    descricao:
      "Selecionada nas melhores regiões produtoras do Brasil, com alto brix e padrão rigoroso para exportação marítima e aérea.",
    imagem: { src: manga, alt: "Manga madura pendurada no galho" },
    categorias: [],
    embalagem: "Caixa 4kg",
    disponibilidade: "Jun — Mar",
  },
  {
    id: "uva",
    nome: "Uva",
    descricao:
      "Uvas de mesa cultivadas com manejo cuidadoso e tecnologia hídrica, colhidas exclusivamente no ponto ideal de maturação.",
    imagem: { src: uva, alt: "Cacho de uvas escuras na videira" },
    categorias: [],
    embalagem: "Caixa 4,5kg", // conferir no Figma (leitura em baixa resolução)
    disponibilidade: "Ano Todo",
  },
  {
    id: "maracuja",
    nome: "Maracujá",
    descricao:
      "Produção em regiões estratégicas, com fruta de polpa densa e concentrada para processamento industrial e mercado in natura.",
    imagem: { src: maracuja, alt: "Mãos segurando maracujás amarelos" },
    categorias: [],
    embalagem: "Caixa 4kg",
    disponibilidade: "Ago — Fev",
  },
  {
    id: "abacate",
    nome: "Abacate",
    descricao:
      "Colhido no ponto de matéria seca exato para assegurar maturação uniforme, cremosidade e longevidade no ponto de venda final.",
    imagem: { src: abacate, alt: "Abacate cortado ao meio, mostrando o caroço" },
    categorias: [],
    embalagem: "Caixa 4kg",
    disponibilidade: "Fev — Jul",
  },
];
