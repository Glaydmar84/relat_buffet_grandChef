
# 🧑‍🍳 Relatório de Desenvolvimento do Projeto “Buffet Grand Chef”

## 1. 🎯 Visão Geral do Projeto

### 1.1 📄 Título
**Buffet Grand Chef**

### 1.2 🏗️ Contexto
Projeto de TCC em Engenharia de Software, cujo objetivo é criar um site de apresentação e venda de pacotes de buffet para eventos, com foco em:

- ✅ Usabilidade
- ✅ Responsividade
- ✅ Estética agradável e moderna

### 1.3 📜 Escopo Atual

- Carrossel de cards com efeito **flip 3D**, exibindo:
  - Frente: nome, imagem, preço, avaliação e número de pessoas atendidas
  - Verso: lista de itens do pacote organizada por categorias

- Navegação por categorias (mini-carrossel interno ou dropdown):
  - 🥟 **Salgados**
  - 🧁 **Doces**
  - 🍰 **Bolos** (com seleção de sabor via radio)
  - 🥤 **Bebidas**

- Controles:
  - Botão **“Detalhes”** (aciona o flip)
  - Botão **“Voltar”** (retorna ao front)
  - Botão **“Comprar”** com alerta de confirmação

- Layout totalmente responsivo:
  - Efeito flip no **hover** (desktop)
  - Efeito flip no **click** (mobile)

- Personalização de cada card por **props**, incluindo:
  - Título
  - Imagem
  - Preço
  - Avaliação
  - Serve (número de pessoas)
  - Estrutura de itens

---

## 2. 🏛️ Principais Componentes e Arquitetura

### 2.1 🏗️ App.js
- Composição principal do site:
  - **Navbar**
  - **Fundo** (imagem semi-opaca)
  - **CardCarousel**
  - (Planejado) **Footer**

---

### 2.2 🧭 Navbar.js
- Estrutura flexível com:
  - Logo à esquerda
  - Nome do buffet centralizado
  - Links de navegação e/ou ícones de redes sociais à direita

- Estilização via **Tailwind CSS**

---

### 2.3 🎠 CardCarousel.js
- Controle da rolagem horizontal dos cards:
  - Usa `useRef` e `scrollBy` para navegação com botões laterais
  - Configuração de espaçamento (`gap` ou `space-x-*`)
  - Mapeamento dinâmico dos dados recebidos por `cardsData`

---

### 2.4 🔄 CardFlip.js (anteriormente FlipCard)
- Estrutura de efeito **flip 3D manual via CSS**

**Frente do Card:**
- Título fixo no topo
- Imagem com `object-cover`
- Dados:
  - Número de pessoas atendidas
  - Preço
  - Avaliação (estrelas)
- Botão **“Detalhes”**

**Verso do Card:**
- Navegação interna por categoria:
  - Mini-carrossel ou dropdown
  - Ícones representativos das categorias
- Legendas específicas:
  - 🍰 **“Escolha o sabor do bolo”** (radio)
  - 🥟 **“Quantidade de salgados”**
- Listagem dinâmica dos itens
- Botões:
  - **“Voltar”** (flip de retorno)
  - **“Comprar”** (alerta de confirmação)

---

### 2.5 🎨 Estilização (Tailwind + CSS Customizado)
- Uso de Tailwind para:
  - Cores
  - Sombras
  - Bordas arredondadas
  - Espaçamentos
  - Responsividade
- CSS adicional para efeito flip:

```css
.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  backface-visibility: hidden;
}
```

- Paleta em tons pastéis e neutros
- Uniformização de imagens com `object-cover`

---

## 3. 🔄 Evolução das Funcionalidades

| Etapa                      | Descrição                                                         |
| ---------------------------| ------------------------------------------------------------------ |
| Bootstrapping & Layout      | Estrutura inicial: Navbar, fundo e container de cards             |
| Carrossel Estático          | Cards com scroll horizontal manual                                |
| Flip Básico                 | Implementação do flip 3D                                          |
| Detalhes & Dropdowns        | Dropdowns, radio (para bolos) e quantidades para outras categorias|
| Mini-carrossel Interno      | Navegação por categorias com setas                                |
| Personalização via Props    | Dados dinâmicos: título, preço, serve, avaliação e itens          |
| Responsividade Completa     | Hover no desktop e click no mobile                                |
| Estilização Refinada        | Cores suaves, sombras, bordas, imagens responsivas                |
| Footer (Planejado)          | Rodapé com links e redes sociais                                  |

---

## 4. ⚙️ Considerações Técnicas e Arquitetura

### 🔧 Separation of Concerns
- `CardCarousel` → controle da rolagem e navegação horizontal
- `CardFlip` → lógica e efeito do flip, renderização dos itens

### 📈 Escalabilidade
- Estrutura de dados via array `cardsData`
- Possibilidade de conectar futuramente a uma API e dashboard de administração

### ⚡ Reatividade
- Uso de:
  - `useState` → controle dos estados internos
  - `useEffect` → efeitos colaterais e adaptações
  - `useRef` → controle da rolagem

### ♿ Acessibilidade
- Alt nas imagens
- Botões interativos com `onClick`
- Contrastes adequados

---

## 5. 🚀 Próximas Etapas e Documentação

### 🗂️ Dashboard de Administração
- CRUD de pacotes (nome, preço, serve, rating, itens)
- Backend sugerido: **Node.js + Express + MongoDB ou MySQL**

### 📄 Documentação Técnica
- Diagrama de componentes (React)
- Guia de CSS:
  - Paleta de cores
  - Tipografia
  - Estilo de botões, cards e carrosséis

### 📜 Guia de Uso
- Manual para o cliente gerenciar pacotes de buffet

### ✅ Testes
- Testes unitários com **Jest**
- Testes de integração e E2E com **Cypress**

### 📦 Entrega Final
- Otimização e minificação
- Deploy em **Netlify**, **Vercel** ou servidor próprio
- Documentação final no **GitHub**

---

## 🏁 Conclusão

Este relatório sintetiza a evolução, arquitetura e decisões de implementação do projeto **“Buffet Grand Chef”**. A base construída oferece uma estrutura sólida, escalável e visualmente agradável, pronta para receber melhorias e, futuramente, uma interface administrativa para gestão dos pacotes.

---

## 🌐 Créditos
Desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) em Engenharia de Software.

---


<!-- 1️⃣ App.js -->
<!-- 2️⃣ Navbar.js -->
3️⃣ CardCarousel.js (Home)
4️⃣ Produtos.js
5️⃣ Pacotes.js
6️⃣ LoginModal.js
7️⃣ RegisterModal.js
8️⃣ Footer.js