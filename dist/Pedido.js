"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const ItemPedido_1 = require("./ItemPedido");
// Pedido
class Pedido {
    constructor(num, status) {
        this.num = num;
        this.status = status;
        this.itens = [];
    }
    addItem(produto, qtd, preco) {
        const item = new ItemPedido_1.ItemPedido(this.itens.length + 1, produto, qtd, preco);
        this.itens.push(item);
    }
    rmvItem(numero) {
        this.itens = this.itens.filter(item => item.numero !== numero);
    }
    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
    }
}
exports.Pedido = Pedido;
//# sourceMappingURL=Pedido.js.map