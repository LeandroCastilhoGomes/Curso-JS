let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

/*for(pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o Valor ${valores[pos]}`)
}*/
for(pos in valores) {
    console.log(` A Posição ${pos} tem o valor ${valores[pos]} `)
}