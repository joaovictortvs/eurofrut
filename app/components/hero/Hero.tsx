export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center pt-28 pb-16 px-4"
      style={{
        // DICA: Substitui '/hero-bg.jpg' pelo caminho da imagem local na pasta public
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      {/* Cartão Central Glassmorphism */}
      <div className="relative z-10 max-w-4xl w-full bg-[#15271c]/60 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-10 md:p-14 text-center text-white shadow-2xl">
        
        {/* Tags / Pílulas */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-6 md:mb-8">
          <span className="px-4 py-1.5 rounded-full bg-[#e8772e] border border-white/20 text-white text-xs font-semibold shadow-sm">
            Produção
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#e8772e] border border-white/20 text-white text-xs font-semibold shadow-sm">
            Distribuição
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#e8772e] border border-white/20 text-white text-xs font-semibold shadow-sm">
            Exportação
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
          Do Vale do São Francisco <br className="hidden sm:block" />
          para o mundo.
        </h1>

        {/* Subtítulo */}
        <p className="text-xs sm:text-base text-gray-100 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          Grupo agrocomercial integrado <br />
          originação, packing house própria, logística e exportação para distribuidores, redes de varejo e importadores.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#orcamento"
            className="w-full sm:w-auto bg-[#e8772e] hover:bg-[#d6671e] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition duration-200 text-sm text-center"
          >
            Solicitar orçamento
          </a>
          <a
            href="#fornecer"
            className="w-full sm:w-auto bg-[#d3e9d7] hover:bg-[#c2e2c8] text-[#1b3022] font-bold px-8 py-3.5 rounded-full shadow-lg transition duration-200 text-sm text-center"
          >
            Sou produtor, quero fornecer
          </a>
        </div>

      </div>
    </section>
  );
}