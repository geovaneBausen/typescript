"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
// ItemPedido
class ItemPedido {
    constructor(numero, produtoId, qtd, preco) {
        this.numero = numero;
        this.produtoId = produtoId;
        this.qtd = qtd;
        this.preco = preco;
    }
    calcularSubtotal() {
        return this.qtd * this.preco;
    }
}
exports.ItemPedido = ItemPedido;
//# sourceMappingURL=ItemPedido.js.map