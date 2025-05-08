// ItemPedido
export class ItemPedido {
    constructor(
        public numero: number,
        public produtoId: number,
        public qtd: number,
        public preco: number
    ) {}

    calcularSubtotal(): number {
        return this.qtd * this.preco;
    }
}
