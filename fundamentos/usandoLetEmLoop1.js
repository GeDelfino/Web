for (let i = 0; i < 10; i++){
    console.log(i)
}
//console.log('i =', i) // let ficou preso no bloco diferente do var que é global.

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()