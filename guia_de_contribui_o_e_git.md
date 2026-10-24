# Guia Prático: Como Contribuir para o Projeto Eurofrut

Este guia contém os passos essenciais para que todos os integrantes da equipe consigam rodar o projeto localmente, criar novas *branches* de trabalho e abrir *Pull Requests* no GitHub de forma padronizada e segura.

## 1. Como Rodar o Projeto na Sua Máquina

### Pré-requisitos

Certifique-se de ter instalado em seu computador:

* **Node.js** (versão 22 ou superior)

* **Git**

* **VS Code** (ou outro editor de sua preferência)

### Passo a Passo

1. **Clonar o repositório:**
   Abra o terminal e execute o comando abaixo:

   ```
   git clone https://github.com/joaovictortvs/EUROFRUT.git
   
   
   
   ```

2. **Entrar na pasta do projeto:**

   ```
   cd EUROFRUT
   
   
   
   ```

3. **Instalar as dependências:**
   Este comando baixará todas as bibliotecas do React e TypeScript configuradas no projeto:

   ```
   npm install
   
   
   
   ```

4. **Executar o servidor de desenvolvimento:**

   ```
   npm run dev
   
   
   
   ```

   *Após rodar o comando, o terminal exibirá um link local (geralmente `http://localhost:5173`). Abra esse link no seu navegador para visualizar o site.*

## 2. Como Criar e Trabalhar em uma Branch

**Regra de ouro:** Nunca faça alterações ou commits diretos na branch principal (`main`). Sempre crie uma branch específica para a tarefa em que vai trabalhar.

### Passo a Passo

1. **Garantir que sua branch `main` está atualizada:**

   ```
   git checkout main
   git pull origin main
   
   
   
   ```

2. **Criar e mudar para a sua nova branch:**
   Use um nome claro e descritivo que identifique o que você está desenvolvendo.
   *Padrão recomendado:* `feature/nome-da-tarefa` ou `fix/nome-do-bug`.

   ```
   # Exemplo para criar a página inicial:
   git checkout -b feature/pagina-home
   
   # Exemplo para criar a seção de produtos:
   git checkout -b feature/secao-produtos
   
   
   
   ```

3. **Desenvolver e salvar as alterações:**
   Trabalhe normalmente no seu código. Quando terminar uma etapa:

   ```
   # 1. Verificar os arquivos alterados
   git status
   
   # 2. Adicionar os arquivos alterados ao commit
   git add .
   
   # 3. Criar o commit com uma mensagem clara
   git commit -m "feat: adiciona componente de cabeçalho da Eurofrut"
   
   
   
   ```

4. **Enviar a branch para o GitHub:**

   ```
   git push -u origin feature/pagina-home
   
   
   
   ```

## 3. Como Abrir um Pull Request (PR)

Após enviar sua branch para o GitHub, você precisa solicitar que suas alterações sejam revisadas e integradas à branch principal (`main`).

### Passo a Passo no GitHub

1. **Acessar o repositório:**
   Entre no repositório do projeto no GitHub (`EUROFRUT`).

2. **Iniciar o Pull Request:**

   * O GitHub costuma mostrar um aviso amarelo no topo da página indicando que você enviou uma nova branch recente. Clique no botão **"Compare & pull request"**.

   * Caso o aviso não apareça, vá na aba **Pull requests** > clique no botão verde **"New pull request"** > selecione a sua branch no menu de comparação à direita.

3. **Preencher os detalhes do PR:**

   * **Título:** Seja direto e claro (ex: `feat: Implementa a landing page inicial da Eurofrut`).

   * **Descrição:** Explique brevemente o que foi feito no código e se há algo específico a ser testado.

   * **Assignees (Responsável):** Atribua o PR a você mesmo.

   * **Reviewers (Revisores):** Marque um ou mais colegas de equipe para revisarem seu código.

4. **Criar o PR:**
   Clique no botão verde **"Create pull request"**.

5. **Aprovação e Merge:**

   * Aguarde que um colega revise o código ou realize testes locais.

   * Após a aprovação, clique no botão **"Merge pull request"** e depois em **"Confirm merge"**.

   * Por fim, você pode deletar a branch remota no próprio GitHub clicando em **"Delete branch"**.