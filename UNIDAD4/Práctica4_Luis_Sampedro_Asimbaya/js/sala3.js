import Heroe from './Heroe.js';
import {Luchador} from './Luchador.js';
import {Curandero} from './Curandero.js';
import {Tanque} from './Tanque.js';

let nombre = document.getElementById('nombrePersonaje');

window.crearCurandero = function () {
    try {
        if (!nombre.value.trim()) {
            // creamos error personalizado
            throw new Error ("Debes introducir un nombre");
        }
        let curandero1 = new Curandero(nombre);
        alert(curandero1.mostrarVida());
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
        let luchador1 = new Luchador(nombre);
        alert(luchador1.mostrarVida());
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
        let tanque1 = new Tanque(nombre);
        alert(tanque1.mostrarVida());
    } catch(err) {
            alert(err.message)
    }
}



/* let luchador1 = new Luchador('Pepe');
luchador1.recibirGolpe();
alert(luchador1.mostrarVida());

let curandero1 = new Curandero("Jose");
curandero1.curarse();
alert(curandero1.mostrarVida());

let tanque1 = new Tanque("Pedro");
alert(tanque1.mostrarVida()); */