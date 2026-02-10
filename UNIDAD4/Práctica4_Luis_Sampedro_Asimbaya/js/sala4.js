let contadorRetosSuperados = 0;
// evento primer contenedor - coordenadas contenedor
let contenedor1 = document.getElementById('contenedor1');
contenedor1.addEventListener("mousedown", () => {
    const posicion = contenedor1.getBoundingClientRect();
    if ((posicion.x >= 345 && posicion.x <= 350) && (posicion.y >= 80 && posicion.y <= 85)) {
        alert(`RETO 1: ¡Coordenadas correctas! x: ${posicion.x}, y: ${posicion.y}`);
        contenedor1.textContent = `¡CORRECTO!`;
        contenedor1.style.backgroundColor = "green";
        contenedor1.style.pointerEvents = "none"; // bloquea el mouse para no ejecutar el evento otra vez
        contadorRetosSuperados++;
        validarRetosSuperados()
    } else {
        alert(`Coordenadas incorrectas: x: ${posicion.x}, y: ${posicion.y}`)
    }
});


// evento segundo contenedor - validación caracteres especiales
let contenedor2 = document.getElementById('contenedor2');

function ctrlM(event) {
    if (event.ctrlKey && event.code === "KeyM") {
        alert("RETO 2: Correcta la combinación de teclas CTRL + M");
        event.preventDefault(); // evitamos cualquier acción por defecto de esta combinacin de teclas

        contenedor2.textContent = "¡CORRECTO!";
        contenedor2.style.backgroundColor = "green";

        document.removeEventListener("keydown", ctrlM); // eliminamos el evento después de que el usuario lo haya ejecutado
        contadorRetosSuperados++;
        validarRetosSuperados()
    }
}
// disparamos el evento CTRL + M
document.addEventListener("keydown", ctrlM);


// evento tercer contenedor - validación caracteres alfanuméricos
let contenedor3 = document.getElementById('contenedor3');

function ctrlResultado(event) {
    if (event.ctrlKey && event.key === "4") {
        alert("RETO 3: ¡Respuesta correcta! x = 4")
        event.preventDefault(); // evitamos cualquier acción por defecto de esta combinacin de teclas

        contenedor3.textContent = "¡CORRECTO!";
        contenedor3.style.backgroundColor = "green";

        document.removeEventListener("keydown", ctrlResultado); // eliminamos el evento después de que el usuario lo haya ejecutado
        contadorRetosSuperados++;
        validarRetosSuperados()
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

        contador++;
        if (contador == 4) {
            enunciadoReto4.innerHTML = `<button onclick=terminarReto4()>Terminar reto</button>`
            alert('RETO 4: ¡Has cambiado los colores correctamente!');
        }
    }
    event.stopPropagation();
}
verde.addEventListener("click", cambiarVerde);

// segundo contenedor interior
function cambiarRojo (event) {
    if (event.target !== event.currentTarget) return;

    let colorAleatorio = Math.floor(Math.random() * colores.length);
    rojo.style.backgroundColor = (colores[colorAleatorio]);
    document.getElementById('textoRojo').style.backgroundColor = (colores[colorAleatorio]);

    if (getComputedStyle(rojo).backgroundColor == 'rgb(255, 0, 0)') {
        document.getElementById('textoRojo').textContent = '¡HECHO!';
        rojo.removeEventListener("click", cambiarRojo);

        contador++;
        if (contador == 4) {
            enunciadoReto4.innerHTML = `<button onclick=terminarReto4()>Terminar reto</button>`
            alert('RETO 4: ¡Has cambiado los colores correctamente!');
        }
    }
    event.stopPropagation();
}
rojo.addEventListener("click", cambiarRojo);

// tercer contenedor interior
function cambiarCyan(event) {
    if (event.target !== event.currentTarget) return;

    let colorAleatorio = Math.floor(Math.random() * colores.length);
    cyan.style.backgroundColor = (colores[colorAleatorio]);
    document.getElementById('textoCyan').style.backgroundColor = (colores[colorAleatorio]);

    if (getComputedStyle(cyan).backgroundColor == 'rgb(0, 255, 255)') {
        document.getElementById('textoCyan').textContent = '¡HECHO!';
        cyan.removeEventListener("click", cambiarCyan);

        contador++
        if (contador == 4) {
            enunciadoReto4.innerHTML = `<button onclick=terminarReto4()>Terminar reto</button>`
            alert('RETO 4: ¡Has cambiado los colores correctamente!');
        }
    }
    event.stopPropagation();
}
cyan.addEventListener("click", cambiarCyan);

// cuarto contenedor interior
function cambiarNaranja(event) {
    if (event.target !== event.currentTarget) return;

    let colorAleatorio = Math.floor(Math.random() * colores.length);
    naranja.style.backgroundColor = (colores[colorAleatorio]);
    document.getElementById('textoNaranja').style.backgroundColor = (colores[colorAleatorio]);

    if (getComputedStyle(naranja).backgroundColor == 'rgb(255, 165, 0)') {
        document.getElementById('textoNaranja').textContent = '¡HECHO!';
        naranja.removeEventListener("click", cambiarNaranja);

        contador++;
        if (contador == 4) {
            enunciadoReto4.innerHTML = `<button onclick=terminarReto4()>Terminar reto</button>`
            alert('RETO 4: ¡Has cambiado los colores correctamente!');
        }
    }
    event.stopPropagation();
}
naranja.addEventListener("click", cambiarNaranja);

function terminarReto4() {
    contenedor4.textContent = "¡CORRECTO!";
    contenedor4.style.backgroundColor = 'green';
    contadorRetosSuperados++;
    validarRetosSuperados()
}


// quinto contenedor: números pares con delegación de eventos
let tds = document.querySelectorAll(".numeroTD");
// se crea un número random para cada celda dentro de la tabla
for (let td of tds) {
    td.textContent = Math.floor(Math.random(1) * 100);
}

// evento dentro de la tabla
table.onclick = function(event) {
    // se guarda la etiqueta objetivo en una variable y si no es una celda <td> no hace nada
    let target = event.target;

    if (target.tagName != 'TD') return;

    // validamos si es un número par y dependiendo de eso cambiamos el color de la etiqueta
    if (Number(target.textContent) % 2 == 0) {
        target.style.backgroundColor = 'green';
    } else {
        target.style.backgroundColor = 'red';
        alert(`¡Has fallado, tendrás que empezar de nuevo la sala!`);
        window.location.href = 'sala4.html';
    }
};

// función de botón para validar si el usuario ha seleccionado todos los pares, si lo ha hecho se termina el juego
function validarPares() {
    let tds = document.querySelectorAll(".numeroTD");
    for (let td of tds) {
        if (Number(td.textContent) % 2 == 0 && td.style.backgroundColor != 'green') {
            alert('Aún faltan pares por marcar');
            return;
        }
    }
    alert('RETO 5: ¡Has hecho click en todos los pares!')
    table.innerHTML = 'CORRECTO!';
    table.style.display = 'flex';
    table.style.alignItems = 'center';
    table.style.justifyContent = 'center';
    table.style.backgroundColor = 'green';
    contadorRetosSuperados++;
    validarRetosSuperados()
}

// evento cuadrado que se mueve
contenedor5.onclick = function(event) {
    // si el click no fue dentro del contenedor interior
    if (!contenedorInterior.contains(event.target)) {
        alert('¡MAL!');
        return
    }

    // ancho visible del cuadrado exterior e interior
    let exterior = contenedor5.clientWidth;
    let interior = contenedorInterior.clientWidth;

    // se ponen límites para evitar que el cuadrado interior salga del exterior
    let maxX = exterior - interior;
    let maxY = exterior - interior;

    //números aleatorios para establecer nuevas coordenadas del cuadrado interior
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    contenedorInterior.style.left = `${x}px`;
    contenedorInterior.style.top = `${y}px`;

    contenedorInterior.textContent++;
    
    if (contenedorInterior.textContent == 20) {
        alert('RETO 6: ¡Buen aim!')
        contenedor5.innerHTML = '¡CORRECTO!';
        contenedor5.style.display = 'flex';
        contenedor5.style.alignItems = 'center';
        contenedor5.style.justifyContent = 'center';
        contenedor5.style.backgroundColor = 'green';
        contadorRetosSuperados++;
        validarRetosSuperados()
    }
}

function validarRetosSuperados() {
    if (contadorRetosSuperados == 6) {
        juego1.style.display = 'none';
        pantallaFinal.style.display = 'block';
    }
}

function pasarSala() {
    window.location.href = 'sala5.html';
}