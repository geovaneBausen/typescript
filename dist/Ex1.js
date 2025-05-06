"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Navegação de abas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            var _a;
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            (_a = document.getElementById(`tab-${tab}`)) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        });
    });
    // ------ PESSOAS ------
    const formPessoa = document.getElementById('form-pessoa');
    const listaPessoas = document.getElementById('lista-pessoas');
    const buscaPessoaInput = document.getElementById('busca-pessoa');
    const btnBuscarPessoa = document.getElementById('btn-buscar-pessoa');
    let editIndexPessoa = null;
    formPessoa.addEventListener('submit', event => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value, 10);
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);
        const ativo = document.getElementById('ativo').checked;
        const pessoas = getPessoas();
        const pessoa = { nome, idade, altura, peso, ativo };
        if (editIndexPessoa !== null) {
            pessoas[editIndexPessoa] = pessoa;
            editIndexPessoa = null;
        }
        else {
            pessoas.push(pessoa);
        }
        savePessoas(pessoas);
        renderPessoas();
        formPessoa.reset();
        formPessoa.querySelector('button[type="submit"]').textContent = 'Salvar';
    });
    btnBuscarPessoa.addEventListener('click', () => renderPessoas(buscaPessoaInput.value));
    function getPessoas() {
        return JSON.parse(localStorage.getItem('pessoas') || '[]');
    }
    function savePessoas(p) {
        localStorage.setItem('pessoas', JSON.stringify(p));
    }
    function renderPessoas(filter = '') {
        const pessoas = getPessoas().filter(p => p.nome.toLowerCase().includes(filter.toLowerCase()));
        listaPessoas.innerHTML = '';
        pessoas.forEach((p, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
          <span>${p.nome} - ${p.idade} anos - ${p.altura} m - ${p.peso} kg - ${p.ativo ? 'Ativo' : 'Inativo'}</span>
        `;
            const acoes = document.createElement('div');
            acoes.className = 'acoes';
            const btnEditar = document.createElement('button');
            btnEditar.className = 'editar';
            btnEditar.textContent = 'Editar';
            btnEditar.addEventListener('click', () => {
                document.getElementById('nome').value = p.nome;
                document.getElementById('idade').value = p.idade.toString();
                document.getElementById('altura').value = p.altura.toString();
                document.getElementById('peso').value = p.peso.toString();
                document.getElementById('ativo').checked = p.ativo;
                editIndexPessoa = index;
                formPessoa.querySelector('button[type="submit"]').textContent = 'Atualizar';
            });
            const btnRemover = document.createElement('button');
            btnRemover.className = 'remover';
            btnRemover.textContent = 'Remover';
            btnRemover.addEventListener('click', () => {
                const todas = getPessoas();
                todas.splice(index, 1);
                savePessoas(todas);
                renderPessoas(filter);
            });
            acoes.appendChild(btnEditar);
            acoes.appendChild(btnRemover);
            li.appendChild(acoes);
            listaPessoas.appendChild(li);
        });
    }
    renderPessoas();
    // ------ PRODUTOS ------
    const formProduto = document.getElementById('form-produto');
    const listaProdutos = document.getElementById('lista-produtos');
    const buscaProdutoInput = document.getElementById('busca-produto');
    const btnBuscarProduto = document.getElementById('btn-buscar-produto');
    let editIndexProduto = null;
    formProduto.addEventListener('submit', event => {
        event.preventDefault();
        const id = parseInt(document.getElementById('produto-id').value, 10);
        const nome = document.getElementById('produto-nome').value;
        const preco = parseFloat(document.getElementById('produto-preco').value);
        const estoque = parseInt(document.getElementById('produto-estoque').value, 10);
        const produtos = getProdutos();
        const produto = { id, nome, preco, estoque };
        if (editIndexProduto !== null) {
            produtos[editIndexProduto] = produto;
            editIndexProduto = null;
        }
        else {
            produtos.push(produto);
        }
        saveProdutos(produtos);
        renderProdutos();
        formProduto.reset();
        formProduto.querySelector('button[type="submit"]').textContent = 'Salvar Produto';
    });
    btnBuscarProduto.addEventListener('click', () => renderProdutos(buscaProdutoInput.value));
    function getProdutos() {
        return JSON.parse(localStorage.getItem('produtos') || '[]');
    }
    function saveProdutos(p) {
        localStorage.setItem('produtos', JSON.stringify(p));
    }
    function renderProdutos(filter = '') {
        const produtos = getProdutos().filter(prod => prod.nome.toLowerCase().includes(filter.toLowerCase()));
        listaProdutos.innerHTML = '';
        produtos.forEach((prod, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
          <span>#${prod.id} - ${prod.nome} - R$ ${prod.preco.toFixed(2)} - Estoque: ${prod.estoque}</span>
        `;
            const acoes = document.createElement('div');
            acoes.className = 'acoes';
            const btnEditar = document.createElement('button');
            btnEditar.className = 'editar';
            btnEditar.textContent = 'Editar';
            btnEditar.addEventListener('click', () => {
                document.getElementById('produto-id').value = prod.id.toString();
                document.getElementById('produto-nome').value = prod.nome;
                document.getElementById('produto-preco').value = prod.preco.toString();
                document.getElementById('produto-estoque').value = prod.estoque.toString();
                editIndexProduto = index;
                formProduto.querySelector('button[type="submit"]').textContent = 'Atualizar Produto';
            });
            const btnRemover = document.createElement('button');
            btnRemover.className = 'remover';
            btnRemover.textContent = 'Remover';
            btnRemover.addEventListener('click', () => {
                const todos = getProdutos();
                todos.splice(index, 1);
                saveProdutos(todos);
                renderProdutos(filter);
            });
            acoes.appendChild(btnEditar);
            acoes.appendChild(btnRemover);
            li.appendChild(acoes);
            listaProdutos.appendChild(li);
        });
    }
    renderProdutos();
    // ------ EXPORTAR JSON ------
    const btnExportar = document.getElementById('exportar-json');
    btnExportar.addEventListener('click', () => {
        const data = {
            pessoas: getPessoas(),
            produtos: getProdutos()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dados.json';
        a.click();
        URL.revokeObjectURL(url);
    });
});
//# sourceMappingURL=Ex1.js.map