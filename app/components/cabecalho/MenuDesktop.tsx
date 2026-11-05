import type { ItemNavegacao } from "../../types/navegacao";

interface PropsMenuDesktop {
  itens: ItemNavegacao[];
}

export default function MenuDesktop({ itens }: PropsMenuDesktop) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {itens.map((item) => (
        <a
          key={item.link}
          href={item.link}
          className="text-gray-700 hover:text-green-600 font-medium transition-colors"
        >
          {item.texto}
        </a>
      ))}
    </nav>
  );
}