import type { PropsMenuMobile } from "../../types/navegacao";

export default function MenuMobile({ aberto, aoFechar, itens }: PropsMenuMobile) {
  // Se o menu não estiver aberto, não desenha nada na tela
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 md:hidden">
      {/* Gaveta lateral do menu */}
      <div className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-xl flex flex-col justify-between">
        <div>
          {/* Cabeçalho do Menu com Botão Fechar */}
          <div className="flex items-center justify-between border-b pb-4">
            <span className="text-xl font-bold text-green-800">Eurofrut</span>
            <button
              onClick={aoFechar}
              className="p-2 text-gray-600 hover:text-black font-bold text-xl"
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          {/* Links de Navegação */}
          <nav className="mt-6 flex flex-col gap-4">
            {itens.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={aoFechar}
                className="text-lg font-medium text-gray-800 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              >
                {item.texto}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}