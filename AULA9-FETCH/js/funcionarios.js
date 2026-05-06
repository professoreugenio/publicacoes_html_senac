const btnCarregarFuncionarios = document.getElementById("btnCarregarFuncionarios");
const listaFuncionarios = document.getElementById("listaFuncionarios");

btnCarregarFuncionarios.addEventListener("click", function () {
    listaFuncionarios.innerHTML = '<p class="carregando">Carregando funcionários...</p>';

    fetch("dados/funcionarios.json")
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Arquivo de funcionários não encontrado.");
            }

            return resposta.json();
        })
        .then(function (funcionarios) {
            listaFuncionarios.innerHTML = "";

            funcionarios.forEach(function (funcionario) {
                listaFuncionarios.innerHTML += `
                    <div class="funcionario">
                    <div>
                        <img src="${funcionario.img}" style="width:200px">
                    </div>
                        <div>
                            <h2>${funcionario.nome}</h2>
                            <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
                            <p><strong>Setor:</strong> ${funcionario.setor}</p>
                            <p><strong>E-mail:</strong> ${funcionario.email}</p>
                        </div>
                    </div>
                `;
            });
        })
        .catch(function (erro) {
            listaFuncionarios.innerHTML = `
                <div class="erro">
                    <strong>Erro ao carregar funcionários.</strong>
                    <p>Verifique o arquivo funcionarios.json.</p>
                </div>
            `;

            console.log("Erro:", erro);
        });
});
