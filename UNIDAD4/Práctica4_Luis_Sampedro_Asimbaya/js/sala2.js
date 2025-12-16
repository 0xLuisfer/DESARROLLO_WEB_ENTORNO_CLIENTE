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
    let marcaUsuario = respuestaUsuario.value.trim();
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
                // guardamos en un array nuevo las palabras introducidas por el usuario
                ordenUsuario.push(marcaUsuario);
            } else {
                alert('La palabra introducida no se encuentra dentro de la lista')
                for (let marca of marcasCoches) {
                    parrafoEnunciado.innerHTML += `[${marca}] `;
                }
            }
            // hacemos llamada a la funcion cuando no queden elementos en el array original
            if (marcasCoches.length == 0) {
                    compararArrays();
            }
        } else {
            alert('Debes introducir una marca en el campo')
        }
}

// creamos un array nuevo pero ordenado alfabeticamente
let marcasOrdenadas = marcasCoches.slice().sort();


// comparamos ambos arrays
function compararArrays() {
    if (marcasOrdenadas.join().toLowerCase() == ordenUsuario.join().toLowerCase()) {
        document.getElementById('titulo').style.color = "green";
        document.getElementById('titulo').innerHTML = `¡Felicidades! Has ordenado todos los elementos correctamente.`
        parrafoEnunciado.innerHTML = `Has logrado pasar a la siguiente parte del reto<br><button onclick='segundoReto()'>Segunda parte</button>`;
        // escondemos input y botón de respuesta
        document.getElementById('botonUsuario').style.display = 'none';
        document.getElementById('respuestaUsuario').style.display = 'none';
    } else {
        document.getElementById('titulo').style.color = "red";
        document.getElementById('titulo').innerHTML = `Orden incorrecto, vuelve a intentarlo nuevamente.<br><button onclick='recargarPagina()'>Intentar de nuevo</button>`;
        // escondemos input y botón de respuesta
        document.getElementById('botonUsuario').style.display = 'none';
        document.getElementById('respuestaUsuario').style.display = 'none';
    }
}

// si el usuario falla tiene un botón para intentarlo nuevamente
function recargarPagina() {
    window.location.reload()
}

// escondemos el primer juego y mostramos contenedor del segundo juego
function segundoReto() {
    document.getElementById('contenedorPrimerJuego').style.display = "none";
    document.getElementById('contenedorSegundoJuego').style.display = "block";
}


// Creamos map donde almacenaremos las pistas
let pistasMap = new Map();

// objeto de pistas que pasaremos por parámetro
let pistasHonda = {pais: "Japón", vocales: 2, año: 1948, modelo: "Accord", característica: "Fiable"};

// introducimos clave "Honda" (por si creamos pistas para otros coches) y el objeto de pistasHonda como parámetros dentro de nuesto pistasMap
pistasMap.set("Honda", pistasHonda);

// convertimos en un array clave,valor con Object.entries y metememos por parámetro el objeto que hemos creado de pistas
let arrayPistas = Object.entries(pistasMap.get('Honda'));


function desplegarPista1() {
    
}

function desplegarPista1() {
    
}

function desplegarPista1() {
    
}

function desplegarPista1() {
    
}

function desplegarPista1() {
    
}

