# 📕 README
## 📗Definição dos dados em JSON

 O arquivo pessoas.json é um array de objetos, cada um com as chaves nome, idade, altura e peso

## 📗Import e instanciação das pessoas
index.ts
carregamento do json
// para cada objeto do JSON, cria uma instância de Pessoa e adiciona ao gerenciador

## 📗Armazenamento em memória
A classe GerenciadorPessoas mantém internamente um array (private pessoas: Pessoa[] = []) e o método adicionarPessoa()  faz um push() nesse array:
