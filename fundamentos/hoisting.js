// não é vantajoso usar, não muda nada, porém gostei por efeito de curiosidade
console.log('a =', a) // aqui ele acha a variavel porem fica undefined
var a = 2 // diferente de outras linguagens ele procura todas var do progama antes
console.log('a =', a)

console.log('b =', b)
let b = 2 // variavel let não funciona como hoisting
console.log('b =', b)