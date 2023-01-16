let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(`Nosso Vetor tem ${num} posições `)
console.log(`O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('o valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
