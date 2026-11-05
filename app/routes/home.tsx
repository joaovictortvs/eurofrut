import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Botao } from "../components/componentsReutilizaveis/Botao";
import { CampoText } from "../components/componentsReutilizaveis/CampoText"
import { Card } from "~/components/componentsReutilizaveis/Card";
import Cabecalho from "../components/cabecalho/Cabecalho";
import Hero from "../components/hero/Hero";
import VoltarAoTopo from "../components/voltarAoTopo/VoltarAoTopo";

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
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
   <main className="w-full min-h-screen bg-white">
    
      <Cabecalho />
      <Hero />
    <div className="max-w-md">
      {/*Header*/}
      {/*Body*/}
      <Botao text="Ver catálogo e solicitar orçamento" tamanho="catalogo" corFundo="--laranja-botao"/>
      <CampoText type="string" label="Nome" placeholder="" value="" curto={true}/>
      {/* <Card
          variante="perfil"
          titulo="Sou Comprador"
          descricao="Distribuidor, rede de varejo, importador ou CEASA buscando volume, calibre e conformidade técnica."
          corBloco="--card-perfil-bloco-comprador"
          bloco={
            <ul className="list-disc pl-10 m-0">
              <li>Especificações técnicas por fruta</li>
              <li>Certificações GlobalG.A.P, HACCP, BRC</li>
              <li>Mercado interno e exportação</li>
            </ul>
          }
        >
          <Botao text="Ver catálogo e solicitar orçamento" tamanho="catalogo" corFundo="--laranja-botao" type="button"/>
        </Card> */}
        {/* <Card
          variante="fruta"
          titulo="Manga"
          descricao="Selecionada nas melhores regiões produtoras do Brasil, com padrão de qualidade para exportação."
          imagem={{ img: maracuja, alt: "Manga" }}
          tags={["Caixa 4kg", "Jun - Mar"]} 
>
  <Botao text="Solicitar Cotação" tamanho="cotacao" corFundo="--laranja-botao"/>
</Card> */}

      {qualidade.map((q) => (
    <Card
      key={q.titulo}
      variante="qualidade"
      titulo={q.titulo}
      descricao={q.descricao}
      icone={<img src={q.icone} alt="" style={{ width: "55%" }} />}
    />
  ))}
      {/*Footer*/}
    </div>
    <VoltarAoTopo />
    </main>
  );
}
