import { ItemPedido } from "./ItemPedido";
import { StatusEnum } from "./StatusEnum";
// Pedido
export class Pedido {
    public itens: ItemPedido[] = [];

    constructor(
        public num: number,
        public status: StatusEnum
    ) {}

    addItem(produto: number, qtd: number, preco: number): void {
        const item = new ItemPedido(this.itens.length + 1, produto, qtd, preco);
        this.itens.push(item);
    }

    rmvItem(numero: number): void {
        this.itens = this.itens.filter(item => item.numero !== numero);
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
    }
}
