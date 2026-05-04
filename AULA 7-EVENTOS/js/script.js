botao = document.getElementById("btnClique");
inputtexto = document.getElementById("campoTexto");
retorno = document.getElementById("mensagem");


let campo = inputtexto.value.trim()
botao.addEventListener('click', function(){

if(inputtexto.value===''){
    retorno.innerHTML = "<div class='boxmsg'>Campo vazio pelo Click<br>"+campo+" <br> <span class='textoexplicativo'>Mensagem removida em 3 segundos</span></div>"
    retorno.style.color='red'

    setTimeout(function(){
retorno.innerHTML = ""
},3000);
} else {
retorno.innerHTML = "<div class='boxmsg'>Mensagem pelo Click <br>"+campo+" <br><span class='textoexplicativo'>Mensagem removida em 3 segundos</span></div>"
setTimeout(function(){
retorno.innerHTML = ""
},3000);
}
})



inputtexto.addEventListener('keydown', function(event){

    if(event.key==='Enter') {


        if(inputtexto.value===''){
    retorno.innerHTML = "Campo vazio Pelo Enter<br> <span class='textoexplicativo'>Mensagem removida em 3 segundos</span>"
    retorno.style.color='red'

    setTimeout(function(){
retorno.innerHTML = ""
},3000);
} else {
retorno.innerHTML = "Mensagem pelo Enter <br> <span class='textoexplicativo'>Mensagem removida em 3 segundos</span>"
setTimeout(function(){
retorno.innerHTML = ""
},3000);
}
        
    }

})





