{
    {
        var sera = 'Será???' 
        console.log(sera) // Variavel global tentar evitar. 
    } 
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) // Foi declarado dentro de uma função então não tem como aceesar