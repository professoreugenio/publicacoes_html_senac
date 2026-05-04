// Captura os elementos
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");

// Função para realizar as operações
function realizarOperacao(operacao) {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    let resultadoOperacao;

    switch (operacao) {
        case 'somar':
            resultadoOperacao = valor1 + valor2;
            break;
        case 'subtrair':
            resultadoOperacao = valor1 - valor2;
            break;
        case 'multiplicar':
            resultadoOperacao = valor1 * valor2;
            break;
        case 'dividir':
            if (valor2 === 0) {
                resultado.textContent = "Não é possível dividir por zero!";
                return;
            }
            resultadoOperacao = valor1 / valor2;
            break;
        default:
            resultado.textContent = "Operação inválida!";
            return;
    }

    resultado.textContent = `Resultado: ${resultadoOperacao}`;
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