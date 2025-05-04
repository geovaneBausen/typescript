"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./Pessoa");
const GerenciadorPessoas_1 = require("./GerenciadorPessoas");
// Criando o gerenciador
const gerenciador = new GerenciadorPessoas_1.GerenciadorPessoas();
// Capturando o formulário e elementos da página
const form = document.getElementById("formPessoa");
const listaPessoasDiv = document.getElementById("listaPessoas");
// Evento de envio do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio normal do formulário
    // Captura dos valores dos inputs
    const nome = document.getElementById("nome").value;
    const idade = Number(document.getElementById("idade").value);
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);
    // Cria nova Pessoa e adiciona no gerenciador
    const novaPessoa = new Pessoa_1.Pessoa(nome, idade, altura, peso);
    gerenciador.adicionarPessoa(novaPessoa);
    // Atualiza a lista de pessoas exibida
    atualizarLista();
    // Limpa o formulário
    form.reset();
});
// Função para atualizar a lista de pessoas na tela
function atualizarLista() {
    const pessoas = gerenciador.getTodasPessoas(); // Você pode adicionar este método no GerenciadorPessoas
    listaPessoasDiv.innerHTML = ""; // Limpa o conteúdo anterior
    pessoas.forEach(pessoa => {
        const p = document.createElement("p");
        p.textContent = pessoa.toString();
        listaPessoasDiv.appendChild(p);
    });
}
//# sourceMappingURL=view.js.map