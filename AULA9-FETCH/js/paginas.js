const conteudo = document.getElementById("conteudo");
const botoes = document.querySelectorAll("[data-pagina]");

function carregarPagina(caminhoPagina) {
    conteudo.innerHTML = '<p class="carregando">Carregando página...</p>';

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
                    <p>Verifique se o caminho está correto.</p>
                </div>
            `;

            console.log("Erro:", erro);
        });
}

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const pagina = botao.getAttribute("data-pagina");
        carregarPagina(pagina);
    });
});
