"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    // Construtor
    constructor(nomePessoa, idadePessoa, alturaPessoa, pesoPessoa) {
        this.nomePessoa = nomePessoa;
        this.idadePessoa = idadePessoa;
        this.alturaPessoa = alturaPessoa;
        this.pesoPessoa = pesoPessoa;
    }
    getNome() { return this.nomePessoa; }
    getIdade() { return this.idadePessoa; }
    getAltura() { return this.alturaPessoa; }
    getPeso() { return this.pesoPessoa; }
    toString() {
        return `Pessoa { Nome: ${this.nomePessoa}, Idade: ${this.idadePessoa}, Altura: ${this.alturaPessoa}, Peso: ${this.pesoPessoa} }`;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map