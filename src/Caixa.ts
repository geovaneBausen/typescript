import { Pessoa } from "./Pessoa";

// Caixa
export class Caixa extends Pessoa {
    constructor(nome: string, public turno: string) {
        super(nome);
    }

    receberPagamento(numero: number): void {
        console.log(`Pagamento recebido no valor: ${numero}`);
    }

    calcularTotal(): number {
        // lógica aqui








        return 0;
    }
}
