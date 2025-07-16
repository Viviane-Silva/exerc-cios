# 🚀 Projetos JavaScript – POO, Módulos, Assincronicidade e APIs do Navegador

Este repositório reúne **quatro projetos práticos com JavaScript**, abordando conceitos como **Programação Orientada a Objetos**, **ESModules**, **Promises**, **async/await**, e **Browser APIs (localStorage, setTimeout, setInterval)**.

## Habilidades Praticadas

-Programação Orientada a Objetos
-Herança, métodos e instâncias
-Uso de ESModules (import/export)
-Controle de fluxo assíncrono
-Integração com APIs do navegador
-Organização e reuso de código

---

### Assincronicidade com Promises e Async/Await

- Simula a função `buscarDados()` com `setTimeout` (2 segundos)
- Exibe os dados com:
  - `.then()` e `.catch()`
  - `async/await` e `try/catch`

---

### Integração com APIs do Navegador

-Usa localStorage para salvar e exibir o nome do usuário
-Mostra um relógio com setInterval()
-Exibe uma mensagem de boas-vindas com setTimeout()

---

### Programação Orientada a Objetos com Classes e Herança

-Classe Pessoa com nome e idade
-Classe Aluno herda de Pessoa e adiciona curso

Métodos:
-apresentar() em ambas
-estudar() apenas em Aluno

---

### POO Separado em Módulos com ESModules

-Pessoa.js: exporta classe base
-Aluno.js: importa Pessoa e exporta Aluno
-main.js: importa e executa os métodos
-index.html: usado com <script type="module">
