// Captura os elementos
const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");

let total = 0;

// Função para realizar as operações
function realizarOperacao(operacao) {
    const numeroDigitado = parseFloat(numero.value);

    if (isNaN(numeroDigitado)) {
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }

    switch (operacao) {
        case 'somar':
            total += numeroDigitado;
            break;
        case 'subtrair':
            total -= numeroDigitado;
            break;
        case 'multiplicar':
            total *= numeroDigitado;
            break;
        case 'dividir':
            if (numeroDigitado === 0) {
                resultado.textContent = "Não é possível dividir por zero!";
                return;
            }
            total /= numeroDigitado;
            break;
        default:
            resultado.textContent = "Operação inválida!";
            return;
    }

    resultado.textContent = `Total: ${total}`;
}

// Adiciona eventos aos botões
btnSomar.addEventListener("click", function () {
    realizarOperacao('somar');
});

btnSubtrair.addEventListener("click", function () {
    realizarOperacao('subtrair');
});

btnMultiplicar.addEventListener("click", function () {
    realizarOperacao('multiplicar');
});

btnDividir.addEventListener("click", function () {
    realizarOperacao('dividir');
});