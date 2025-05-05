"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, nome, preco, estoque) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    getEstoque() {
        return this.estoque;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    setEstoque(estoque) {
        this.estoque = estoque;
    }
    toString() {
        return `Produto { ID: ${this.id}, Nome: ${this.nome}, Preço: ${this.preco}, Estoque: ${this.estoque} }`;
    }
}
exports.Produto = Produto;
//# sourceMappingURL=Produto.js.map