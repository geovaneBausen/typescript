export class Produto {
    private id: number;
    private nome: string;
    private preco: number;
    private estoque: number;

    constructor(id: number, nome: string, preco: number, estoque: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }

    getEstoque(): number {
        return this.estoque;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setPreco(preco: number): void {
        this.preco = preco;
    }

    setEstoque(estoque: number): void {
        this.estoque = estoque;
    }

    toString(): string {
        return `Produto { ID: ${this.id}, Nome: ${this.nome}, Preço: ${this.preco}, Estoque: ${this.estoque} }`;
    }
}