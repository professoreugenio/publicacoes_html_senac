const nome = document.getElementById("nomeAluno");
const btnSaudar = document.getElementById("btnSaudar");
const alertanome = document.getElementById("alertanome");
const btclear = document.getElementById("btnClear")
const cont = document.getElementById("cont")

const urlopen = 'index.html'


btnSaudar.addEventListener('click', function(){

    let valorAtual = parseInt(cont.textContent);
    cont.textContent = valorAtual + 1;
  
    nome.focus();    
    if(nome.value === '') {
    alertanome.innerText=' Campo vazio'
    alertanome.style.color='red'
    } else {
    alertanome.innerText=' Campo Ok para '+nome.value
    alertanome.style.animationDelay = 5.5
    }

    setTimeout(function () {
        alertanome.innerText = ''
        window.open(urlopen,'_self')
    }, 5000); // 5000 milissegundos = 5 segundos
})

btclear.addEventListener('click', function(){
   nome.value = ''
    alertanome.innerHTML = '<span style="color:#0080c0">Ok</span>'
   nome.focus()
    setTimeout(function () {
        alertanome.innerHTML = ''
    }, 5000); // 5000 milissegundos = 5 segundos
})





