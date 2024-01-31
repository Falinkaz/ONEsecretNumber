
let numeroSecreto;
let listaSorteados = [];
let intentos = 1;
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; // this is added for aesthetics, since functions usually return something - however this function does not return anything
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(intentos);
  if(numeroSecreto === numeroDeUsuario){
    asignarTextoElemento('p',`¡Wow! Adivinaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
        // Si el usuario no acertó, darle pista:
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
  }
  return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() *numeroMaximo) + 1;
    console.log(numeroGenerado)
    console.log(listaSorteados)
    // If all possible numbers have been handed, then shut down the program
    if (listaSorteados.length === numeroMaximo) {
        asignarTextoElemento('p','No hay más números disponibles');
    } else {
    //if the number is already part of the array, then re-generate. Otherwise, proceed
    if (listaSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales () {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    // Al reiniciar el juego, se limpia la caja
    limpiarCaja();
    // se hace reset a los intentos
    // también al número secreto
    // y al mensaje de indicar número
    condicionesIniciales();
    // y el boton de reiniciar juego se desactiva
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();