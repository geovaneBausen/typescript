import { StatusEnum } from "./StatusEnum";
import { Caixa } from "./Caixa";
import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";
import { Cozinheiro } from "./Cozinheiro";

// Criando pessoas no sistema
const cliente = new Cliente("João", "Rua das Flores", 123456789);
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
