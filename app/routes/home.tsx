import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Botao } from "../components/componentsReutilizaveis/Botao";
import { CampoText } from "../components/componentsReutilizaveis/CampoText"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EUROFRUT" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="max-w-md">
      {/*Header*/}
      {/*Body*/}
      <Botao text="teste" tamanho="catalogo" corFundo="--laranja-botao" corTexto="--texto-escuro" type="submit"/>
      <CampoText type="string" label="Nome" placeholder="" value="" curto={true}/>
      {/*Footer*/}
    </div>
  );
}
