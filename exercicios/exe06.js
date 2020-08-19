/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, juros, tempo) {
    return capitalInicial + (capitalInicial * juros * tempo)
}

function jurosCompostos(capitalInicial, juros, tempo) {
    return capitalInicial * (1 + juros) ** tempo
}

console.log(jurosSimples(1000, 10/100, 2)) // Ou colocar em porcentual direto 0.10
console.log(jurosCompostos(1000, 10/100, 5))