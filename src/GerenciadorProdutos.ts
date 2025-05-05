import { Produto } from "./Produto";

export class GerenciadorProdutos {
    private produtos: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    listarProdutos(): void {
        console.log("Lista de Produtos:");
        this.produtos.forEach(produto => {
            console.log(produto.toString());
        });
    }

    buscarProdutoPorId(id: number): Produto | undefined {
        return this.produtos.find(produto => produto.getId() === id);
    }

    editarProduto(id: number, novoProduto: Produto): boolean {
        const index = this.produtos.findIndex(produto => produto.getId() === id);
        if (index !== -1) {
            this.produtos[index] = novoProduto;
            return true;
        }
        return false;
    }

    removerProduto(id: number): boolean {
        const tamanhoInicial = this.produtos.length;
        this.produtos = this.produtos.filter(produto => produto.getId() !== id);
        return this.produtos.length < tamanhoInicial;
    }
}