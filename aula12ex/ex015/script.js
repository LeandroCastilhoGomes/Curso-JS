function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src','menino.png')
            } else if(idade < 21) {
            //adolecente
            img.setAttribute('src', 'adolecentehomem.png')
            } else if(idade < 50) {
            //adulto
            img.setAttribute('src','leandro.png')
            } else {
            //idoso
            img.setAttribute('src','idosohomem.png')
            }
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','valentina.png')
                } else if(idade < 21) {
                //adolecente
                img.setAttribute('src','sarah.png')
                } else if(idade < 50) {
                //adulto
                img.setAttribute('src','fernanda2.png')
                } else {
                //idoso
                img.setAttribute('src','idosa.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML =` Detectamos ${genero} com ${idade} anos. `
        res.appendChild( img )

    }
}