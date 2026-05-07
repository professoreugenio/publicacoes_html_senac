const conteudo = document.getElementById("conteudo");
const botoesMenu = document.querySelectorAll(".btn-menu");


function carregarPagina(caminhoPagina) {

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

carregarPagina("paginas/teste.html")