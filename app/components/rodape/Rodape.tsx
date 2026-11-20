import manga from "../../img/manga.jpg";

export function Rodape() {
    return (
        <footer
            id="rodape"
            className="relative isolate overflow-hidden text-white px-6 py-12"
            style={{ backgroundColor: "var(--verde-escuro-footer)" }}
        >
            <img
                src={manga}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover blur-md scale-110"
            />
            <div
                className="absolute inset-0 -z-10 opacity-85"
                style={{ backgroundColor: "var(--verde-escuro-footer)" }}
            />
            <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row md:justify-between gap-10">
                {/* Caixa da esquerda: marca e frase */}
                <div>

                    <div className="flex items-center gap-3.5">
                        <svg viewBox="0 0 64 72" className="h-11 w-10 shrink-0" fill="none" aria-hidden="true">
                            <path d="M32 2C15.4315 2 2 15.4315 2 32C2 49.5 32 70 32 70C32 70 62 49.5 62 32C62 15.4315 48.5685 2 32 2Z" fill="#F2F5F0" />
                            <circle cx="32" cy="22" r="8.5" fill="#EB8B2C" />
                            <path d="M15 31C22 35 28.5 43 31 56C22 50 16.5 41 15 31Z" fill="#658B6F" />
                            <path d="M49 27C40 32 33.5 42 32 56C41.5 49 47.5 39 49 27Z" fill="#3E6B4C" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-2xl tracking-wide leading-none">EUROFRUT</span>
                            <span className="font-serif font-bold text-xs tracking-[0.2em] uppercase mt-1">GRUPO</span>
                        </div>
                    </div>

                    <p className="mt-4 max-w-sm">
                        Estrutura agrocomercial integrada, do campo ao mercado, no Brasil e no exterior.
                    </p>
                </div>

                {/* Caixa da direita: as 3 colunas de links */}
                <div className="flex flex-wrap gap-12">
                    <div>
                        <p className="font-bold">Navegação</p>
                        <ul className="mt-2">
                            <li><a href="#inicio">O Grupo</a></li>
                            <li><a href="#frutas">Produtos</a></li>
                            <li><a href="#qualidade">Qualidade</a></li>
                            <li><a href="#perfis">Sou produtor</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold">Contato</p>
                        <ul className="mt-2">
                            <li><a href="#cotacao">Solicitar orçamento</a></li>
                            <li><a href="#cotacao">Fale conosco</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-bold">Redes</p>
                        <ul className="mt-2">
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="max-w-[1180px] mx-auto mt-10 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70">
                    O Grupo EuroFrut reúne a EuroFrut (mercado interno) e a Jundal (exportação).
                </p>
            </div>
            <div className="max-w-[1180px] mx-auto mt-10 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70">
                    © Grupo EuroFrut  Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}