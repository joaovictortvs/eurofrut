import type { ChangeEvent } from "react";

interface CampoTextProps {
    label: string;
    value: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    name?: string;
    required?: boolean;
    curto?: boolean;
}

export function CampoText({
    label,
    value,
    placeholder,
    onChange,
    type = "text",
    name,
    required,
    curto = false,
}: CampoTextProps) {
    const id = name ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div
            className="flex flex-col w-full"
            style={{ gap: "var(--campo-label-gap)", marginBottom: "var(--campo-grupo-gap)" }}
        >
            <label
                htmlFor={id}
                className="font-semibold"
                style={{ width: curto ? "var(--campo-curto-largura, 59%)" : "100%",
                maxWidth: "100%", fontSize: "var(--campo-label-fonte)" }}
            >
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="outline-none focus:ring-2 focus:ring-emerald-800"
                style={{
                    backgroundColor: "var(--campo-bg)",
                    borderRadius: "var(--campo-raio)",
                    padding: "var(--campo-padding)",
                    height: curto ? "var(--campo-curto-altura)" : "var(--campo-altura)",
                    width: curto ? "var(--campo-curto-largura, 59%)" : "100%",
                    maxWidth: "100%",
                }}
            />
        </div>
    );
}