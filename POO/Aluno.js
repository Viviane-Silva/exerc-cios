// Aluno.js
import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }

  estudar() {
    console.log(`${this.nome} está estudando ${this.curso}.`);
  }

  apresentar() {
    console.log(
      `Olá, sou ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`
    );
  }
}
