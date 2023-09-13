let divs = document.querySelectorAll(".grid-item");
let botonReiniciar = document.getElementById("botonReiniciar")
let turno = "X" 
let contadorClicks = 0
const posicionesGanadoras = [["00","01","02"],["10","11","12"],["20","21","22"],["00","10","20"],["01","11","21"],["02","12","22"],["00","11","22"],["20","11","02"]];
let ganador = ""
const clickHandler = (e) => {
    if(e.currentTarget.innerText == ""){
        if (turno == "X"){
            e.currentTarget.innerText = "X"
            contadorClicks++
            verificarEstadoJuego()
            turno = "O"
        }
        else{
            e.currentTarget.innerText = "O"
            contadorClicks++
            verificarEstadoJuego()
            turno = "X"
        }
    }
}
function reiniciar(){
    ganador = ""
    contadorClicks=0
    document.getElementById("etiquetaGanador").innerText = ""
    añadirListeners()
    for (let i = 0; i < 8; i++) {
        document.getElementById(posicionesGanadoras[i][0]).innerText = ""
        document.getElementById(posicionesGanadoras[i][1]).innerText = ""
        document.getElementById(posicionesGanadoras[i][2]).innerText = ""
    }
}
function verificarEstadoJuego(){
        for (let i = 0; i < 8; i++) {
            if(document.getElementById(posicionesGanadoras[i][0]).innerText == turno && document.getElementById(posicionesGanadoras[i][1]).innerText == turno && document.getElementById(posicionesGanadoras[i][2]).innerText == turno){
                ganador = turno
                document.getElementById("etiquetaGanador").innerText = "El Ganador es "+ganador
                removerListeners()
                break
            }
        }
    if(contadorClicks == 9 &&  ganador == ""){
        document.getElementById("etiquetaGanador").innerText = "EMPATE"
        removerListeners()
    }
}
function añadirListeners(){
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", clickHandler);
    }
}
function removerListeners(){
    for (let i = 0; i < divs.length; i++) {
        divs[i].removeEventListener("click", clickHandler);
    }
}
añadirListeners()
botonReiniciar.addEventListener('click', reiniciar);