type Tamanho = "catalogo" | "cotacao" | "faq" | "enviar" | "filtro";

interface BotaoProps {
    text: string;
    onClick?: () => void;
    corFundo?: string;
    corTexto?: string;
    tamanho?: Tamanho;
    type?: "button" | "submit";
};

export function Botao({text, onClick, corFundo, tamanho = "cotacao", corTexto}: BotaoProps){
    return(
        <button onClick={onClick} style={{backgroundColor: `var(${corFundo})`, padding: `var(--btn-${tamanho}-padding)`, color: `${corTexto ? `var(${corTexto})`: undefined}`, fontSize: `var(--btn-${tamanho}-fonte)` }} className={`rounded-lg text-white font-bold transition-all hover:opacity-90 cursor-pointer ${tamanho === 'enviar' ? 'w-full' : ""}`}>
            {text}
        </button>
    )
}