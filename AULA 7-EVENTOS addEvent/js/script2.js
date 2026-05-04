const botao = document.getElementById("btnClique");
const inputtexto = document.getElementById("campoTexto");
const retorno = document.getElementById("mensagem");

function msgerro(tipo,cor){
    retorno.innerHTML = `<div class='boxmsg'>Campo vazio pelo ${tipo} <br> <span class='textoexplicativo'>Mensagem removida em 3 segundos</span></div>`
        setTimeout(function(){
        retorno.innerHTML = ""
        inputtexto.focus()
    retorno.style.color=cor
    },4000);
}
function msgretorno(tipo,campo,cor) {
    retorno.innerHTML = `<div class='boxmsg'>Dados recebidos pelo ${tipo} <br>${campo} <br> <span class='textoexplicativo'>Mensagem removida em 3 segundos</span></div>`
retorno.style.color=cor
retorno.focus()
setTimeout(function(){
retorno.innerHTML = ""
inputtexto.value=''
inputtexto.focus()
},4000);
}
botao.addEventListener('click', function(){
let campo = inputtexto.value.trim()
if(inputtexto.value===''){
 msgerro('Click','red')
} else {
msgretorno('Click',campo,'green')
}
})
inputtexto.addEventListener('keydown', function(event){
    let campo = inputtexto.value.trim()
    if(event.key==='Enter') {
if(inputtexto.value===''){
    msgerro('Enter','red')
} else {
msgretorno('Enter',campo,'green')
}}})





