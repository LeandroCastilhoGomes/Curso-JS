const milissegundosPomodoro = 4000 // Estou usando 3 segundos para test após o test colocar esse numero => 25*60*1000
const disparador = document.querySelector('#disparador') //Variavél que vai receber o clic do usuário
milissegundosRestantes = milissegundosPomodoro - 1000
let contador

disparador.addEventListener('click', () => {
    console.log('disparador ativado') // Criando o cronometro
    console.log('Faltam', (milissegundosPomodoro/1000))
    contador = setInterval('contadorDeSegundos()', 1000);

})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        console.log("Acabou o pomodoro!");
        alert('Seu tempo de produção do pomodoro acabou. Vá descançar')

        clearInterval(contador)
    } else {
        console.log('Faltam', (milissegundosRestantes/1000))
    }
    milissegundosRestantes -= 1000
}

