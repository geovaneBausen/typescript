document.getElementById('form-pessoa')!.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const idade = parseInt((document.getElementById('idade') as HTMLInputElement).value, 10);
    const altura = parseFloat((document.getElementById('altura') as HTMLInputElement).value);
    const peso = parseFloat((document.getElementById('peso') as HTMLInputElement).value);
    const ativo = (document.getElementById('ativo') as HTMLInputElement).checked;

    const pessoa = { nome, idade, altura, peso, ativo };

    const pessoas = JSON.parse(localStorage.getItem('pessoas') || '[]');
    pessoas.push(pessoa);
    localStorage.setItem('pessoas', JSON.stringify(pessoas));

    console.log('Pessoa adicionada:', pessoa);
    console.log(pessoas);
});


