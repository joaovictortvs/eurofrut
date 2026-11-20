import mangaBg from "../../img/manga.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-[center_55%] pt-24 pb-10 px-4 sm:px-8"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.14)), url(${mangaBg})` }}
    >
      <div className="relative z-10 max-w-[1180px] w-full bg-white/[0.16] backdrop-blur-[12px] border border-white/15 rounded-[32px] sm:rounded-[44px] px-5 sm:px-14 md:px-20 py-9 sm:py-14 md:py-16 text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-7 md:mb-9">
          <span className="px-3.5 sm:px-7 py-1 sm:py-1.5 rounded-full bg-[#c77d32]/80 border border-white/75 text-white text-[11px] sm:text-[13px] font-medium shadow-sm">Produção</span>
          <span className="px-3.5 sm:px-7 py-1 sm:py-1.5 rounded-full bg-[#c77d32]/80 border border-white/75 text-white text-[11px] sm:text-[13px] font-medium shadow-sm">Distribuição</span>
          <span className="px-3.5 sm:px-7 py-1 sm:py-1.5 rounded-full bg-[#c77d32]/80 border border-white/75 text-white text-[11px] sm:text-[13px] font-medium shadow-sm">Exportação</span>
        </div>

        <h1
          className="text-[31px] sm:text-[62px] md:text-[78px] lg:text-[84px] font-semibold tracking-[-0.015em] leading-[1.06] sm:leading-[1.02] text-center text-white mb-6 sm:mb-7 md:mb-9"
          style={{ textShadow: "0px 4px 14px rgba(0, 0, 0, 0.65), 0px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Do Vale do São Francisco <br className="hidden sm:block" />
          para o mundo.
        </h1>

        <p
          className="max-w-[860px] mx-auto text-left text-[15px] sm:text-xl md:text-[23.5px] font-normal text-white leading-[1.35] sm:leading-[1.32] mb-8 sm:mb-10 md:mb-12"
          style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.75)" }}
        >
          Grupo agrocomercial integrado <br />
          originação, packing house própria, logística e exportação para <br className="hidden md:block" />
          distribuidores, redes de varejo e importadores.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6">
          <a href="#orcamento" className="w-full sm:w-auto bg-[#eb8328] hover:bg-[#d9721b] text-white font-medium text-[15px] sm:text-lg md:text-[21px] px-6 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-[19px] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition duration-200 text-center">
            Solicitar orçamento
          </a>
          <a href="#fornecer" className="w-full sm:w-auto bg-[#e3ede2] hover:bg-[#d5e3d3] text-[#1a291e] font-medium text-[15px] sm:text-lg md:text-[21px] px-6 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-[19px] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition duration-200 text-center">
            Sou produtor, quero fornecer
          </a>
        </div>
      </div>
    </section>
  );
}
