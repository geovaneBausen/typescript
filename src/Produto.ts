// Produto
export class Produto {
    constructor(public nome: string, public descricao: string, public preco: number) {}

    atualizarPreco(novoPreco: number): void {
        this.preco = novoPreco;
        console.log(`Preço atualizado para: ${this.preco}`);
    }
}