import { useState, useEffect } from "react";
import Hero from "./Hero";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40);
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <div className="relative w-full">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          rolou
            ? "bg-[#18291e]/90 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-black/35 via-black/10 to-transparent"
        }`}
      >
        <div className="max-w-[1180px] mx-auto flex items-center justify-between px-6 md:px-8 pt-4 pb-3 md:pt-5 md:pb-4">
          <a href="#" className="flex items-center gap-3.5 z-50">
            <svg viewBox="0 0 64 72" className="h-11 w-10 md:h-[52px] md:w-[46px] shrink-0 drop-shadow-sm" fill="none">
              <path d="M32 2C15.4315 2 2 15.4315 2 32C2 49.5 32 70 32 70C32 70 62 49.5 62 32C62 15.4315 48.5685 2 32 2Z" fill="#F2F5F0" />
              <circle cx="32" cy="22" r="8.5" fill="#EB8B2C" />
              <path d="M15 31C22 35 28.5 43 31 56C22 50 16.5 41 15 31Z" fill="#658B6F" />
              <path d="M49 27C40 32 33.5 42 32 56C41.5 49 47.5 39 49 27Z" fill="#3E6B4C" />
            </svg>
            <div className="flex flex-col text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
              <span className="font-serif font-bold text-2xl md:text-[27px] tracking-wide leading-none">EUROFRUT</span>
              <span className="font-serif font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase mt-1">GRUPO</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[15px] lg:text-[16px] font-medium text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
            <a href="#grupo" className="hover:text-[#eb8328] transition-colors">O Grupo</a>
            <a href="#produtos" className="hover:text-[#eb8328] transition-colors">Produtos</a>
            <a href="#qualidade" className="hover:text-[#eb8328] transition-colors">Qualidade</a>
            <a href="#produtor" className="hover:text-[#eb8328] transition-colors">Sou Produtor</a>
            <a href="#contato" className="hover:text-[#eb8328] transition-colors">Contato</a>
          </nav>

          <div className="hidden md:block">
            <a href="#orcamento" className="bg-[#eb8328] hover:bg-[#d9721b] text-white text-[15px] lg:text-[16px] font-medium px-7 py-3 rounded-full shadow-md transition duration-200">
              Solicitar orçamento
            </a>
          </div>

          <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden text-white focus:outline-none text-2xl z-50 p-1" aria-label="Alternar Menu">
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>

        {menuAberto && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-7 text-lg font-medium text-white md:hidden">
            <a href="#grupo" onClick={() => setMenuAberto(false)} className="hover:text-[#eb8328] transition">O Grupo</a>
            <a href="#produtos" onClick={() => setMenuAberto(false)} className="hover:text-[#eb8328] transition">Produtos</a>
            <a href="#qualidade" onClick={() => setMenuAberto(false)} className="hover:text-[#eb8328] transition">Qualidade</a>
            <a href="#produtor" onClick={() => setMenuAberto(false)} className="hover:text-[#eb8328] transition">Sou Produtor</a>
            <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-[#eb8328] transition">Contato</a>
            <a href="#orcamento" onClick={() => setMenuAberto(false)} className="bg-[#eb8328] hover:bg-[#d9721b] text-white text-base font-medium px-8 py-3 rounded-full shadow-lg transition mt-4">
              Solicitar orçamento
            </a>
          </div>
        )}
      </header>
      <Hero />
    </div>
  );
}

export default Header;
