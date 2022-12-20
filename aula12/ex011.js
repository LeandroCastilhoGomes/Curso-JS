var idade = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Você Não Vota!')
}else {
    if(idade < 18 || idade > 65){
    console.log('O Voto é Opcional!')
    }else{
        console.log('O Voto é Obrigatório!')
    }
}