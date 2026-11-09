import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Botao } from "../components/componentsReutilizaveis/Botao";
import { CampoText } from "../components/componentsReutilizaveis/CampoText"
import { Card } from "~/components/componentsReutilizaveis/Card";

import maracuja from "../img/maracuja.jpg";
import logistica from "../img/icones/logistica.svg";

const frutas = [
  {
    nome: "Maracujá",
    img: maracuja,
    descricao: "Produção em regiões estratégicas, com fruta de polpa concentrada para indústria e mercado in natura.",
  },
]

const qualidade = [
  { titulo: "Logística", icone: logistica, descricao: "Infraestrutura conectando regiões produtoras a diferentes mercados." },
]

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EUROFRUT" },
    { name: "description", content: "Eurofrut: manga, uva, maracujá e mais, com seleção, classificação e rastreabilidade para o mercado interno e exportação. Solicite sua cotação." },
  ];
}

export default function Home() {
  return (
    <div>
      {/*Header*/}
      {/*Body*/}
      {/*Footer*/}
    </div>
  );
}
