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
