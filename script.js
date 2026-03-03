// Funcionalidades do carrinho de compras
let contadorItens = 0;
let valorTotal = 0;

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const itensCarrinho = document.getElementById('itens-carrinho');

    // Criar elemento para o item
    const item = document.createElement('div');
    item.classList.add('item-carrinho');

    // Nome do produto
    const nome = document.createElement('span');
    nome.textContent = nomeProduto;

    // Preço do produto
    const preco = document.createElement('span');
    preco.textContent = `R$ ${precoProduto.toFixed(2)}`;

    // Botão para remover
    const remover = document.createElement('button');
    remover.textContent = 'Remover';
    remover.onclick = () => {
        itensCarrinho.removeChild(item);
        contadorItens--;
        valorTotal -= precoProduto;
        atualizarResumo();
    };

    // Adicionar elementos ao item
    item.appendChild(nome);
    item.appendChild(preco);
    item.appendChild(remover);

    // Adicionar item ao carrinho
    itensCarrinho.appendChild(item);

    // Atualizar contador e valor total
    contadorItens++;
    valorTotal += precoProduto;
    atualizarResumo();
}

function atualizarResumo() {
    document.getElementById('contador-itens').textContent = contadorItens;
    document.getElementById('valor-total').textContent = valorTotal.toFixed(2);
}

// Menu expansivo - deixar os links funcionarem normalmente
// Os links agora navegam para páginas separadas

// Funcionalidade do formulário de sugestões
const formSugestoes = document.getElementById('form-sugestoes');
if (formSugestoes) {
    formSugestoes.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Sugestão enviada com sucesso!');
        this.reset();
    });
}

// Funcionalidade para abrir localização no Waze ou Google Maps
function abrirWaze() {
    window.open('https://waze.com/ul?ll=-29.9917,-51.0811&navigate=yes', '_blank');
}

function abrirGoogleMaps() {
    window.open('https://www.google.com/maps?q=Rua+Bento+Martins+250+-+Alvorada+-+RS', '_blank');
}

// Exemplo de uso
// adicionarAoCarrinho('Produto Exemplo', 10.50);