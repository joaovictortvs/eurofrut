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
 * Mercados (`categorias`) conforme informado pelo João Victor (24/11/2026).
 *
 * PENDENTE (não consta no Figma ou não foi informado):
 *  - Melão, Melancia e Goiaba: faltam descrição, embalagem, disponibilidade e
 *    foto. Os cards ocultam o que está vazio; preencher aqui quando chegar.
 */
export const frutas: Fruta[] = [
  {
    id: "manga",
    nome: "Manga",
    descricao:
      "Selecionada nas melhores regiões produtoras do Brasil, com alto brix e padrão rigoroso para exportação marítima e aérea.",
    imagem: { src: manga, alt: "Manga madura pendurada no galho" },
    categorias: ["mercado-interno", "exportacao"],
    embalagem: "Caixa 4kg",
    disponibilidade: "Jun — Mar",
  },
  {
    id: "uva",
    nome: "Uva",
    descricao:
      "Uvas de mesa cultivadas com manejo cuidadoso e tecnologia hídrica, colhidas exclusivamente no ponto ideal de maturação.",
    imagem: { src: uva, alt: "Cacho de uvas escuras na videira" },
    categorias: ["mercado-interno", "exportacao"],
    embalagem: "Caixa 4,5kg", // conferir no Figma (leitura em baixa resolução)
    disponibilidade: "Ano Todo",
  },
  {
    id: "maracuja",
    nome: "Maracujá",
    descricao:
      "Produção em regiões estratégicas, com fruta de polpa densa e concentrada para processamento industrial e mercado in natura.",
    imagem: { src: maracuja, alt: "Mãos segurando maracujás amarelos" },
    categorias: ["mercado-interno"],
    embalagem: "Caixa 4kg",
    disponibilidade: "Ago — Fev",
  },
  {
    id: "abacate",
    nome: "Abacate",
    descricao:
      "Colhido no ponto de matéria seca exato para assegurar maturação uniforme, cremosidade e longevidade no ponto de venda final.",
    imagem: { src: abacate, alt: "Abacate cortado ao meio, mostrando o caroço" },
    categorias: ["mercado-interno"],
    embalagem: "Caixa 4kg",
    disponibilidade: "Fev — Jul",
  },
  {
    id: "melao",
    nome: "Melão",
    categorias: ["mercado-interno", "exportacao"],
  },
  {
    id: "melancia",
    nome: "Melancia",
    categorias: ["mercado-interno"],
  },
  {
    id: "goiaba",
    nome: "Goiaba",
    categorias: ["mercado-interno"],
  },
];
