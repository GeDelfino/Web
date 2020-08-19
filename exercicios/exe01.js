/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function resolucao (x, y){
    return {
        soma: x + y,
        subtracao: x - y,
        multiplicação: x * y,
        divisao: x / y
    }
}

console.log(resolucao(10, 5))