interface BotaoProps {
    text: string;
    onClick?: () => void;
    corFundo?: string;
};

export default function Botao({text, onClick, corFundo = 'var(--laranja-botao)'}: BotaoProps){
    return(
        <button onClick={onClick} style={{backgroundColor: corFundo}} className="px-6 py-3 rounded-lg text-white font-bold transition-all hover:opacity-90 cursor-pointer">
            {text}
        </button>
    )
}