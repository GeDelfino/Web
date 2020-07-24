// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 5, 7, 9) // Pega só os 2 primeiros numeros.
imprimirSoma() // NaN

//Funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2 , 3))
console.log(soma(2))