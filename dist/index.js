"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./Pessoa");
const GerenciadorPessoas_1 = require("./GerenciadorPessoas");
// Instância do gerenciador
const gerenciador = new GerenciadorPessoas_1.GerenciadorPessoas();
// Criando pessoas
const pessoa1 = new Pessoa_1.Pessoa('João', 25, 1.75, 70);
const pessoa2 = new Pessoa_1.Pessoa('Maria', 30, 1.65, 60);
const pessoa3 = new Pessoa_1.Pessoa('Carlos', 20, 1.80, 80);
const pessoa4 = new Pessoa_1.Pessoa('Ana', 28, 1.70, 65);
// Adicionando pessoas ao gerenciador
gerenciador.adicionarPessoa(pessoa1);
gerenciador.adicionarPessoa(pessoa2);
gerenciador.adicionarPessoa(pessoa3);
gerenciador.adicionarPessoa(pessoa4);
// Listando todas as pessoas
gerenciador.listarPessoas();
// Exemplo de buscar e remover
const busca = gerenciador.buscarPessoa("Maria");
console.log("Pessoa encontrada:", busca === null || busca === void 0 ? void 0 : busca.toString());
gerenciador.removerPessoa("Carlos");
gerenciador.listarPessoas(); // Verifica a remoção
// Edita a pessoa
const sucesso = gerenciador.editarPessoa("Ana", new Pessoa_1.Pessoa("Ana Bo", 29, 1.72, 64));
if (sucesso) {
    console.log("Pessoa editada com sucesso!");
}
else {
    console.log("Pessoa não encontrada!");
}
gerenciador.listarPessoas(); // Verifica a edição feita
//# sourceMappingURL=index.js.map