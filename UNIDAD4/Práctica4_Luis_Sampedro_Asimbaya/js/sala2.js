// array que el usuario tendrá que ordenar
let marcasCoches = ["Toyota", "Volskwagen", "Honda", "Renault", "Seat", "Suzuki",
    "Ferrari", "Opel", "Fiat", "Dacia", "Kia", "Ford", "Peugeot", "Lexus", "Audi"]

let parrafoEnunciado = document.getElementById('arrayOrdenar');

for (let marca of marcasCoches) {
    parrafoEnunciado.innerHTML += `[${marca}] `;
}

let ordenUsuario = [];

function enviarRespuesta() {
    //guardamos en una variable la respuesta del usuario
    let marcaUsuario = respuestaUsuario.value.trim()
    if (marcaUsuario) {
        // vaciamos el input del usuario
        document.getElementById('respuestaUsuario').value = "";
        // reiniciamos el parrafo que muestra el array para evitar conflicto a la hora de modificar este output
        parrafoEnunciado.innerHTML = "";
        if (marcasCoches.includes(marcaUsuario)) {
            let indice = marcasCoches.indexOf(marcaUsuario);
            // borramos un elemento del indice extraido de la palabra del usuario
            marcasCoches.splice(indice, 1);
            for (let marca of marcasCoches) {
                parrafoEnunciado.innerHTML += `[${marca}] `;
            }
        } else {
            alert('La palabra introducida no se encuentra dentro de la lista')
            for (let marca of marcasCoches) {
                parrafoEnunciado.innerHTML += `[${marca}] `;
            }
        }
        // vamos guardando en un array las respuestas del usuario
        ordenUsuario.push(marcaUsuario);
    } else {
        alert('Debes introducir una marca en el campo')
    }
}