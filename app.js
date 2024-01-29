//variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

//la finalidad de esta funcion es interactuar con la etiquedta del html que llevara un texto y luego añadir el texto

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

if (numeroUsuario === numeroSecreto){
    asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1 )? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p','el numero secreto es menor')
    }else
    {
        asignarTextoElemento('p','el numero secreto es mayor')
    }
    intentos++;
    limpiarCaja();
}
return;

}

//vamos a crear una funcion para determinar un numero random

function generarNumeroSecreto(){
    let  numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    /*
    en caso de que todos los numero ya se hallan sorteado debemos finalizar el programa por lo
    que deberiamos hacer una comparacion entre el array que tenemos y el numeor maximo de intentos
    */ 
    if(listaNumeroSorteados.length == numeroMaximo){
    asignarTextoElemento('p','ya se han sorteado todos los numeros posibles')
    }
    else{


    /*modificamos esta funcion para que los numero que ya se encuentran generados no se pongan en las 
    opciones de los numero.
    cuando un numero que no a sido genreado juega este mismo numero se añadira a la lista y no se deberia volver a repetir*/ 
    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteados.push(numeroGenerado)
        return numeroGenerado;
        }

     
    }

}

//esta funcion limpiara el input

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//function mensjaes iniciales
function condicionesIniciales(){

    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//esta funcion reiniciara el juego

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();


    //indicar mensaje intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

