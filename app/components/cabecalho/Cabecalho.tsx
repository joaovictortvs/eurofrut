import { useState } from "react";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
      {/* Logótipo */}
      <div className="flex items-center gap-2 z-50">
        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
          🍃
        </div>
        <div>
          <span className="font-extrabold text-lg tracking-wider block leading-none text-white">
            EUROFRUT
          </span>
          <span className="text-[10px] tracking-widest text-gray-300 font-semibold block">
            GRUPO
          </span>
        </div>
      </div>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
        <a href="#grupo" className="hover:text-[#e8772e] transition-colors">O Grupo</a>
        <a href="#produtos" className="hover:text-[#e8772e] transition-colors">Produtos</a>
        <a href="#qualidade" className="hover:text-[#e8772e] transition-colors">Qualidade</a>
        <a href="#produtor" className="hover:text-[#e8772e] transition-colors">Sou Produtor</a>
        <a href="#contato" className="hover:text-[#e8772e] transition-colors">Contato</a>
      </nav>

      {/* Botão de Cotação Desktop */}
      <div className="hidden md:block">
        <a
          href="#cotacao"
          className="bg-[#e8772e] hover:bg-[#d6671e] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition duration-200"
        >
          Solicitar orçamento
        </a>
      </div>

      {/* Botão Menu Mobile */}
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="md:hidden text-white focus:outline-none text-2xl z-50 p-1"
        aria-label="Alternar Menu"
      >
        {menuAberto ? "✕" : "☰"}
      </button>

      {/* Gaveta do Menu Mobile */}
      {menuAberto && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-7 text-lg font-medium text-white md:hidden">
          <a href="#grupo" onClick={() => setMenuAberto(false)} className="hover:text-[#e8772e] transition">O Grupo</a>
          <a href="#produtos" onClick={() => setMenuAberto(false)} className="hover:text-[#e8772e] transition">Produtos</a>
          <a href="#qualidade" onClick={() => setMenuAberto(false)} className="hover:text-[#e8772e] transition">Qualidade</a>
          <a href="#produtor" onClick={() => setMenuAberto(false)} className="hover:text-[#e8772e] transition">Sou Produtor</a>
          <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-[#e8772e] transition">Contato</a>
          <a
            href="#cotacao"
            onClick={() => setMenuAberto(false)}
            className="bg-[#e8772e] hover:bg-[#d6671e] text-white text-base font-semibold px-8 py-3 rounded-full shadow-lg transition mt-4"
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}