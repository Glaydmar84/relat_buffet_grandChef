# 🎯 Relatório de Responsividade — Projeto Buffet Grand Cheff

Este documento descreve a estratégia de responsividade utilizada no componente `EscolhaFavoritos`, detalhando como os **breakpoints nativos** do Tailwind CSS e os **screens personalizados** foram aplicados para garantir uma experiência fluida em múltiplos tamanhos de tela.

---

## 🧱 Estrutura de Breakpoints

### 📦 Breakpoints Nativos Tailwind

| Breakpoint | Largura mínima | Utilização no código                  |
|------------|----------------|---------------------------------------|
| `sm`       | 640px          | Tamanho de texto no título, botões    |
| `md`       | 768px          | Layout em coluna para linha           |
| `xl`       | 1280px         | Largura máxima do conteúdo            |
| `hidden md:block` | -     | Alternância de visibilidade por tela  |

---

### 🛠 Breakpoints Personalizados (`tailwind.config.js`)

| 🔖 Nome       | Range de largura       | Descrição aplicada                                                                 |
|--------------|------------------------|-------------------------------------------------------------------------------------|
| `xsplus`     | 390px até 719px        | Margem condicional e exibição de conteúdo para celulares maiores                   |
| `xsm360`     | 344px até 389px        | Telas muito pequenas — preparado para dispositivos compactos                        |
| `mdcol`      | 768px até 1024px       | Layout especial para tablets — ajusta margens, larguras e visibilidade             |
| `xs540`      | até 540px              | Telas como Galaxy S20 e similares — define altura de imagens e largura fixada      |
| `small`      | 1024x600 (exato)       | Casos especiais como tablets em modo paisagem ou monitores de baixo perfil         |
| `mdhover`    | 769px+                 | Exibição condicional de textos em hover para telas maiores                          |

---

## 🎨 Estratégias Aplicadas

### 📌 **1. Layout Adaptativo**
- Usa `flex-col` em telas pequenas e `flex-row` em `md` para organizar os cards lado a lado.
- Utilização de `max-w-xs`, `md:w-1/2`, `mdcol:w-[90%]`, garantindo redimensionamento proporcional.

### 📌 **2. Comportamento de Visibilidade**
- Produtos são ocultados (`hidden`) em telas médias quando um item está selecionado, exibindo detalhes no lugar.
- Botões como "Realizar pedido" só são exibidos em `md:block`, enquanto no mobile aparecem com `md:hidden`.

### 📌 **3. Imagens e Cards**
- Altura de imagem e proporções ajustadas com `xs540:h-56`, `small:h-[37vh]`, `mdcol:h-80`, garantindo compatibilidade visual.
- Margens superiores e inferiores específicas (`small:mt-0`, `mdcol:mt-32`) suavizam o posicionamento.

### 📌 **4. Texto Condicional por Tela**
- `mdhover:block` vs `mdhover:hidden` define qual mensagem mostrar:
  - **Mobile:** "clique sobre o item"
  - **Desktop:** "passe o mouse sobre o item"

---

## 📁 Safelist no Tailwind

Para manter classes em arquivos não escaneados (como componentes dinâmicos), foram incluídas:

```js
safelist: [
  'mobile:text-lg',
  'mobile:text-xl',
  'mobile:text-2xl',
  'mb375:text-lg',
  'mb375:text-xl',
],

# 🎯 Relatório de Responsividade — `EscolhaFavoritos.jsx`

Este documento descreve a estratégia de responsividade utilizada no componente `EscolhaFavoritos`, detalhando como os **breakpoints nativos** do Tailwind CSS e os **screens personalizados** foram aplicados para garantir uma experiência fluida em múltiplos tamanhos de tela.

---

## 🧱 Estrutura de Breakpoints

### 📦 Breakpoints Nativos Tailwind

| Breakpoint | Largura mínima | Utilização no código                  |
|------------|----------------|---------------------------------------|
| `sm`       | 640px          | Tamanho de texto no título, botões    |
| `md`       | 768px          | Layout em coluna para linha           |
| `xl`       | 1280px         | Largura máxima do conteúdo            |
| `hidden md:block` | -     | Alternância de visibilidade por tela  |

---

### 🛠 Breakpoints Personalizados (`tailwind.config.js`)

| 🔖 Nome       | Range de largura       | Descrição aplicada                                                                 |
|--------------|------------------------|-------------------------------------------------------------------------------------|
| `xsplus`     | 390px até 719px        | Margem condicional e exibição de conteúdo para celulares maiores                   |
| `xsm360`     | 344px até 389px        | Telas muito pequenas — preparado para dispositivos compactos                        |
| `mdcol`      | 768px até 1024px       | Layout especial para tablets — ajusta margens, larguras e visibilidade             |
| `xs540`      | até 540px              | Telas como Galaxy S20 e similares — define altura de imagens e largura fixada      |
| `small`      | 1024x600 (exato)       | Casos especiais como tablets em modo paisagem ou monitores de baixo perfil         |
| `mdhover`    | 769px+                 | Exibição condicional de textos em hover para telas maiores                          |

---

## 🎨 Estratégias Aplicadas

### 📌 **1. Layout Adaptativo**
- Usa `flex-col` em telas pequenas e `flex-row` em `md` para organizar os cards lado a lado.
- Utilização de `max-w-xs`, `md:w-1/2`, `mdcol:w-[90%]`, garantindo redimensionamento proporcional.

### 📌 **2. Comportamento de Visibilidade**
- Produtos são ocultados (`hidden`) em telas médias quando um item está selecionado, exibindo detalhes no lugar.
- Botões como "Realizar pedido" só são exibidos em `md:block`, enquanto no mobile aparecem com `md:hidden`.

### 📌 **3. Imagens e Cards**
- Altura de imagem e proporções ajustadas com `xs540:h-56`, `small:h-[37vh]`, `mdcol:h-80`, garantindo compatibilidade visual.
- Margens superiores e inferiores específicas (`small:mt-0`, `mdcol:mt-32`) suavizam o posicionamento.

### 📌 **4. Texto Condicional por Tela**
- `mdhover:block` vs `mdhover:hidden` define qual mensagem mostrar:
  - **Mobile:** "clique sobre o item"
  - **Desktop:** "passe o mouse sobre o item"

---

## 📁 Safelist no Tailwind

Para manter classes em arquivos não escaneados (como componentes dinâmicos), foram incluídas:

```js
safelist: [
  'mobile:text-lg',
  'mobile:text-xl',
  'mobile:text-2xl',
  'mb375:text-lg',
  'mb375:text-xl',
],
