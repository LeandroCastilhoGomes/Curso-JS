const milissegundosPomodoro = 4000 // Estou usando 3 segundos para test após o test colocar esse numero => 25*60*1000
const milisegundosIntervalo = 5000
const disparador = document.querySelector('#disparador') //Variavél que vai receber o clic do usuário
const cronometro = document.querySelector('#cronometro')
let milissegundosRestantes = 0
let contador

disparador.addEventListener('click', () => {
    console.log('disparador ativado') // Criando o cronometro

    if (disparador.textContent =="Começar") {
        milissegundosRestantes = milissegundosPomodoro - 1000

    } else {
        milissegundosRestantes = milisegundosIntervalo - 1000
    }
    
    contador = setInterval('contadorDeSegundos()', 1000);
})

function contadorDeSegundos() {

    if (milissegundosRestantes == 0) {
        cronometro.textContent = "00:00"
        console.log('Seu tempo de produção do pomodoro acabou. Vá descançar')

        if (disparador.textContent =="Começar") {
                disparador.textContent = "Intervalo"
        } else {
            disparador.textContent = "Começar"
        }            

        clearInterval(contador)
    } else {
        cronometro.textContent = formatadordoTempo(milissegundosRestantes/1000)
    }
    milissegundosRestantes -= 1000;
}

function formatadordoTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return (minutos.toString().padStart(2, '0')+":"+segundos.toString().padStart(2, '0'))
}

