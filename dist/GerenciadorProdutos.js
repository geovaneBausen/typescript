"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorProdutos = void 0;
class GerenciadorProdutos {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    listarProdutos() {
        console.log("Lista de Produtos:");
        this.produtos.forEach(produto => {
            console.log(produto.toString());
        });
    }
    buscarProdutoPorId(id) {
        return this.produtos.find(produto => produto.getId() === id);
    }
    editarProduto(id, novoProduto) {
        const index = this.produtos.findIndex(produto => produto.getId() === id);
        if (index !== -1) {
            this.produtos[index] = novoProduto;
            return true;
        }
        return false;
    }
    removerProduto(id) {
        const tamanhoInicial = this.produtos.length;
        this.produtos = this.produtos.filter(produto => produto.getId() !== id);
        return this.produtos.length < tamanhoInicial;
    }
}
exports.GerenciadorProdutos = GerenciadorProdutos;
//# sourceMappingURL=GerenciadorProdutos.js.map