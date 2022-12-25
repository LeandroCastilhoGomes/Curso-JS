function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
    msg.style.color  = `white`
    if (hora >= 0 && hora < 12){
        msg.innerText += ' Bom Dia'
        img.src = `manha.png`
        document.body.style.background = `#f5d041`
    }else if(hora >= 12 && hora < 18){
        msg.innerText += ' Boa Tarde'
        img.src = `tarde.png`
        document.body.style.background = `#de823f`
    }else{
        msg.innerText += ' Boa Noite'
        img.src = `noite.png`
        document.body.style.background = `#052943`
    }

}
