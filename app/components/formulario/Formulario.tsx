
import { Botao } from "../componentsReutilizaveis/Botao";
import { CampoText } from "../componentsReutilizaveis/CampoText";
import { useState } from "react";

export function Formulario() {
  const [dados, setDados] = useState({
        nome: "",
        empresa: "",
        contato: "",
        interesse: "",
    });

    function atualizar(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setDados({ ...dados, [e.target.name]: e.target.value });
    }

    // 1. Memória dos erros: vazio = sem erro
    const [erros, setErros] = useState({
        nome: "",
        contato: "",
        interesse: "",
    });

    // 2. Confere os campos quando a pessoa clica em "Enviar solicitação"
    function enviar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // impede a página de recarregar

        const pareceEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.contato.trim());
        const pareceTelefone = dados.contato.replace(/\D/g, "").length >= 10;

        const novosErros = {
            nome: dados.nome.trim() === "" ? "Informe seu nome." : "",
            contato:
                dados.contato.trim() === ""
                    ? "Informe um e-mail ou WhatsApp."
                    : !pareceEmail && !pareceTelefone
                        ? "Digite um e-mail válido ou um telefone com DDD."
                        : "",
            interesse: dados.interesse.trim() === "" ? "Conte o que você procura." : "",
        };

        setErros(novosErros);

        const temErro = Object.values(novosErros).some((msg) => msg !== "");
        if (temErro) return; // para aqui e não envia

        // Etapa 4: aqui entra o envio pro Formspree
        console.log("Tudo certo, enviando:", dados);
    }

    return (
        <section
            id="cotacao"
            className="text-white px-6 md:px-12 lg:px-16 py-16"
            style={{ backgroundColor: "var(--verde-escuro-footer)" }}
        >
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-10">

                {/* Lado esquerdo: título, texto e contatos */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold">Fale com nossa equipe.</h2>
                    <p className="mt-4 max-w-sm">
                        Só o essencial para começar, o restante a gente alinha na conversa.
                    </p>
                    <div className="mt-8 flex flex-col gap-4">
                        <a href="mailto:contato@eurofrut.com.br" className="flex items-center gap-3 hover:opacity-80">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "var(--laranja-botao)" }}>✉</span>
                            contato@eurofrut.com.br
                        </a>
                        <a href="tel:+5500000000000" className="flex items-center gap-3 hover:opacity-80">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "var(--laranja-botao)" }}>✆</span>
                            +55 (00) 00000-0000
                        </a>
                    </div>


                </div>

                {/* Lado direito: o card com os campos */}
                <form
                    onSubmit={enviar}
                    noValidate
                    className="md:w-1/2"
                    style={{
                        backgroundColor: "var(--form-card-bg)",
                        borderRadius: "var(--form-card-raio)",
                        padding: "var(--form-card-padding)",
                    }}
                >
                    <CampoText label="Nome" name="nome" value={dados.nome} onChange={atualizar} erro={erros.nome} />
                    <CampoText label="Empresa" name="empresa" value={dados.empresa} onChange={atualizar} />
                    <CampoText label="E-mail / WhatsApp" name="contato" value={dados.contato} onChange={atualizar} erro={erros.contato} />
                    <CampoText label="Interesse" name="interesse" value={dados.interesse} onChange={atualizar} erro={erros.interesse} curto />

                    <div className="mt-6">
                        <Botao text="Enviar solicitação" tamanho="enviar" type="submit" />
                    </div>
                </form>

            </div>
        </section>
    );
}
