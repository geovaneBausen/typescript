"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caixa = void 0;
const Pessoa_1 = require("./Pessoa");
// Caixa
class Caixa extends Pessoa_1.Pessoa {
    constructor(nome, turno) {
        super(nome);
        this.turno = turno;
    }
    receberPagamento(numero) {
        console.log(`Pagamento recebido no valor: ${numero}`);
    }
    calcularTotal() {
        // lógica aqui
        return 0;
    }
}
exports.Caixa = Caixa;
//# sourceMappingURL=Caixa.js.map