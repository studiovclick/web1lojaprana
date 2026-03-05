// Funcionalidades do carrinho de compras
let contadorItens = 0;
let valorTotal = 0;

function adicionarAoCarrinho(nomeProduto, precoUnitario, quantidade) {
  const itensCarrinho = document.getElementById("itens-carrinho");

  // Criar elemento para o item
  const item = document.createElement("div");
  item.classList.add("item-carrinho");

  // Nome do produto
  const nome = document.createElement("span");
  nome.textContent = nomeProduto;

  // Quantidade
  const qtdSpan = document.createElement("span");
  qtdSpan.textContent = `Qtd: ${quantidade}`;

  // Preço do produto
  const preco = document.createElement("span");
  preco.textContent = `R$ ${(precoUnitario * quantidade).toFixed(2)}`;

  // Botão para remover
  const remover = document.createElement("button");
  remover.textContent = "Remover";
  remover.onclick = () => {
    itensCarrinho.removeChild(item);
    contadorItens -= quantidade;
    valorTotal -= precoUnitario * quantidade;
    atualizarResumo();
  };

  // Adicionar elementos ao item
  item.appendChild(nome);
  item.appendChild(qtdSpan);
  item.appendChild(preco);
  item.appendChild(remover);

  // Adicionar item ao carrinho
  itensCarrinho.appendChild(item);

  // Atualizar contador e valor total
  contadorItens += quantidade;
  valorTotal += precoUnitario * quantidade;
  atualizarResumo();
}

function atualizarResumo() {
  document.getElementById("contador-itens").textContent = contadorItens;
  document.getElementById("valor-total").textContent = valorTotal.toFixed(2);
  if (document.getElementById("contador-menu")) {
    document.getElementById("contador-menu").textContent = contadorItens;
  }
}

// Menu expansivo - deixar os links funcionarem normalmente
// Os links agora navegam para páginas separadas

// Funcionalidade do formulário de sugestões
const formSugestoes = document.getElementById("form-sugestoes");
if (formSugestoes) {
  formSugestoes.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Sugestão enviada com sucesso!");
    this.reset();
  });
}

// Funcionalidade para abrir localização no Waze ou Google Maps
function abrirWaze() {
  window.open(
    "https://waze.com/ul?ll=-29.9917,-51.0811&navigate=yes",
    "_blank",
  );
}

function abrirGoogleMaps() {
  window.open(
    "https://www.google.com/maps?q=Rua+Bento+Martins+250+-+Alvorada+-+RS",
    "_blank",
  );
}

// Exemplo de uso
// adicionarAoCarrinho('Produto Exemplo', 10.50);

// Funcionalidade para quantidade
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".produto").forEach((produto) => {
    const menosBtn = produto.querySelector(".menos");
    const maisBtn = produto.querySelector(".mais");
    const qtdInput = produto.querySelector(".qtd");
    const precoTotal = produto.querySelector(".preco-total");
    const precoUnitario = parseFloat(produto.dataset.preco);
    const adicionarBtn = produto.querySelector(".adicionar-carrinho");

    function atualizarPreco() {
      const qtd = parseInt(qtdInput.value);
      const total = (precoUnitario * qtd).toFixed(2);
      precoTotal.textContent = `Total: R$ ${total}`;
    }

    menosBtn.addEventListener("click", () => {
      let qtd = parseInt(qtdInput.value);
      if (qtd > 1) {
        qtd--;
        qtdInput.value = qtd;
        atualizarPreco();
      }
    });

    maisBtn.addEventListener("click", () => {
      let qtd = parseInt(qtdInput.value);
      qtd++;
      qtdInput.value = qtd;
      atualizarPreco();
    });

    adicionarBtn.addEventListener("click", () => {
      const nome = produto.dataset.nome;
      const qtd = parseInt(qtdInput.value);
      adicionarAoCarrinho(nome, precoUnitario, qtd);
      // Reset to 1 after adding
      qtdInput.value = 1;
      atualizarPreco();
    });

    // Initial update
    atualizarPreco();
  });
});
