import { Pessoa } from "./Pessoa";
// Cliente
export class Cliente extends Pessoa {
    constructor(nome: string, public endereco: string, public telefone: number) {
        super(nome);
    }

    realizarPedido(): void {
        console.log("Pedido realizado");
    }

    cancelarPedido(): void {
        console.log("Pedido cancelado");
    }
}