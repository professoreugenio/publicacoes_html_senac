const btnLimpar = document.getElementById("btnLimpar");
const mensagem = document.getElementById("mensagem");
const listaAlunos = document.getElementById("listaAlunos");
function buscarAlunos() {
    const alunosSalvos = localStorage.getItem("alunos");
    if (alunosSalvos === null) {
        return [];
    }
    return JSON.parse(alunosSalvos);
}
function salvarAlunos(alunos) {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}
function exibirMensagem(texto) {
    mensagem.style.display = "block";
    mensagem.textContent = texto;
    setTimeout(function () {
        mensagem.style.display = "none";
    }, 5000);
}
function renderizarAlunos() {
    const alunos = buscarAlunos();
    if (alunos.length === 0) {
        listaAlunos.innerHTML = "<p>Nenhum aluno cadastrado.</p>";
        return;
    }
    listaAlunos.innerHTML = "";
    alunos.forEach(function (aluno, indice) {
        listaAlunos.innerHTML += `
            <div class="aluno-item">
                <h3>${aluno.nome}</h3>
                <p><strong>Idade:</strong> ${aluno.idade}</p>
                <p><strong>Curso:</strong> ${aluno.curso}</p>
                <button class="btn-excluir" onclick="excluirAluno(${indice})">
                    Excluir
                </button>
            </div>
        `;
    });
}
function excluirAluno(indice) {
    const confirmar = confirm("Tem certeza que deseja excluir este aluno?");
    if (confirmar === false) {
        exibirMensagem("Exclusão cancelada.");
        return;
    }
    const alunos = buscarAlunos();
    alunos.splice(indice, 1);
    salvarAlunos(alunos);
    renderizarAlunos();
    exibirMensagem("Aluno excluído com sucesso!");
}
function limparTudo() {
    const confirmar = confirm("Tem certeza que deseja apagar todos os alunos?");
    if (confirmar === false) {
        exibirMensagem("Limpeza cancelada.");
        return;
    }
    localStorage.removeItem("alunos");
    renderizarAlunos();
    exibirMensagem("Todos os alunos foram removidos.");
}
btnLimpar.addEventListener("click", limparTudo);
renderizarAlunos();