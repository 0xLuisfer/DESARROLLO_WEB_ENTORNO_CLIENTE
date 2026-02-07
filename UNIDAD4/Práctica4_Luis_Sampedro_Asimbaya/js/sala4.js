// evento primer contenedor
let contenedor1 = document.getElementById('cuadrado1');
contenedor1.addEventListener("mousedown", (event) => {
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
