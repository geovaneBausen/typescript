"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade, altura, peso, ativo) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.ativo = ativo; // Inicializa a propriedade
    }
    // Métodos getters para acessar as propriedades
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getAltura() {
        return this.altura;
    }
    getPeso() {
        return this.peso;
    }
    getAtivo() {
        return this.ativo;
    }
    toString() {
        return `Pessoa { Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}, Peso: ${this.peso}, Ativa: ${this.ativo} }`;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map