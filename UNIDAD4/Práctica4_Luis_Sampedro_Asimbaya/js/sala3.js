import Monstruo from './Monstruo.js'
import {Luchador} from './Luchador.js';
import {Curandero} from './Curandero.js';
import {Tanque} from './Tanque.js';

let nombre = document.getElementById('nombrePersonaje');
let monstruo1;
let curandero1;
let luchador1;
let tanque1;

window.crearCurandero = function () {
    try {
        if (!nombre.value.trim()) {
            // creamos error personalizado
            throw new Error ("Debes introducir un nombre");
        }
        curandero1 = new Curandero(nombre.value);
        alert(curandero1.mostrarVida());
        document.getElementById('eleccionPersonaje').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
        // creamos también instancia de la clase Monstruo
        monstruo1 = new Monstruo('Geodude');
        alert(monstruo1.mostrarVida());
        mostrarOutput();
    } catch(err) {
            alert(err.message)
    }
}

window.crearLuchador = function () {
    try {
        if (!nombre.value.trim()) {
            // creamos error personalizado
            throw new Error ("Debes introducir un nombre");
        }
        luchador1 = new Luchador(nombre.value);
        alert(luchador1.mostrarVida());
        document.getElementById('eleccionPersonaje').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
        document.getElementById('botonCuracion').style.display = 'none';
        monstruo1 = new Monstruo('Geodude');
        alert(monstruo1.mostrarVida());
        mostrarOutput();
    } catch(err) {
            alert(err.message)
    }
}

window.crearTanque = function () {
    try {
        if (!nombre.value.trim()) {
            // creamos error personalizado
            throw new Error ("Debes introducir un nombre");
        }
        tanque1 = new Tanque(nombre.value);
        alert(tanque1.mostrarVida());
        document.getElementById('eleccionPersonaje').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
        document.getElementById('botonCuracion').style.display = 'none';
        monstruo1 = new Monstruo('Geodude');
        alert(monstruo1.mostrarVida());
        mostrarOutput();
    } catch(err) {
            alert(err.message)
    }
}


window.atacarMonstruo = function () {
    if (luchador1) {
        luchador1.atacar(monstruo1);
        monstruo1.atacar(luchador1);
        mostrarOutput();
        
    } else if (tanque1) {
        tanque1.atacar(monstruo1);
        monstruo1.atacar(tanque1);
        mostrarOutput();

    } else {
        curandero1.atacar(monstruo1);
        monstruo1.atacar(curandero1);
        mostrarOutput();
    }
}

window.curarHeroe = function () {
    if (curandero1) {
        curandero1.curarse();
        mostrarOutput();
    }
}

let output = document.getElementById('output');
// funcion para ir pasando turno
function mostrarOutput() {
    if (luchador1) {
        output.innerHTML = `${monstruo1.mostrarVida()}<br>${luchador1.mostrarVida()}`;
    } else if (tanque1) {
        output.innerHTML = `${monstruo1.mostrarVida()}<br>${tanque1.mostrarVida()}`;
    } else {
        output.innerHTML = `${monstruo1.mostrarVida()}<br>${curandero1.mostrarVida()}`;
    }
    output.style.display = 'block';
}