// main.js
import { Pessoa } from "./Pessoa.js";
import { Aluno } from "./Aluno.js";

const pessoa1 = new Pessoa("Ana", 37);
const aluno1 = new Aluno("Viviane", 30, "Sistemas da Informação");

pessoa1.apresentar();
aluno1.apresentar();
aluno1.estudar();
