"use strict";
/*
import { StatusEnum } from "./StatusEnum";
import { Caixa } from "./Caixa";
import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";
import { Cozinheiro } from "./Cozinheiro";
import { tarefaConcluida } from "./teste";

// intstância de Cliente
const cliente = new Cliente("João", "Rua das Flores", 123456789);

// Criar instâncias de Caixa e Cozinheiro
// e atribuir valores
const caixa = new Caixa("Ana", "Manhã");
const cozinheiro = new Cozinheiro("Carlos", "Comida japonesa");

// Cliente realiza o pedido
cliente.realizarPedido();

// Criar pedido e adicionar itens
const pedido = new Pedido(101, StatusEnum.ABERTO);
pedido.addItem(1, 2, 20); // (produtoId, qtd, preco)

// Caixa processa pagamento
const valorTotal = pedido.calcularTotal();
caixa.receberPagamento(valorTotal);

// Cozinheiro prepara os itens
cozinheiro.prepararProduto();

// Pedido concluído
pedido.status = StatusEnum.FECHADO;


///teste de tipos grandes
const resultado = tarefaConcluida(true);
console.log(resultado);

const numeroGrande: bigint = 1234567890123456789012345678901234567890n; // Literal BigInt com 'n' no final
const outroNumeroGrande: bigint = BigInt("9876543210987654321098765432109876543210"); // Usando BigInt()

console.log(numeroGrande);
console.log(outroNumeroGrande);
*/
//usando tulplas com Spread Operator
let listaFrutas = ["laranja", "pera", "uva"];
console.log(...listaFrutas);
//lista heterogenea de tuplas
let listaDeFrutas2 = [5, true, ...listaFrutas];
console.log(listaDeFrutas2);
//usando tulplas em função
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Geo', 'Jurema'], [24, 65]);
console.log(resultado);
function CriarPessoa(...nome) {
    return [...nome];
}
console.log(CriarPessoa("geo", "bausen"));
//# sourceMappingURL=index.js.map