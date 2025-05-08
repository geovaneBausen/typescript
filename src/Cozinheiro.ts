import { Pessoa } from "./Pessoa";

// Cozinheiro
export class Cozinheiro extends Pessoa {
    constructor(nome: string, public especialidade: string) {
        super(nome);
    }

    prepararProduto(): void {
        console.log(`Preparando produto com especialidade: ${this.especialidade}`);
    }
}