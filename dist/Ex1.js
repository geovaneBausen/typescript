"use strict";
document.getElementById('form-pessoa').addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value, 10);
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const ativo = document.getElementById('ativo').checked;
    const pessoa = { nome, idade, altura, peso, ativo };
    const pessoas = JSON.parse(localStorage.getItem('pessoas') || '[]');
    pessoas.push(pessoa);
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
    console.log('Pessoa adicionada:', pessoa);
    console.log(pessoas);
});
//# sourceMappingURL=Ex1.js.map