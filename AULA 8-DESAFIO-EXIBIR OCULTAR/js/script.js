// Captura os elementos
const btnHtmlCss = document.getElementById("btnHtmlCss");
const btnJavascript = document.getElementById("btnJavascript");
const btnPhpMysql = document.getElementById("btnPhpMysql");
const btnPython = document.getElementById("btnPython");
const btnReact = document.getElementById("btnReact");

const divHtmlCss = document.getElementById("htmlcss");
const divJavascript = document.getElementById("javascript");
const divPhpMysql = document.getElementById("phpmysql");
const divPython = document.getElementById("python");
const divReact = document.getElementById("react");

// Função para exibir a div
function exibirDiv(div) {
    // Oculta todas as divs
    divHtmlCss.style.display = "none";
    divJavascript.style.display = "none";
    divPhpMysql.style.display = "none";
    divPython.style.display = "none";
    divReact.style.display = "none";

    // Exibe a div selecionada
    div.style.display = "block";
}

// Adiciona eventos aos botões
btnHtmlCss.addEventListener("click", function () {
    exibirDiv(divHtmlCss);
});

btnJavascript.addEventListener("click", function () {
    exibirDiv(divJavascript);
});

btnPhpMysql.addEventListener("click", function () {
    exibirDiv(divPhpMysql);
});

btnPython.addEventListener("click", function () {
    exibirDiv(divPython);
});

btnReact.addEventListener("click", function () {
    exibirDiv(divReact);
});