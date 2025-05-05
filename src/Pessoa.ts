export class Pessoa {
    private nome: string;
    private idade: number;
    private altura: number;
    private peso: number;
    private ativo: boolean; // Nova propriedade

    constructor(nome: string, idade: number, altura: number, peso: number, ativo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.ativo = ativo; // Inicializa a propriedade
    }

    // Métodos getters para acessar as propriedades
    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }

    getAltura(): number {
        return this.altura;
    }

    getPeso(): number {
        return this.peso;
    }

    getAtivo(): boolean {
        return this.ativo;
    }

    toString(): string {
        return `Pessoa { Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}, Peso: ${this.peso}, Ativa: ${this.ativo} }`;
    }
}
