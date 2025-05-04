export class Pessoa {
    // Dados da Nova Pessoa em TypeScript
    private nomePessoa: string;
    private idadePessoa: number;
    private alturaPessoa: number;
    private pesoPessoa: number;

    // Construtor
    constructor(nomePessoa: string, idadePessoa: number, alturaPessoa: number, pesoPessoa: number) {
        this.nomePessoa = nomePessoa;
        this.idadePessoa = idadePessoa;
        this.alturaPessoa = alturaPessoa;
        this.pesoPessoa = pesoPessoa;
    }
    getNome(): string { return this.nomePessoa; }
    getIdade(): number { return this.idadePessoa; }
    getAltura(): number { return this.alturaPessoa; }
    getPeso(): number { return this.pesoPessoa; }
   

    public toString(): string {
        return `Pessoa { Nome: ${this.nomePessoa}, Idade: ${this.idadePessoa}, Altura: ${this.alturaPessoa}, Peso: ${this.pesoPessoa} }`;
    }
}
