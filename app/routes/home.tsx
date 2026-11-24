import type { Route } from "./+types/home";
import { Header } from "../components/header/Header";
import VoltarAoTopo from "../components/VoltarAoTopo";
import { Formulario } from "../components/formulario/Formulario";
import { BotaoWhatsApp } from "../components/BotaoWhatsApp";
import { Rodape } from "../components/rodape/Rodape";
import { SecaoFrutas } from "../components/frutas/SecaoFrutas";
import { SecaoQualidade } from "../components/qualidade/SecaoQualidade";
import { SecaoDimensoes } from "../components/dimensoes/SecaoDimensoes";


const SITE_URL = "https://eurofrut.vercel.app";

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
      <SecaoQualidade />
      <SecaoDimensoes />
      <Formulario />
      <BotaoWhatsApp />
      <Rodape />
      <VoltarAoTopo />
    </main>
  );
}
