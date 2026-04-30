const nomealuno = document.getElementById("nomeAluno");
const btregistrar = document.getElementById("btnSaudar");
const cont = document.getElementById("cont");
const registros = document.getElementById("registros");
const alerta = document.getElementById("alerta");
const btnlimpar = document.getElementById("btnLimpar");

let msgalerta

msgalerta = function MsgAlerta(msg){

    alerta.innerHTML = '<div class="boxalerta">'+msg+'</div>'
    alerta.style.color = '#fc0909'
    nomealuno.innerHTML = ''
    setTimeout(function(){
alerta.innerHTML = ''
    }, 3000)

}

let contar = 0
btregistrar.addEventListener("click",function()
{
let nm = nomealuno.value
if(nm===''){
    msgalerta('Campos vazios oxe!')
} else {
contar++
if(contar > 5) {
    msgalerta('Limite excedido!')
    btregistrar.disabled
} else {
    cont.innerText = contar
    registros.innerHTML += `<div> ${contar} ${nm}</div>`
    nomealuno.value = ''
}
nomealuno.focus()



}

btnlimpar.addEventListener('click',function(){

   registros.innerHTML=''
   nomealuno.focus()
   cont.innerText = 0
   contar =0
})


}
)

