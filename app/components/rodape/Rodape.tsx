export function Rodape() {
  return (
    <footer
      id="rodape"
      className="text-white px-6 py-12"
      style={{ backgroundColor: "var(--verde-escuro-footer)" }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Caixa da esquerda: marca e frase */}
        <div>
          <p className="font-bold text-2xl">EUROFRUT</p>
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
    </footer>
  );
}