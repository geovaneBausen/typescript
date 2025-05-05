import { Pessoa } from "./Pessoa";
import { Produto } from "./Produto";
import { GerenciadorPessoas } from "./GerenciadorPessoas";
import { GerenciadorProdutos } from "./GerenciadorProdutos";

import pessoasData from "./pessoas.json"; // Importa o JSON
import produtosData from "./produtos.json"; // Importa o JSON de produtos

// Instância do gerenciador
const gerenciador = new GerenciadorPessoas();

 //Criando pessoa
//(nome, idade, altura e peso)
const GeovaneBausen = new Pessoa('GeoAdm', 27, 1.87, 80, true);

// Adicionando pessoas ao gerenciador
gerenciador.adicionarPessoa(GeovaneBausen);

// Adicionando pessoas do JSON ao gerenciador
pessoasData.forEach((pessoa) => {
    const novaPessoa = new Pessoa(pessoa.nome, pessoa.idade, pessoa.altura, pessoa.peso, pessoa.ativo);
    gerenciador.adicionarPessoa(novaPessoa);
});

// Listando todas as pessoas
gerenciador.listarPessoas();

 //Exemplo de buscar e remover
const busca = gerenciador.buscarPessoa("Maria");
console.log("Pessoa encontrada:", busca?.toString());

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


// Instância do gerenciador de produtos
const gerenciadorProdutos = new GerenciadorProdutos();

// Adicionando produtos do JSON ao gerenciador
produtosData.forEach((produto) => {
    const novoProduto = new Produto(produto.id, produto.nome, produto.preco, produto.estoque);
    gerenciadorProdutos.adicionarProduto(novoProduto);
});

// Listando todos os produtos
gerenciadorProdutos.listarProdutos();