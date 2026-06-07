# AI.md — Registro de uso de Inteligência Artificial

Projeto: OceanGuard — Web Development  
Disciplina: Web Development — FIAP 2026 

## Como utilizamos IA no projeto

Durante o desenvolvimento, usamos IA pontualmente para tirar dúvidas e resolver problemas específicos. Abaixo estão os 5 momentos em que ela foi consultada:

### 1. Regex de validação de e-mail

**O que foi pedido:** Como verificar se um e-mail digitado tem formato válido com JavaScript puro, sem biblioteca.

**O que a IA respondeu:** Explicou duas formas — usando `indexOf` para verificar a presença de `@` e `.`, ou usando uma expressão regular como `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.

**O que foi feito:** Ficamos com a versão `indexOf` por ser mais fácil de entender e explicar. A validação completa foi escrita pela equipe com base nessa explicação.

### 2. Dúvida sobre `classList` para troca de temas

**O que foi pedido:** Como alternar classes CSS no `body` via JavaScript para mudar o tema visual da página.

**O que a IA respondeu:** Explicou os métodos `classList.add()`, `classList.remove()` e `classList.toggle()`, com exemplos simples de uso.

**O que foi feito:** Usamos `remove` e `add` separadamente (sem `toggle`) para ter controle manual dos três temas. O código final foi escrito pela equipe.

### 3. Slideshow automático com `setInterval`

**O que foi pedido:** Como fazer uma imagem trocar automaticamente a cada X segundos em JavaScript.

**O que a IA respondeu:** Apresentou o uso de `setInterval` e `clearInterval` para controlar o timer do slideshow.

**O que foi feito:** Aproveitamos a lógica explicada e adaptamos para nossa estrutura com botões de seta e dots de navegação. O reinício do timer ao clicar nos botões foi uma solução nossa.

### 4. Como usar `querySelectorAll` para percorrer elementos

**O que foi pedido:** Como percorrer múltiplos elementos HTML ao mesmo tempo com JavaScript (sem jQuery).

**O que a IA respondeu:** Mostrou o uso de `querySelectorAll` com loop `for` convencional, já que `forEach` em NodeList não funciona em todos os navegadores.

**O que foi feito:** Usamos `for` clássico em todo o projeto exatamente por isso — mais compatível e mais legível para o contexto da disciplina.

### 5. Criação dinâmica de botões do quiz com `createElement`

**O que foi pedido:** Como criar botões de múltipla escolha dinamicamente no HTML a partir de um array de opções.

**O que a IA respondeu:** Explicou o uso de `document.createElement`, definição de propriedades como `className` e `textContent`, e o `appendChild` para adicionar o elemento ao DOM.

**O que foi feito:** Aplicamos essa técnica na função `mostrarPergunta()` do quiz. A lógica de verificação de resposta, feedback colorido e exibição do resultado foram desenvolvidas pela equipe.



