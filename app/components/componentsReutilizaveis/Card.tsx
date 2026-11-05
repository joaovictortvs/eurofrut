import type { ReactNode } from 'react';

type Variante = "perfil" | "fruta" | "qualidade";

interface cardProps{
    variante: Variante;
    titulo: string;
    descricao?: string;
    icone?: ReactNode;
    corIcone?: string;
    imagem?: {img: string; alt: string};
    tags?: string[];
    bloco?: ReactNode;
    corBloco?: string;
    children?: ReactNode;
    corTitulo? : string;
    corDescricao?: string;
}

export function Card({variante, titulo, descricao, icone, corIcone = '--laranja-botao', imagem, tags, bloco, corBloco, corTitulo, corDescricao, children}: cardProps){
    const v = (p: string) => `var(--card-${variante}-${p})`;

    return(
        <div className='relative flex flex-col bg-white' 
        style={{
            width: `min(100%, ${v("largura")})`,
            minHeight: `var(--card-${variante}-altura, auto)`,
            borderRadius: v('raio'),
            paddingInline: v("padding-x"),
            paddingTop: icone ? v("titulo-top") : v("padding-x"),
            paddingBottom: `var(--card-${variante}-padding-base, ${0})`
            }}
        >
            {icone && (
                <div className='absolute left-1/2 flex items-center justify-center rounded-full text-white'
                style={{
                    width: v("icone"),
                    height: v('icone'),
                    top: 0,
                    transform: "translate(-50%, -50%)",
                    backgroundColor: `var(${corIcone})`
                }}
                >
                    {icone}
                </div>
            )}

            {imagem && (
                <img 
                src={imagem.img}
                alt={imagem.alt}
                className='w-full object-cover'
                style={{borderRadius: v('img-raio')}}
                />
            )}

            <h3 className={`font-bold ${icone ? "text-center" : ""}`} style={{
                color: `var(${corTitulo ?? "--card-titulo-cor"})`,
                fontSize: v('titulo-fonte'),
                letterSpacing: "var(--card-titulo-tracking)",
                lineHeight: 1,
                marginTop: imagem ? v("img-titulo") : undefined,
            }}>
            {titulo}</h3>
            {descricao && <p style={{
                color: `var(${corDescricao ?? "--card-desc-cor"})`,
                fontSize: v("desc-fonte"),
                lineHeight: v("desc-linha"),
                letterSpacing: "var(--card-desc-tracking)",
                marginTop: v("titulo-desc")
            }}>{descricao}</p>}

            {tags && (
                <ul className='flex flex-wrap list-none p-0' style={{gap: "var(--tag-gap)", marginTop: v("desc-tags")}}>
                    {tags.map((t) => (
                        <li
                        key={t}
                        className='rounded-full font-semibold'
                        style={{padding:"var(--tag-padding)", backgroundColor: "var(--tag-bg)", color: "var(--tag-cor, #364A3A)", fontSize: "var(--tag-fonte, 21px)"}}
                        >
                            {t}
                        </li>
                    ))}
                </ul>
            )}

            {bloco && (
                <div
                className='mt-auto'
                style={{
                    backgroundColor: corBloco ? `var(${corBloco})` : undefined,
                    borderRadius: v("bloco-raio"),
                    padding: v("bloco-padding"),
                    marginInline: `calc(-1 * ${v('padding-x')}))`,
                    color: "var(--card-perfil-lista-cor, #0F2617)",
                    fontSize:"var(--card-perfil-lista-fonte, 34px)",
                    letterSpacing: "var(--card-desc-tracking)"
                }}
                >
                    {bloco}
                    {children && <div className='flex justify-center'>{children}</div>}
                </div>
            )}

            {!bloco && children && (
                <div style={{ marginTop: v("tags-botao") }}>{children}</div>
            )}

        </div>
    )

}