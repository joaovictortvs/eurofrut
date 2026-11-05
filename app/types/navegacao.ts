export interface ItemNavegacao{
    texto : string
    link : string
}
export interface PropsMenuMobile{
    aberto : boolean;
    aoFechar : () => void;
    itens : ItemNavegacao[];
}