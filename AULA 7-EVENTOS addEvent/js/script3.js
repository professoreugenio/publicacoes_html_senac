const botao = document.getElementById("btnClique");
const inputtexto = document.getElementById("campoTexto");
const retorno = document.getElementById("mensagem");

function msgerro(tipo){

    retorno.innerHTML=`Evento por ${tipo}<br>Campo vazio!`
}

botao.addEventListener('click', function(){
if(inputtexto.value===''){
    msgerro('Click')
}
})

inputtexto.addEventListener('keydown', function(event){
if(event.key==='Enter') {

    if(inputtexto.value===''){
    msgerro('Enter')
    }

}

})