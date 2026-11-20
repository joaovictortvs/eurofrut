import type { Route } from "./+types/home";
import { Header } from "../components/header/Header";
import { Botao } from "../components/componentsReutilizaveis/Botao";
import { CampoText } from "../components/componentsReutilizaveis/CampoText";
import { Card } from "~/components/componentsReutilizaveis/Card";
import VoltarAoTopo from "../components/VoltarAoTopo";
import { Formulario } from "../components/formulario/Formulario";
import { BotaoWhatsApp } from "../components/BotaoWhatsApp";
import { Rodape } from "../components/rodape/Rodape";
import { SecaoFrutas } from "../components/frutas/SecaoFrutas";

import maracuja from "../img/maracuja.jpg";
import logistica from "../img/icones/logistica.svg";

const frutas = [
  {
    nome: "Maracujá",
    img: maracuja,
    descricao: "Produção em regiões estratégicas, com fruta de polpa concentrada para indústria e mercado in natura.",
  },
];

const qualidade = [
  { titulo: "Logística", icone: logistica, descricao: "Infraestrutura conectando regiões produtoras a diferentes mercados." },
];

const SITE_URL = "https://eurofrut.vercel.app"; /* Ainda não criado */

export function meta({}: Route.MetaArgs) {
  const titulo = "Eurofrut | Frutas para mercado interno e exportação";
  const descricao =
    "Eurofrut: manga, uva, maracujá e mais, com seleção, classificação e rastreabilidade para o mercado interno e exportação. Solicite sua cotação.";

  return [
    { title: titulo },
    { name: "description", content: descricao },

    // Imagem de compartilhamento (WhatsApp, Facebook, LinkedIn)
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: "Eurofrut" },
    { property: "og:title", content: titulo },
    { property: "og:description", content: descricao },
    { property: "og:url", content: SITE_URL },
    { property: "og:image", content: `${SITE_URL}/og-image.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter / X
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Header />

      <SecaoFrutas />

      <div className="max-w-md">
        {/*Header*/}
        {/*Body*/}
        {/*Footer*/}
      </div>

      <Formulario />
      <BotaoWhatsApp />
      <Rodape />
      <VoltarAoTopo />
    </main>
  );
}
