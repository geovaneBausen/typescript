"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./Pessoa");
const GerenciadorPessoas_1 = require("./GerenciadorPessoas");
const pessoas_json_1 = __importDefault(require("./pessoas.json")); // Importa o JSON
// Instância do gerenciador
const gerenciador = new GerenciadorPessoas_1.GerenciadorPessoas();
//Criando pessoa
//(nome, idade, altura e peso)
const GeovaneBausen = new Pessoa_1.Pessoa('GeoAdm', 27, 1.87, 80, true);
// Adicionando pessoas ao gerenciador
gerenciador.adicionarPessoa(GeovaneBausen);
// Adicionando pessoas do JSON ao gerenciador
pessoas_json_1.default.forEach((pessoa) => {
    const novaPessoa = new Pessoa_1.Pessoa(pessoa.nome, pessoa.idade, pessoa.altura, pessoa.peso, pessoa.ativo);
    gerenciador.adicionarPessoa(novaPessoa);
});
// Listando todas as pessoas
gerenciador.listarPessoas();
//Exemplo de buscar e remover
const busca = gerenciador.buscarPessoa("Maria");
console.log("Pessoa encontrada:", busca === null || busca === void 0 ? void 0 : busca.toString());
gerenciador.removerPessoa("Carlos");
gerenciador.listarPessoas(); // Verifica a remoção
/*
// Edita a pessoa
const sucesso = gerenciador.editarPessoa("Ana", new Pessoa("Ana Bo", 29, 1.72, 64));

if(sucesso){
    console.log("Pessoa editada com sucesso!");
}else{
    console.log("Pessoa não encontrada!");
}
    gerenciador.listarPessoas(); // Verifica a edição feita
*/
//# sourceMappingURL=index.js.map