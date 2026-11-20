import { Botao } from "../componentsReutilizaveis/Botao";
import { CampoText } from "../componentsReutilizaveis/CampoText";

export function Formulario() {
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
                    className="md:w-1/2"
                    style={{
                        backgroundColor: "var(--form-card-bg)",
                        borderRadius: "var(--form-card-raio)",
                        padding: "var(--form-card-padding)",
                    }}
                >
                    <CampoText label="Nome" name="nome" value="" />
                    <CampoText label="Empresa" name="empresa" value="" />
                    <CampoText label="E-mail / WhatsApp" name="contato" value="" />
                    <CampoText label="Interesse" name="interesse" value="" curto />

                    <div className="mt-6">
                        <Botao text="Enviar solicitação" tamanho="enviar" type="submit" />
                    </div>
                </form>

            </div>
        </section>
    );
}
