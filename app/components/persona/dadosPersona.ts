/*
 * Textos da seção "Você está comprando ou fornecendo?" (Dev 3).
 * Fonte: Figma, PersonaChooserSection. Para mudar um texto, edite só aqui.
 */
export const tituloPersona = "Você está comprando ou fornecendo?";
export const introPersona =
  "Seja um parceiro de distribuição de alta escala ou um produtor parceiro com rentabilidade garantida.";

export type IdPerfil = "comprador" | "produtor";

export interface PerfilPersona {
  id: IdPerfil;
  titulo: string;
  descricao: string;
  itens: string[];
  /** Texto e destino (âncora da própria página) do botão. */
  acao: { rotulo: string; href: string };
}

export const perfis: PerfilPersona[] = [
  {
    id: "comprador",
    titulo: "Sou Comprador",
    descricao:
      "Distribuidor, rede de varejo, importador ou CEASA buscando volume constante, calibre refinado e rigorosa conformidade técnica.",
    itens: [
      "Especificações técnicas detalhadas por fruta",
      "Certificações internacionais GlobalG.A.P, HACCP, BRC",
      "Atendimento dedicado a mercado interno e exportação",
    ],
    // O Figma não define o destino dos botões. Provisório: catálogo e formulário.
    acao: { rotulo: "Ver catálogo e solicitar orçamento", href: "#frutas" },
  },
  {
    id: "produtor",
    titulo: "Sou Produtor",
    descricao:
      "Produtor rural do Vale do São Francisco ou de outras regiões buscando escoamento seguro, transparência e previsibilidade financeira.",
    itens: [
      "Como funciona a parceria comercial direta",
      "Prazos transparentes e condições ágeis de recebimento",
      "Calendário integrado de safra e análise de amostras",
    ],
    acao: { rotulo: "Quero ser parceiro", href: "#cotacao" },
  },
];
