import { Produto } from "./Produto";
import { GerenciadorProdutos } from "./GerenciadorProdutos";

// Inicializa o gerenciador de produtos
const gerenciadorProdutos = new GerenciadorProdutos();

// Carrega dados do localStorage ao iniciar
export function inicializarProdutos(): void {
    carregarProdutosLocais();
    atualizarListaProdutos();
    
    // Adiciona evento ao formulário de produto
    const formProduto = document.getElementById('form-produto');
    if (formProduto) {
        formProduto.addEventListener('submit', adicionarOuAtualizarProduto);
    }
    
    // Adiciona evento ao botão de busca
    const btnBuscar = document.getElementById('btn-buscar-produto');
    if (btnBuscar) {
        btnBuscar.addEventListener('click', buscarProduto);
    }
    
    // Adiciona evento ao campo de busca para buscar ao pressionar Enter
    const campoBusca = document.getElementById('busca-produto');
    if (campoBusca) {
        campoBusca.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                buscarProduto();
            }
        });
    }
}

// Função para carregar produtos do localStorage para o gerenciador
function carregarProdutosLocais(): void {
    try {
        const produtosJSON = localStorage.getItem('produtos');
        if (produtosJSON) {
            const produtosArray = JSON.parse(produtosJSON);
            
            // Adiciona cada produto do localStorage ao gerenciador
            produtosArray.forEach((p: any) => {
                const produto = new Produto(p.id, p.nome, p.preco, p.estoque);
                gerenciadorProdutos.adicionarProduto(produto);
            });
            
            console.log('Dados de produtos carregados do localStorage:', produtosArray.length, 'produtos');
        }
    } catch (error) {
        console.error('Erro ao carregar dados de produtos do localStorage:', error);
    }
}

// Função para adicionar ou atualizar produto
function adicionarOuAtualizarProduto(event: Event): void {
    event.preventDefault();
    
    // Captura os valores do formulário
    const id = parseInt((document.getElementById('produto-id') as HTMLInputElement).value);
    const nome = (document.getElementById('produto-nome') as HTMLInputElement).value;
    const preco = parseFloat((document.getElementById('produto-preco') as HTMLInputElement).value);
    const estoque = parseInt((document.getElementById('produto-estoque') as HTMLInputElement).value);
    
    // Verifica se estamos editando (existe campo oculto com id de edição)
    const editIndexField = document.getElementById('edit-produto-index') as HTMLInputElement;
    
    if (editIndexField && editIndexField.value) {
        // Modo de edição
        const index = parseInt(editIndexField.value);
        const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
        
        // Atualiza os dados do produto
        produtos[index] = { id, nome, preco, estoque };
        
        // Salva no localStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));
        
        // Também atualiza no gerenciador
        const novoProduto = new Produto(id, nome, preco, estoque);
        gerenciadorProdutos.editarProduto(id, novoProduto);
        
        console.log('Produto atualizado:', produtos[index]);
        
        // Restaura o formulário para o modo de adição
        resetarFormularioProduto();
    } else {
        // Modo de adição
        // Cria uma nova instância de Produto
        const novoProduto = new Produto(id, nome, preco, estoque);
        
        // Verifica se o ID já existe
        const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
        const idExistente = produtos.some((p: any) => p.id === id);
        
        if (idExistente) {
            alert(`Já existe um produto com o ID ${id}. Por favor, use outro ID.`);
            return;
        }
        
        // Adiciona ao gerenciador
        gerenciadorProdutos.adicionarProduto(novoProduto);
        
        // Adiciona ao localStorage
        produtos.push({ id, nome, preco, estoque });
        localStorage.setItem('produtos', JSON.stringify(produtos));
        
        console.log('Produto adicionado:', novoProduto.toString());
        
        // Limpa o formulário
        (document.getElementById('form-produto') as HTMLFormElement).reset();
    }
    
    // Atualiza a lista na interface
    atualizarListaProdutos();
    
    // Exporta para JSON (preparando para envio ao banco de dados)
    exportarProdutosParaJSON();
}

// Função para buscar produto
function buscarProduto(): void {
    const termoBusca = (document.getElementById('busca-produto') as HTMLInputElement).value.toLowerCase();
    const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    
    if (!termoBusca) {
        // Se o campo de busca estiver vazio, mostra todos os produtos
        atualizarListaProdutos();
        return;
    }
    
    // Filtra os produtos pelo termo de busca (no nome)
    const produtosFiltrados = produtos.filter((produto: any) => 
        produto.nome.toLowerCase().includes(termoBusca) || 
        produto.id.toString().includes(termoBusca)
    );
    
    // Atualiza a lista com os produtos filtrados
    renderizarListaProdutos(produtosFiltrados);
}

// Função para atualizar a lista de produtos na interface
function atualizarListaProdutos(): void {
    const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    renderizarListaProdutos(produtos);
}

// Função para renderizar a lista de produtos na interface
function renderizarListaProdutos(produtos: any[]): void {
    const listElement = document.getElementById('lista-produtos');
    if (!listElement) return;
    
    // Limpa a lista atual
    listElement.innerHTML = '';
    
    // Se não houver produtos, mostra uma mensagem
    if (produtos.length === 0) {
        listElement.innerHTML = '<li>Nenhum produto encontrado</li>';
        return;
    }
    
    // Adiciona cada produto à lista
    produtos.forEach((produto: any, index: number) => {
        const li = document.createElement('li');
        li.className = 'produto-item';
        
        li.innerHTML = `
            <div>
                <strong>${produto.nome}</strong> (ID: ${produto.id})<br>
                Preço: R$ ${produto.preco.toFixed(2)}, 
                Estoque: ${produto.estoque} unidades
            </div>
            <div class="acoes">
                <button class="editar editar-produto" data-index="${index}">Editar</button>
                <button class="remover remover-produto" data-index="${index}">Remover</button>
            </div>
        `;
        
        listElement.appendChild(li);
    });
    
    // Adiciona eventos aos botões de editar e remover
    adicionarEventosBotoesProduto();
}

// Função para adicionar eventos aos botões de editar e remover
function adicionarEventosBotoesProduto(): void {
    // Adiciona eventos aos botões de remover
    document.querySelectorAll('.remover-produto').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = (e.currentTarget as HTMLElement).getAttribute('data-index');
            if (index !== null) {
                removerProduto(parseInt(index));
            }
        });
    });
    
    // Adiciona eventos aos botões de editar
    document.querySelectorAll('.editar-produto').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = (e.currentTarget as HTMLElement).getAttribute('data-index');
            if (index !== null) {
                prepararEdicaoProduto(parseInt(index));
            }
        });
    });
}

// Função para remover um produto pelo índice
function removerProduto(index: number): void {
    const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    
    // Obtém o ID do produto para remover também do gerenciador
    const produtoId = produtos[index].id;
    
    // Remove da lista
    const produtoRemovido = produtos.splice(index, 1)[0];
    
    // Atualiza o localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));
    
    // Remove do gerenciador
    gerenciadorProdutos.removerProduto(produtoId);
    
    // Atualiza a interface
    atualizarListaProdutos();
    
    console.log('Produto removido:', produtoRemovido.nome);
}

// Função para preparar a edição de um produto
function prepararEdicaoProduto(index: number): void {
    const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    const produto = produtos[index];
    
    // Preenche o formulário com os dados do produto
    (document.getElementById('produto-id') as HTMLInputElement).value = produto.id.toString();
    (document.getElementById('produto-nome') as HTMLInputElement).value = produto.nome;
    (document.getElementById('produto-preco') as HTMLInputElement).value = produto.preco.toString();
    (document.getElementById('produto-estoque') as HTMLInputElement).value = produto.estoque.toString();
    
    // Modifica o formulário para modo de edição
    const form = document.getElementById('form-produto') as HTMLFormElement;
    
    // Cria um campo oculto para guardar o índice sendo editado
    let editIndexField = document.getElementById('edit-produto-index') as HTMLInputElement;
    
    if (!editIndexField) {
        editIndexField = document.createElement('input');
        editIndexField.type = 'hidden';
        editIndexField.id = 'edit-produto-index';
        form.appendChild(editIndexField);
    }
    
    editIndexField.value = index.toString();
    
    // Muda o texto do botão
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitButton.textContent = 'Atualizar Produto';
    
    // Adiciona um evento temporário para cancelar a edição
    let cancelBtn = document.getElementById('cancelar-edicao-produto');
    
    if (!cancelBtn) {
        cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancelar-edicao-produto';
        cancelBtn.type = 'button';
        cancelBtn.textContent = 'Cancelar';
        cancelBtn.className = 'secundary';
        cancelBtn.addEventListener('click', cancelarEdicaoProduto);
        
        // Adiciona ao final do formulário
        const buttonsDiv = form.querySelector('.form-buttons');
        if (buttonsDiv) {
            buttonsDiv.appendChild(cancelBtn);
        } else {
            form.appendChild(cancelBtn);
        }
    }
    
    // Desabilita o campo ID durante a edição
    (document.getElementById('produto-id') as HTMLInputElement).disabled = true;
}

// Função para cancelar a edição de um produto
function cancelarEdicaoProduto(): void {
    resetarFormularioProduto();
}

// Função para resetar o formulário de produto ao estado inicial
function resetarFormularioProduto(): void {
    const form = document.getElementById('form-produto') as HTMLFormElement;
    form.reset();
    
    // Habilita o campo ID
    (document.getElementById('produto-id') as HTMLInputElement).disabled = false;
    
    // Restaura o botão para "Salvar Produto"
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitButton.textContent = 'Salvar Produto';
    
    // Remove o botão cancelar
    const cancelBtn = document.getElementById('cancelar-edicao-produto');
    if (cancelBtn) {
        cancelBtn.remove();
    }
    
    // Remove o campo oculto de edição
    const editIndexField = document.getElementById('edit-produto-index');
    if (editIndexField) {
        editIndexField.remove();
    }
}