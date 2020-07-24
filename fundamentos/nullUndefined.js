let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // Melhor forma de tirar uma atribuição não undefined
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)