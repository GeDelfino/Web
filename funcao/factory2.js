function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 2000.50))
console.log(criarProduto('PC Gamer', 5000.90))