type Tamanho = "catalogo" | "cotacao" | "faq" | "enviar" | "filtro";
type Variante = "primario" | "secundario" | "verde";

interface BotaoProps {
    text: string;
    onClick?: () => void;
    tamanho?: Tamanho;
    variante?: Variante;
    type?: "button" | "submit";
    disabled?: boolean;
};

const variantes: Record<Variante, { fundo: string; texto: string }> = {
    primario: { fundo: "var(--laranja-botao)", texto: "#FFFFFF" },
    secundario: { fundo: "var(--branco-botao)", texto: "var(--texto-escuro)" },
    verde: { fundo: "var(--verde-botao)", texto: "#FFFFFF" },
};


export function Botao({
    text,
    onClick,
    tamanho = "cotacao",
    variante = "primario",
    type = "button",
    disabled = false,
}: BotaoProps) {
    const cores = variantes[variante];

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                backgroundColor: cores.fundo,
                color: cores.texto,
                padding: `var(--btn-${tamanho}-padding)`,
                fontSize: `var(--btn-${tamanho}-fonte)`,
            }}
            className={`rounded-full font-bold whitespace-nowrap transition-all ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 cursor-pointer"
            } ${tamanho === "enviar" ? "w-full" : ""}`}
        >
            {text}
        </button>
    );
}