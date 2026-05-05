const nomealuno = document.getElementById("nomeAluno");
const btsaudar = document.getElementById("btnSaudar");
const cont = document.getElementById("cont");
const registros = document.getElementById("registros");
const alerta = document.getElementById("alerta");

let contar = 0
let vazio = ''
btsaudar.addEventListener("click",function()
{

alerta.innerText =''
let nomes = nomealuno.value

if(nomes==='') {
    
    alerta.innerText ="Campo vazio! Digite um nome"
    alerta.style.color = 'red'
    
    
    setTimeout(function(){
        alerta.innerText = ''
    }, 3000)
    
} else {
        contar++

        registros.innerHTML += '<div> '+contar + ' ' + nomes + '</div>'
        nomealuno.value = ''
        nomealuno.focus()
    cont.innerText = contar

    }



}
)

