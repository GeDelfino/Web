let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // ++ ou -- antes da prioridade.
console.log(num1 === num2) // aqui já se torna diferente.