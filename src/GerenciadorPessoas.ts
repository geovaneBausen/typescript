import { Pessoa } from "./Pessoa";
export class GerenciadorPessoas {
    
    // Array privado que armazena as instâncias de Pessoa
    private pessoas: Pessoa[] = [];

    // Método para adicionar uma nova Pessoa ao array
    adicionarPessoa(pessoa: Pessoa): void {
        this.pessoas.push(pessoa);
    }

    // Método que remove uma Pessoa específica com base no nome informado
    removerPessoa(nome: string): void {
        // filtra o array para remover a Pessoa cujo nome coincide com o passado no parâmetro
        this.pessoas = this.pessoas.filter(p => p.getNome() !== nome);
    }

    // Método que lista todas as pessoas armazenadas, exibindo no console
    listarPessoas(): void {
        console.log("Lista de Pessoas:");
        // percorre cada Pessoa no array e exibe seu conteúdo no console usando o método toString()
        this.pessoas.forEach(p => {
            console.log(p.toString());
        });
    }

    // Método que busca e retorna uma Pessoa pelo nome; retorna undefined caso não encontre
    buscarPessoa(nome: string): Pessoa | undefined {
        // encontra a primeira pessoa que tiver o nome igual ao informado
        return this.pessoas.find(p => p.getNome() === nome);
    }

    editarPessoa(nome: string, novaPessoa: Pessoa): boolean {
        const index = this.pessoas.findIndex(p => p.getNome() === nome);
        
        if (index !== -1) {
            this.pessoas[index] = novaPessoa;
            return true; // edição bem-sucedida
        }

        return false; // pessoa não encontrada
    }

}
