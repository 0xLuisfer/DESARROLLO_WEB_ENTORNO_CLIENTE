// evento primer contenedor - coordenadas contenedor
let contenedor1 = document.getElementById('contenedor1');
contenedor1.addEventListener("mousedown", () => {
    const posicion = contenedor1.getBoundingClientRect();
    if ((posicion.x >= 345 && posicion.x <= 350) && (posicion.y >= 80 && posicion.y <= 85)) {
        alert(`¡Coordenadas correctas! x: ${posicion.x}, y: ${posicion.y}`);
        contenedor1.textContent = `¡CORRECTO!`;
        contenedor1.style.backgroundColor = "green";
        contenedor1.style.pointerEvents = "none"; // bloquea el mouse para no ejecutar el evento otra vez
    } else {
        alert(`Coordenadas incorrectas: x: ${posicion.x}, y: ${posicion.y}`)
    }
});


// evento segundo contenedor - validación caracteres especiales
let contenedor2 = document.getElementById('contenedor2');

function ctrlM(event) {
    if (event.ctrlKey && event.code === "KeyM") {
        alert("Correcta la combinación de teclas CTRL + M");
        event.preventDefault(); // evitamos cualquier acción por defecto de esta combinacin de teclas

        contenedor2.textContent = "¡CORRECTO!";
        contenedor2.style.backgroundColor = "green";

        document.removeEventListener("keydown", ctrlM); // eliminamos el evento después de que el usuario lo haya ejecutado
    }
}
// disparamos el evento CTRL + M
document.addEventListener("keydown", ctrlM);


// evento tercer contenedor - validación caracteres alfanuméricos
let contenedor3 = document.getElementById('contenedor3');

function ctrlResultado(event) {
    if (event.ctrlKey && event.key === "4") {
        alert("Correcto")
        event.preventDefault(); // evitamos cualquier acción por defecto de esta combinacin de teclas

        contenedor3.textContent = "¡CORRECTO!";
        contenedor3.style.backgroundColor = "green";

        document.removeEventListener("keydown", ctrlResultado); // eliminamos el evento después de que el usuario lo haya ejecutado
    }
}

// disparamos el evento CTRL + Resultado
document.addEventListener("keydown", ctrlResultado);

//evento cuarto contenedor - validacion de colores evitando propagación
let colores = ["black", "white", "red", "cyan", "green", "yellow", "purple", "orange", "maroon", "gray"];
let contador = 0;

// primer contenedor interior
function cambiarVerde (event) {
    let colorAleatorio = Math.floor(Math.random() * colores.length);
    verde.style.backgroundColor = (colores[colorAleatorio]);
    document.getElementById('textoVerde').style.backgroundColor = (colores[colorAleatorio]);

    // getComputedStyle devuelve objeto con propiedades css del contenedor con id 'verde', accedepos a la propiedad backgoround y comparamos
    if (getComputedStyle(verde).backgroundColor == 'rgb(0, 128, 0)') {
        document.getElementById('textoVerde').textContent = '¡HECHO!';
        verde.removeEventListener("click", cambiarVerde);
    }
    event.stopPropagation();
}
verde.addEventListener("click", cambiarVerde);

// segundo contenedor interior
function cambiarRojo (event) {
    let colorAleatorio = Math.floor(Math.random() * colores.length);
    rojo.style.backgroundColor = (colores[colorAleatorio]);
    document.getElementById('textoRojo').style.backgroundColor = (colores[colorAleatorio]);

    if (getComputedStyle(rojo).backgroundColor == 'rgb(255, 0, 0)') {
        document.getElementById('textoRojo').textContent = '¡HECHO!';
        rojo.removeEventListener("click", cambiarRojo);
    }
    event.stopPropagation();
}
rojo.addEventListener("click", cambiarRojo);

// tercer contenedor interior
function cambiarCyan(event) {
    let colorAleatorio = Math.floor(Math.random() * colores.length);
    cyan.style.backgroundColor = (colores[colorAleatorio]);
    document.getElementById('textoCyan').style.backgroundColor = (colores[colorAleatorio]);

    if (getComputedStyle(cyan).backgroundColor == 'rgb(0, 255, 255)') {
        document.getElementById('textoCyan').textContent = '¡HECHO!';
        cyan.removeEventListener("click", cambiarCyan);
    }
    event.stopPropagation();
}
cyan.addEventListener("click", cambiarCyan);

// cuarto contenedor interior
function cambiarNaranja(event) {
    let colorAleatorio = Math.floor(Math.random() * colores.length);
    naranja.style.backgroundColor = (colores[colorAleatorio]);
    document.getElementById('textoNaranja').style.backgroundColor = (colores[colorAleatorio]);

    if (getComputedStyle(naranja).backgroundColor == 'rgb(255, 165, 0)') {
        document.getElementById('textoNaranja').textContent = '¡HECHO!';
        naranja.removeEventListener("click", cambiarNaranja);
    }
    event.stopPropagation();
}
naranja.addEventListener("click", cambiarNaranja);