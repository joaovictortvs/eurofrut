import { useState, useEffect } from "react";

export default function VoltarAoTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const checarScroll = () => {
      if (window.scrollY > 300) {
        setVisivel(true);
      } else {
        setVisivel(false);
      }
    };

    window.addEventListener("scroll", checarScroll);
    return () => window.removeEventListener("scroll", checarScroll);
  }, []);

  const subirParaOTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visivel) return null;

  return (
    <button
      onClick={subirParaOTopo}
      className="fixed bottom-6 right-6 z-50 p-3 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-lg transition-all duration-300"
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}