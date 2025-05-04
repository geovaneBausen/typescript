import { Pessoa } from "./Pessoa";
import { GerenciadorPessoas } from "./GerenciadorPessoas";

// Instância do gerenciador
const gerenciador = new GerenciadorPessoas();

// Criando pessoas
const pessoa1 = new Pessoa('João', 25, 1.75, 70);
const pessoa2 = new Pessoa('Maria', 30, 1.65, 60);
const pessoa3 = new Pessoa('Carlos', 20, 1.80, 80);
const pessoa4 = new Pessoa('Ana', 28, 1.70, 65);

// Adicionando pessoas ao gerenciador
gerenciador.adicionarPessoa(pessoa1);
gerenciador.adicionarPessoa(pessoa2);
gerenciador.adicionarPessoa(pessoa3);
gerenciador.adicionarPessoa(pessoa4);

// Listando todas as pessoas
gerenciador.listarPessoas();

// Exemplo de buscar e remover
const busca = gerenciador.buscarPessoa("Maria");
console.log("Pessoa encontrada:", busca?.toString());

gerenciador.removerPessoa("Carlos");
gerenciador.listarPessoas(); // Verifica a remoção


// Edita a pessoa
const sucesso = gerenciador.editarPessoa("Ana", new Pessoa("Ana Bo", 29, 1.72, 64));

if(sucesso){
    console.log("Pessoa editada com sucesso!");
}else{
    console.log("Pessoa não encontrada!");
}

gerenciador.listarPessoas(); // Verifica a edição feita
