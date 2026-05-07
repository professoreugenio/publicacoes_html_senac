const nomeAluno = document.getElementById("nomeAluno");
const idadeAluno = document.getElementById("idadeAluno");
const cursoAluno = document.getElementById("cursoAluno");

const btnSalvar = document.getElementById("btnSalvar");
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
    mensagem.style.display = "block"
    setTimeout(function () {
        mensagem.style.display = "none"
    }, 5000)
}

function limparCampos() {
    nomeAluno.value = "";
    idadeAluno.value = "";
    cursoAluno.value = "";
    nomeAluno.focus();
}

function exibirMensagem(texto) {
    mensagem.textContent = texto;
    setTimeout(function () {
        mensagem.style.display = "none"
    }, 5000)
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
                <button class="btn-excluir" onclick="excluirAluno(${indice})">Excluir</button>
            </div>
        `;
    });
}

function cadastrarAluno() {
    const nome = nomeAluno.value.trim();
    const idade = idadeAluno.value.trim();
    const curso = cursoAluno.value.trim();

    if (nome === "" || idade === "" || curso === "") {
        exibirMensagem("Preencha todos os campos antes de salvar.");
        return;
    }

    const novoAluno = {
        nome: nome,
        idade: idade,
        curso: curso
    };

    const alunos = buscarAlunos();

    alunos.push(novoAluno);

    salvarAlunos(alunos);

    renderizarAlunos();

    limparCampos();

    exibirMensagem("Aluno cadastrado com sucesso!");
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
    localStorage.removeItem("alunos");

    renderizarAlunos();

    exibirMensagem("Todos os alunos foram removidos.");
}

btnSalvar.addEventListener("click", cadastrarAluno);

btnLimpar.addEventListener("click", limparTudo);

renderizarAlunos();
