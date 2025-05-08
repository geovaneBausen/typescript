"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cozinheiro = void 0;
const Pessoa_1 = require("./Pessoa");
// Cozinheiro
class Cozinheiro extends Pessoa_1.Pessoa {
    constructor(nome, especialidade) {
        super(nome);
        this.especialidade = especialidade;
    }
    prepararProduto() {
        console.log(`Preparando produto com especialidade: ${this.especialidade}`);
    }
}
exports.Cozinheiro = Cozinheiro;
//# sourceMappingURL=Cozinheiro.js.map