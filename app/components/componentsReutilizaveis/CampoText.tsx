import type { ChangeEvent } from "react";

interface CampoTextProps {
    label: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    type?: string;
    name?: string;
    required?: boolean;
    curto?: boolean;
    multilinha?: boolean;
    linhas?: number;
    erro?: string;
}

export function CampoText({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    name,
    required,
    curto = false,
    multilinha = false,
    linhas = 5,
    erro,
}: CampoTextProps) {
    const id = name ?? label.toLowerCase().replace(/\s+/g, "-");
    const idErro = `${id}-erro`;

    const propsComuns = {
        id,
        name,
        value,
        onChange,
        placeholder,
        required,
        "aria-invalid": erro ? true : undefined,
        "aria-describedby": erro ? idErro : undefined,
        className:
            "outline-none focus:ring-2 focus:ring-[color:var(--laranja-botao)] placeholder:text-[color:var(--campo-placeholder-cor)]",
    };

    const estiloBase = {
        backgroundColor: "var(--campo-bg)",
        color: "var(--campo-texto-cor)",
        fontSize: "var(--campo-fonte)",
        borderRadius: "var(--campo-raio)",
        outline: erro ? "3px solid var(--campo-erro-cor)" : undefined,
        width: curto ? "var(--campo-curto-largura, 59%)" : "100%",
        maxWidth: "100%",
    };

    return (
        <div
            className="flex flex-col w-full"
            style={{ gap: "var(--campo-label-gap)", marginBottom: "var(--campo-grupo-gap)" }}
        >
            <label
                htmlFor={id}
                className="font-semibold"
                style={{ color: "var(--campo-label-cor)", fontSize: "var(--campo-label-fonte)" }}
            >
                {label}
            </label>

            {multilinha ? (
                <textarea
                    {...propsComuns}
                    rows={linhas}
                    style={{
                        ...estiloBase,
                        padding: "var(--campo-multilinha-padding)",
                        minHeight: "var(--campo-multilinha-altura)",
                        resize: "vertical",
                    }}
                />
            ) : (
                <input
                    {...propsComuns}
                    type={type}
                    style={{
                        ...estiloBase,
                        padding: "var(--campo-padding)",
                        height: curto ? "var(--campo-curto-altura)" : "var(--campo-altura)",
                    }}
                />
            )}

            {erro && (
                <p
                    id={idErro}
                    role="alert"
                    style={{ color: "var(--campo-erro-cor)", fontSize: "var(--campo-erro-fonte)" }}
                >
                    {erro}
                </p>
            )}
        </div>
    );
}