export function Rodape() {
  return (
    <footer
     id="rodape"
    className="text-white px-6 py-12"
    style={{ backgroundColor: "var(--verde-escuro-footer)"}}
    >
      <p className="font-bold text-2xl">EUROFRUT</p>
      <p className="mt-4 max-w-sm">
        Estrutura agrocomercial integrada, do campo ao mercado, no Brasil e no exterior.
      </p>

      <div className="mt-8">
        <p className="font-bold">Navegação</p>
        <ul className="mt-2">
          <li><a href="#inicio">O Grupo</a></li>
          <li><a href="#frutas">Produtos</a></li>
          <li><a href="#qualidade">Qualidade</a></li>
          <li><a href="#perfis">Sou produtor</a></li>
        </ul>
      </div>
    </footer>
  );
}