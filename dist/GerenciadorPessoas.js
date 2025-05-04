"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorPessoas = void 0;
class GerenciadorPessoas {
    constructor() {
        // Array privado que armazena as instâncias de Pessoa
        this.pessoas = [];
    }
    // Método para adicionar uma nova Pessoa ao array
    adicionarPessoa(pessoa) {
        this.pessoas.push(pessoa);
    }
    // Método que remove uma Pessoa específica com base no nome informado
    removerPessoa(nome) {
        // filtra o array para remover a Pessoa cujo nome coincide com o passado no parâmetro
        this.pessoas = this.pessoas.filter(p => p.getNome() !== nome);
    }
    // Método que lista todas as pessoas armazenadas, exibindo no console
    listarPessoas() {
        console.log("Lista de Pessoas:");
        // percorre cada Pessoa no array e exibe seu conteúdo no console usando o método toString()
        this.pessoas.forEach(p => {
            console.log(p.toString());
        });
    }
    // Método que busca e retorna uma Pessoa pelo nome; retorna undefined caso não encontre
    buscarPessoa(nome) {
        // encontra a primeira pessoa que tiver o nome igual ao informado
        return this.pessoas.find(p => p.getNome() === nome);
    }
    editarPessoa(nome, novaPessoa) {
        const index = this.pessoas.findIndex(p => p.getNome() === nome);
        if (index !== -1) {
            this.pessoas[index] = novaPessoa;
            return true; // edição bem-sucedida
        }
        return false; // pessoa não encontrada
    }
}
exports.GerenciadorPessoas = GerenciadorPessoas;
//# sourceMappingURL=GerenciadorPessoas.js.map