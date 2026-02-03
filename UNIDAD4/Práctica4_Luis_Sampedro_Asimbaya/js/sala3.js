// importamos todos los módulos necesarios
import Monstruo from './Monstruo.js'
import {Luchador} from './Luchador.js';
import {Curandero} from './Curandero.js';
import {Tanque} from './Tanque.js';

// inicializamos variables para poder usarlas dentro y fuera de las funciones
let nombre = document.getElementById('nombrePersonaje');
let turno = document.getElementById('turno');
let output = document.getElementById('output');
let monstruo1;
let curandero1;
let luchador1;
let tanque1;
let contadorTurno = 1;

// el usuario elige curandero
window.crearCurandero = function () {
    try {
        if (!nombre.value.trim()) {
            throw new Error ("Debes introducir un nombre"); // creamos error personalizado con try...catch si el usuario no inserta un nombre
        }
        // creamos la instancia de curandero
        curandero1 = new Curandero(nombre.value);
        alert(curandero1.mostrarVida()); // mostramos la vida con alert de curandero
        document.getElementById('eleccionPersonaje').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
        // creamos también instancia de la clase Monstruo
        monstruo1 = new Monstruo('Geodude');
        alert(monstruo1.mostrarVida()); // mostramos la vida con alert de monstruo
        mostrarOutput();
    } catch(err) {
        alert(err.message)
    }
}

// el usuario elige luchador
window.crearLuchador = function () {
    try {
        if (!nombre.value.trim()) {
            throw new Error ("Debes introducir un nombre"); // error si usuario no introduce nombre
        }
        // instancia de luchador
        luchador1 = new Luchador(nombre.value);
        alert(luchador1.mostrarVida()); // mostramos la vida con alert de luchador
        document.getElementById('eleccionPersonaje').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
        document.getElementById('botonCuracion').style.visibility = 'hidden';
        // instancia de monstruo
        monstruo1 = new Monstruo('Geodude');
        alert(monstruo1.mostrarVida()); // mostramos la vida con alert de monstruo
        mostrarOutput();
    } catch(err) {
        alert(err.message)
    }
}

// el usuario elige tanque
window.crearTanque = function () {
    try {
        if (!nombre.value.trim()) {
            throw new Error ("Debes introducir un nombre"); // error si usuario no introduce nombre
        }
        // instancia de tanque
        tanque1 = new Tanque(nombre.value); // mostramos la vida con alert de tanque
        alert(tanque1.mostrarVida());
        document.getElementById('eleccionPersonaje').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
        document.getElementById('botonCuracion').style.visibility = 'hidden';
        // instancia de monstruo
        monstruo1 = new Monstruo('Geodude');
        alert(monstruo1.mostrarVida()); // mostramos la vida con alert de monstruo
        mostrarOutput();
    } catch(err) {
        alert(err.message);
    }
}

// boton atacar a monstruo
window.atacarMonstruo = function () {
    turno.innerHTML = `Turno ${++contadorTurno}`; // se suma la variable de contadorTurno cuando ataca el Héroe
    // el método lo ejecuta la instancia que se haya creado
    if (luchador1) {
        luchador1.atacar(monstruo1);

    } else if (tanque1) {
        tanque1.atacar(monstruo1);

    } else {
        curandero1.atacar(monstruo1);
    }
    // se ocultan y se muestran las botones para el siguiente turno
    document.getElementById('botonCuracion').style.visibility = 'hidden';
    document.getElementById('botonAtaque').style.visibility = 'hidden';
    document.getElementById('turnoRival').style.visibility = 'visible';
    mostrarOutput();
    if (!monstruo1.estaVivo()) {
        alert(`El monstruo ${monstruo1.nombre} ha muerto`);
        document.body.innerHTML = `<h3>¡Felicidades, has logrado pasar a la siguiente sala!</h3><button onclick='pasarSala()'>Siguiente sala</button>`;
    }
}

// boton curarse curandero
window.curarHeroe = function () {
    turno.innerHTML = `Turno ${++contadorTurno}`; // se suma la variable de contadorTurno cuando se cura el curandero
    if (curandero1) {
        try {
            curandero1.curarse();
            // se ocultan y se muestran las botones para el siguiente turno
            document.getElementById('botonAtaque').style.visibility = 'hidden';
            document.getElementById('botonCuracion').style.visibility = 'hidden';
            document.getElementById('turnoRival').style.visibility = 'visible';
            mostrarOutput();
        } catch (err){
            alert(err.message);
        }
    }
}

// boton atacar a Heroe
window.atacarHeroe = function () {
    turno.innerHTML = `Turno ${++contadorTurno}`; // se suma la variable de contadorTurno cuando ataca el monstruo
    // monstruo ejecuta el método sobre la instancia que se haya creado de la clase heredada de héroe (luchador, curandero o tanque)
    if (luchador1) {
        monstruo1.atacar(luchador1);
        mostrarOutput();
        // se pregunta en cada turno si el luchador está vivo
        if (!luchador1.estaVivo()) {
            alert(`Tu luchador ${luchador1.nombre} ha muerto`);
            document.body.innerHTML = `<h3>¡Mala suerte, deberás volver a intentarlo!</h3><button onclick='intentar()'>Volver a intentarlo</button>`;
        }
        
    } else if (tanque1) {
        monstruo1.atacar(tanque1);
        mostrarOutput();
        // se pregunta en cada turno si el tanque está vivo
        if (!tanque1.estaVivo()) {
            alert(`Tu tanque ${tanque1.nombre} ha muerto`);
            document.body.innerHTML = `<h3>¡Mala suerte, deberás volver a intentarlo!</h3><button onclick='intentar()'>Volver a intentarlo</button>`;
        }

    } else {
        monstruo1.atacar(curandero1);
        mostrarOutput();
        document.getElementById('botonCuracion').style.visibility = 'visible';
        // se pregunta en cada turno si el tanque está vivo
        if (!curandero1.estaVivo()) {
            alert(`Tu curandero ${curandero1.nombre} ha muerto`);
            document.body.innerHTML = `<h3>¡Mala suerte, deberás volver a intentarlo!</h3><button onclick='intentar()'>Volver a intentarlo</button>`;
        }
    }
    // se ocultan y se muestran las botones para el siguiente turno
    document.getElementById('botonAtaque').style.visibility = 'visible';
    document.getElementById('turnoRival').style.visibility = 'hidden';
}

// funcion para ir mostrando la vida de ambos personajes dependiendo de la instancia de Héroe
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

// redirige a la siguiente sala si logra ganar
window.pasarSala = function() {
    window.location.href = 'sala4.html';
}

// redirige de nuevo a la sala 3 si el usuario pierde
window.intentar = function() {
    window.location.href = 'sala3.html';
}