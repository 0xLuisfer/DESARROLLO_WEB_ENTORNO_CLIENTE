// evento primer contenedor
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