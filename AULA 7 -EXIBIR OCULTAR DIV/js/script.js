botao = document.getElementById("btnToggle")
conteudo =document.getElementById("conteudo")


botao.addEventListener('click', function(){
if(conteudo.classList.contains("oculto")){
console.log('visivel')
conteudo.classList.remove("oculto")
conteudo.classList.add("visivel")
} else{
    console.log('oculto')
conteudo.classList.remove("visivel")
    conteudo.classList.add("oculto")
}
})