const conteudo = document.getElementById("conteudo");
const botoesMenu = document.querySelectorAll(".btn-menu");

function carregarPagina(caminhoPagina) {
    conteudo.innerHTML = '<p class="carregando">Carregando conteúdo...</p>';

    fetch(caminhoPagina)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Página não encontrada.");
            }

            return resposta.text();
        })
        .then(function (html) {
            conteudo.innerHTML = html;
        })
        .catch(function (erro) {
            conteudo.innerHTML = `
                <div class="erro">
                    <strong>Erro ao carregar a página.</strong>
                    <p>Verifique se o arquivo existe no caminho informado.</p>
                </div>
            `;

            console.log("Erro:", erro);
        });
}

botoesMenu.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const pagina = botao.getAttribute("data-pagina");

        botoesMenu.forEach(function (item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        carregarPagina(pagina);
    });
});

carregarPagina("paginas/home.html");
