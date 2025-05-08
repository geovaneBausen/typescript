"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
// Cliente
class Cliente extends Pessoa_1.Pessoa {
    constructor(nome, endereco, telefone) {
        super(nome);
        this.endereco = endereco;
        this.telefone = telefone;
    }
    realizarPedido() {
        console.log("Pedido realizado");
    }
    cancelarPedido() {
        console.log("Pedido cancelado");
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map