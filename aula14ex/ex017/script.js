function tabuada(){
    let num = [txtn, seltab]
    if(num[0].value.length == 0){
        window.alert('[ERRO] Por favor, digite um número.')
    }else {
        let n = Number(num[0].value)
        num[1].innerHTML = ' '
    
    for(c = 1;c <= 10;c++){
        var item = document.createElement('option')
        item.text = ` ${n} x ${c} = ${n * c} `
        item.value =`num[1] ${c}`
        num[1].appendChild(item)
    }
  }

}
