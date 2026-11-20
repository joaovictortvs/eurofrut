# EUROFRUT

Site institucional da EUROFRUT: frutas para mercado interno e exportação, com seleção, classificação e rastreabilidade. O visitante conhece os produtos, vê o calendário de safra e solicita uma cotação.

**Stack:** React Router v7 (modo framework, com SSR), TypeScript e Tailwind CSS v4. Hospedagem na Vercel.

## Links

| O quê | Link |
| --- | --- |
| Protótipo no Figma | `https://www.figma.com/proto/KsoTtE1wciLwLmOmq0ws1i/Eurofrut?node-id=4-2&starting-point-node-id=4%3A2&t=qGqsF4CVE8NjQop4-1` |
| Site de teste (Vercel) | `https://eurofrut.vercel.app` |

## Requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) versão LTS
- [VS Code](https://code.visualstudio.com/) (recomendado: extensão Tailwind CSS IntelliSense)

Para conferir a instalação:

```bash
git --version
node --version
```

## Como rodar

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera a versão de produção |
| `npm run typecheck` | Verifica os tipos do TypeScript |

## Estrutura

```
app/
  components/componentsReutilizaveis/   Botao, CampoText, Card
  img/                                  imagens e ícones
  routes/                               páginas (home.tsx)
  app.css                               tokens de cor, fonte e tamanho
  root.tsx                              layout base e página 404
public/                                 favicon e imagem de compartilhamento
```

Cores, fontes e medidas ficam como variáveis no `app.css`. Antes de colocar um valor fixo num componente, veja se já existe um token.

## Branches e Pull Requests

1. **Nunca faça commit direto na `main`.** Ela é o que vai para o ar.
2. Atualize antes de começar:
   ```bash
   git checkout main
   git pull
   ```
3. Crie uma branch por tarefa, com o padrão `feature/nome-da-tarefa` (exemplos: `feature/seo`, `feature/campo-texto`). Para correções, use `fix/nome-do-problema`.
   ```bash
   git checkout -b feature/nome-da-tarefa
   ```
4. Faça commits pequenos, com mensagem que diga o que mudou (ex.: `Adiciona estado de erro no CampoText`).
5. Envie a branch e abra o Pull Request para a `main`:
   ```bash
   git push -u origin feature/nome-da-tarefa
   ```
6. No PR, descreva o que foi feito e, se mudou a aparência, anexe um print.
7. Peça revisão de pelo menos uma pessoa da equipe. Só faça o merge depois da aprovação e com `npm run build` passando.
8. Depois do merge, apague a branch e volte a atualizar a `main`.
9. Se houver conflito, resolva na sua branch (`git pull origin main`) antes de pedir a revisão.

## IDs das seções

Use estes IDs nas seções da página. Eles servem para os links do menu e do rodapé (`href="#id"`) e para a equipe falar da mesma coisa.

> Confirme a lista com o `home.tsx` e ajuste se algum ID for diferente.

| ID | Seção |
| --- | --- |
| `inicio` | Topo da página (hero) |
| `perfis` | "Sou Comprador" e "Sou Produtor" |
| `frutas` | Catálogo de frutas |
| `qualidade` | Seleção, classificação e rastreabilidade |
| `safra` | Calendário de safra |
| `faq` | Perguntas frequentes |
| `cotacao` | Formulário de cotação |
| `rodape` | Rodapé |

Exemplo:

```tsx
<section id="frutas">...</section>
```

## Deploy

A Vercel publica sozinha: cada Pull Request gera um link de pré-visualização e a `main` atualiza o site de produção.