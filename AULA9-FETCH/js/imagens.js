const btnCarregarImagens = document.getElementById("btnCarregarImagens");
const listaImagens = document.getElementById("listaImagens");

btnCarregarImagens.addEventListener("click", function () {
    listaImagens.innerHTML = '<p class="carregando">Carregando imagens...</p>';

    fetch("dados/imagens.json")
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Arquivo de imagens não encontrado.");
            }

            return resposta.json();
        })
        .then(function (imagens) {
            listaImagens.innerHTML = "";

            imagens.forEach(function (imagem) {
                listaImagens.innerHTML += `
                    <div class="imagem-card">
                        <img src="${imagem.arquivo}" alt="${imagem.titulo}">
                        <h2>${imagem.titulo}</h2>
                        <p>${imagem.descricao}</p>
                    </div>
                `;
            });
        })
        .catch(function (erro) {
            listaImagens.innerHTML = `
                <div class="erro">
                    <strong>Erro ao carregar imagens.</strong>
                    <p>Verifique o arquivo imagens.json.</p>
                </div>
            `;

            console.log("Erro:", erro);
        });
});
