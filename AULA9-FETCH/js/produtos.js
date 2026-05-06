const btnCarregarProdutos = document.getElementById("btnCarregarProdutos");
const listaProdutos = document.getElementById("listaProdutos");

btnCarregarProdutos.addEventListener("click", function () {
    listaProdutos.innerHTML = '<p class="carregando">Carregando produtos...</p>';

    fetch("dados/produtos.json")
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Arquivo de produtos não encontrado.");
            }

            return resposta.json();
        })
        .then(function (produtos) {
            listaProdutos.innerHTML = "";

            produtos.forEach(function (produto) {
                listaProdutos.innerHTML += `
                    <div class="produto">
                    <div>
                    <img style="width:200px" src="${produto.img}" alt="${produto.nome}">
                    </div>
                    <div>
                        <h2>${produto.nome}</h2>
                        <p><strong>Categoria:</strong> ${produto.categoria}</p>
                        <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
                        <p><strong>Estoque:</strong> ${produto.estoque} unidades</p>
                    </div>
                    </div>
                `;
            });
        })
        .catch(function (erro) {
            listaProdutos.innerHTML = `
                <div class="erro">
                    <strong>Erro ao carregar produtos.</strong>
                    <p>Verifique o arquivo produtos.json.</p>
                </div>
            `;

            console.log("Erro:", erro);
        });
});
