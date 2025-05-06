interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
    peso: number;
    ativo: boolean;
  }
  
  interface Produto {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Navegação de abas
    const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tab-button');
    const tabContents = document.querySelectorAll<HTMLElement>('.tab-content');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        document.getElementById(`tab-${tab}`)?.classList.add('active');
      });
    });
  
    // ------ PESSOAS ------
    const formPessoa = document.getElementById('form-pessoa') as HTMLFormElement;
    const listaPessoas = document.getElementById('lista-pessoas') as HTMLUListElement;
    const buscaPessoaInput = document.getElementById('busca-pessoa') as HTMLInputElement;
    const btnBuscarPessoa = document.getElementById('btn-buscar-pessoa') as HTMLButtonElement;
    let editIndexPessoa: number | null = null;
  
    formPessoa.addEventListener('submit', event => {
      event.preventDefault();
      const nome = (document.getElementById('nome') as HTMLInputElement).value;
      const idade = parseInt((document.getElementById('idade') as HTMLInputElement).value, 10);
      const altura = parseFloat((document.getElementById('altura') as HTMLInputElement).value);
      const peso = parseFloat((document.getElementById('peso') as HTMLInputElement).value);
      const ativo = (document.getElementById('ativo') as HTMLInputElement).checked;
  
      const pessoas = getPessoas();
      const pessoa: Pessoa = { nome, idade, altura, peso, ativo };
  
      if (editIndexPessoa !== null) {
        pessoas[editIndexPessoa] = pessoa;
        editIndexPessoa = null;
      } else {
        pessoas.push(pessoa);
      }
      savePessoas(pessoas);
      renderPessoas();
      formPessoa.reset();
      (formPessoa.querySelector('button[type="submit"]') as HTMLButtonElement).textContent = 'Salvar';
    });
  
    btnBuscarPessoa.addEventListener('click', () => renderPessoas(buscaPessoaInput.value));
  
    function getPessoas(): Pessoa[] {
      return JSON.parse(localStorage.getItem('pessoas') || '[]');
    }
  
    function savePessoas(p: Pessoa[]) {
      localStorage.setItem('pessoas', JSON.stringify(p));
    }
  
    function renderPessoas(filter = '') {
      const pessoas = getPessoas().filter(p =>
        p.nome.toLowerCase().includes(filter.toLowerCase())
      );
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
          (document.getElementById('nome') as HTMLInputElement).value = p.nome;
          (document.getElementById('idade') as HTMLInputElement).value = p.idade.toString();
          (document.getElementById('altura') as HTMLInputElement).value = p.altura.toString();
          (document.getElementById('peso') as HTMLInputElement).value = p.peso.toString();
          (document.getElementById('ativo') as HTMLInputElement).checked = p.ativo;
          editIndexPessoa = index;
          (formPessoa.querySelector('button[type="submit"]') as HTMLButtonElement).textContent = 'Atualizar';
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
    const formProduto = document.getElementById('form-produto') as HTMLFormElement;
    const listaProdutos = document.getElementById('lista-produtos') as HTMLUListElement;
    const buscaProdutoInput = document.getElementById('busca-produto') as HTMLInputElement;
    const btnBuscarProduto = document.getElementById('btn-buscar-produto') as HTMLButtonElement;
    let editIndexProduto: number | null = null;
  
    formProduto.addEventListener('submit', event => {
      event.preventDefault();
      const id = parseInt((document.getElementById('produto-id') as HTMLInputElement).value, 10);
      const nome = (document.getElementById('produto-nome') as HTMLInputElement).value;
      const preco = parseFloat((document.getElementById('produto-preco') as HTMLInputElement).value);
      const estoque = parseInt((document.getElementById('produto-estoque') as HTMLInputElement).value, 10);
  
      const produtos = getProdutos();
      const produto: Produto = { id, nome, preco, estoque };
  
      if (editIndexProduto !== null) {
        produtos[editIndexProduto] = produto;
        editIndexProduto = null;
      } else {
        produtos.push(produto);
      }
      saveProdutos(produtos);
      renderProdutos();
      formProduto.reset();
      (formProduto.querySelector('button[type="submit"]') as HTMLButtonElement).textContent = 'Salvar Produto';
    });
  
    btnBuscarProduto.addEventListener('click', () => renderProdutos(buscaProdutoInput.value));
  
    function getProdutos(): Produto[] {
      return JSON.parse(localStorage.getItem('produtos') || '[]');
    }
  
    function saveProdutos(p: Produto[]) {
      localStorage.setItem('produtos', JSON.stringify(p));
    }
  
    function renderProdutos(filter = '') {
      const produtos = getProdutos().filter(prod =>
        prod.nome.toLowerCase().includes(filter.toLowerCase())
      );
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
          (document.getElementById('produto-id') as HTMLInputElement).value = prod.id.toString();
          (document.getElementById('produto-nome') as HTMLInputElement).value = prod.nome;
          (document.getElementById('produto-preco') as HTMLInputElement).value = prod.preco.toString();
          (document.getElementById('produto-estoque') as HTMLInputElement).value = prod.estoque.toString();
          editIndexProduto = index;
          (formProduto.querySelector('button[type="submit"]') as HTMLButtonElement).textContent = 'Atualizar Produto';
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
    const btnExportar = document.getElementById('exportar-json') as HTMLButtonElement;
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
  