"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusEnum_1 = require("./StatusEnum");
const Caixa_1 = require("./Caixa");
const Cliente_1 = require("./Cliente");
const Pedido_1 = require("./Pedido");
const Cozinheiro_1 = require("./Cozinheiro");
// Criando pessoas no sistema
const cliente = new Cliente_1.Cliente("João", "Rua das Flores", 123456789);
const caixa = new Caixa_1.Caixa("Ana", "Manhã");
const cozinheiro = new Cozinheiro_1.Cozinheiro("Carlos", "Comida japonesa");
// Cliente realiza o pedido
cliente.realizarPedido();
// Criar pedido e adicionar itens
const pedido = new Pedido_1.Pedido(101, StatusEnum_1.StatusEnum.ABERTO);
pedido.addItem(1, 2, 20); // (produtoId, qtd, preco)
// Caixa processa pagamento
const valorTotal = pedido.calcularTotal();
caixa.receberPagamento(valorTotal);
// Cozinheiro prepara os itens
cozinheiro.prepararProduto();
// Pedido concluído
pedido.status = StatusEnum_1.StatusEnum.FECHADO;
//# sourceMappingURL=index.js.map