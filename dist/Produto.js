"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
// Produto
class Produto {
    constructor(nome, descricao, preco) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`Preço atualizado para: ${this.preco}`);
    }
}
exports.Produto = Produto;
//# sourceMappingURL=Produto.js.map