btOcultar = document.getElementById("btnToggle");
btnOcultar2 = document.getElementById("btnToggle2");
boxconteudo = document.getElementById("conteudo");
boxconteudo2 = document.getElementById("conteudo2");

function exibirocultar(abrir,fechar) {
    fechar.classList.remove("conteudo-visivel2");
    fechar.classList.add("conteudo-oculto2");
    if (abrir.classList.contains("conteudo-oculto")) {
        abrir.classList.remove("conteudo-oculto");
        abrir.classList.add("conteudo-visivel");

    } else {
        abrir.classList.remove("conteudo-visivel");
        abrir.classList.add("conteudo-oculto");

    }
}

btOcultar.addEventListener('click',function(){
    
    boxconteudo2.classList.remove("conteudo-visivel2");
    boxconteudo2.classList.add("conteudo-oculto2");
    if (boxconteudo.classList.contains("conteudo-oculto")) {
        boxconteudo.classList.remove("conteudo-oculto");
        boxconteudo.classList.add("conteudo-visivel");
        
    } else {
       
        boxconteudo.classList.remove("conteudo-visivel");
        boxconteudo.classList.add("conteudo-oculto");
       
    }
})

btnOcultar2.addEventListener('click', function(){
    boxconteudo.classList.remove("conteudo-visivel");
    boxconteudo.classList.add("conteudo-oculto");
    if (boxconteudo2.classList.contains("conteudo-oculto2")) {
        boxconteudo2.classList.remove("conteudo-oculto2");
        boxconteudo2.classList.add("conteudo-visivel2");

    } else {
        boxconteudo2.classList.remove("conteudo-visivel2");
        boxconteudo2.classList.add("conteudo-oculto2");

    }
})