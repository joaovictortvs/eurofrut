/*
 * Textos da seção "Cada etapa, com o mesmo padrão de controle." (Dev 3).
 * Fonte: Figma, ProcessFlowSection. Para mudar um texto ou a ordem das
 * etapas, edite só aqui.
 *
 * PENDENTE: o Figma traz só a descrição curta de cada etapa. A explicação
 * mostrada ao tocar na etapa (`explicacao`) ainda não foi escrita; enquanto
 * estiver vazia, o painel repete a descrição curta. Preencher quando o texto
 * for definido pelo time.
 */
export const eyebrowFluxo = "Do campo ao porto — em um único fluxo";
export const tituloFluxo = "Cada etapa, com o mesmo padrão de controle.";
export const introFluxo =
  "Uma cadeia logística integrada e verticalizada que elimina intermediários desnecessários e assegura frescor absoluto.";

export type IdEtapa = "produtor" | "originacao" | "packing-house" | "distribuicao" | "porto" | "mercado";

export interface EtapaFluxo {
  id: IdEtapa;
  nome: string;
  /** Descrição curta, mostrada no card. */
  descricao: string;
  /** Explicação mostrada ao tocar na etapa. */
  explicacao?: string;
}

// A ordem do array é a ordem do fluxo (campo → porto → mercado).
export const etapas: EtapaFluxo[] = [
  { id: "produtor", nome: "Produtor", descricao: "Colheita orientada no campo" },
  { id: "originacao", nome: "Originação", descricao: "Seleção e conformidade" },
  { id: "packing-house", nome: "Packing House", descricao: "Padronização e embalo" },
  { id: "distribuicao", nome: "Distribuição", descricao: "Cadeia de frio e rastreio" },
  { id: "porto", nome: "Porto", descricao: "Exportação marítima" },
  { id: "mercado", nome: "Mercado", descricao: "Gôndola e mesa do cliente" },
];
