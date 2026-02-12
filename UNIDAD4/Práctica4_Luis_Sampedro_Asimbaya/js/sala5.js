// Eventos blur y focus para dar estilo a los inputs del formulario
let inputsFormulario = document.forms.formulario;

for (let input of inputsFormulario) {
    input.addEventListener("focus", function() {
        input.style.backgroundImage = 'url(images/pokeball.webp)';
        input.style.backgroundSize = 'cover';
        input.style.backgroundPosition = "center center";
        input.style.color = 'white';
        input.style.fontWeight = 'bold';
    });

    input.addEventListener("blur", function() {
        input.style.backgroundImage ='';
        input.style.color = 'black';
    });
};

let inputsValidos = true;
// modificación del input al momento
nombre.oninput = function() {
    let regex = /^[a-z ]+$/i;
    if (regex.test(nombre.value)) {
        nombreTexto.innerHTML = 'Nombre válido';
        nombreTexto.style.color = 'green';
        inputsValidos = true;
    } else {
        nombreTexto.innerHTML = 'Nombre NO válido';
        nombreTexto.style.color = 'red';
        inputsValidos = false;
    }
}

apellido.oninput = function() {
    let regex = /^[a-z ]+$/i;
    if (regex.test(apellido.value)) {
        apellidoTexto.innerHTML = 'Apellido válido';
        apellidoTexto.style.color = 'green';
        inputsValidos = true;
    } else {
        apellidoTexto.innerHTML = 'Apellido NO válido';
        apellidoTexto.style.color = 'red';
        inputsValidos = false;
    }
}

correo.oninput = function() {
    let regex = /^[a-zA-Z0-9._-]{1,15}@(gmail|hotmail)\.(com|es)$/i;
    if (regex.test(correo.value)) {
        correoTexto.innerHTML = 'Correo válido';
        correoTexto.style.color = 'green';
        inputsValidos = true;
    } else {
        correoTexto.innerHTML = 'Correo NO válido';
        correoTexto.style.color = 'red';
        inputsValidos = false;
    }
}

telefono.oninput = function() {
    let regex = /^[0-9]{9}$/d
    if (regex.test(telefono.value)) {
        telefonoTexto.innerHTML = 'Teléfono válido';
        telefonoTexto.style.color = 'green';
        inputsValidos = true;
    } else {
        telefonoTexto.innerHTML = 'Teléfono NO válido';
        telefonoTexto.style.color = 'red';
        inputsValidos = false;
    }
}

// evento enviar formulario: mostramos cada input vacío con alert;
formulario.addEventListener("submit", function(e) {
    
    for (let input of inputsFormulario) {
        // el input de tipo submit se omite
        if (input.type === "submit") {
            continue;
        }

        if (!input.value) {
            alert(`CAMPO VACÍO: {${input.id}}`);
            inputsValidos = false; // false si al menos un input esta vacío
        }
    }

// si todos los inputs se han rellenado ocultamos el contenedor de datos y mostramos el de juego
    if (inputsValidos) {
        alert('Perfil de entrenador creado correctamente.');
        juego.style.display = 'block';
        datos.style.display = 'none';
        e.preventDefault(); // uso de preventDefault: evitamos que se envie el formulario y se vuelva a cargar la página
    } else {
        alert('Termine de rellenar los campos o verifique que sean correctos.');
        e.preventDefault(); // uso de preventDefault: evitamos que se envie el formulario y se vuelva a cargar la página
    }
});

// Juego arrastrar Pokémon al área de combate
function arrastrarPokemon(pokemon) {

    pokemon.onmousedown = function (event) {
        // obtenemos posicion centrada del objeto cuando clicamos
        let shiftX = event.clientX - pokemon.getBoundingClientRect().left;
        let shiftY = event.clientY - pokemon.getBoundingClientRect().top;

        // movemos libremente la imagen/gif por todo el body
        pokemon.style.position = 'absolute';
        pokemon.style.zIndex = 1000;
        document.body.append(pokemon);

        // movemos el pokemon a las coordenadas pageX, pageY tomando la posicion inicial, con lo que podemos seguir el cursor
        function moveAt(pageX, pageY) {
            pokemon.style.left = pageX - shiftX + 'px';
            pokemon.style.top = pageY - shiftY + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        // ejectuamos funcion que elimina el evento de movimiento al levantar el dedo del raton
        document.addEventListener('mouseup', function onUp(event) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onUp); // eliminamos para evitar acumular liseteners, si no lo hacemos todos los objetos que hayamos movido, seguiran dentro del evento

            let zonaDrop = document.getElementById('contenedorObjetivo');
            // objeto con todas las propiedades de dimensiones del contenedor
            let rectanguloDrop = zonaDrop.getBoundingClientRect();

            // aseguramos que al soltar el ratón nos encontremos dentro de los límites del contenedor donde vamos a dropear
            if (event.clientX > rectanguloDrop.left && event.clientX < rectanguloDrop.right && event.clientY > rectanguloDrop.top && event.clientY < rectanguloDrop.bottom) {
                zonaDrop.append(pokemon);
                pokemon.style.position = 'relative';
                pokemon.style.left = '0';
                pokemon.style.top = '0';
            }
        });
    };

    // evitamos conflicto con el drag and drop del navegador
    pokemon.ondragstart = function() {
        return false;
    };
}

arrastrarPokemon(alakazam);
arrastrarPokemon(blaziken);
arrastrarPokemon(gengar);
arrastrarPokemon(rowlet);
arrastrarPokemon(marshadow);
arrastrarPokemon(ditto);

// funcion para validar el orden en el que ha colocado el usuario cada elemento y compararlo con el orden correcto
function validarOrden() {
    ordenCorrecto = ["gengar", "ditto", "rowlet", "alakazam", "blaziken", "marshadow"];
    let zonaDrop = document.getElementById('contenedorObjetivo');
    // cada elemento img del contenedor
    let gifs = zonaDrop.querySelectorAll("img");
    let ordenUsuario = [];

    // guardamos su valor id en un array nuevo
    for (let gif of gifs) {
        ordenUsuario.push(gif.id);
    }
    
    // comparamos ambos
    if (ordenUsuario.join() == ordenCorrecto.join()) {
        alert('CORRECTO: Has superado tu prueba final')
        juego.style.display = 'none';
        pantallaFinal.style.display = 'block';
    } else {
        alert('INCORRECTO: Vuelve a intentarlo');
    }
}

// Una vez terminado el juego el usuario puede reiniciar sala 5 o volver a la sala 1
function reiniciar() {
    window.location.href = 'sala1.html';
}

function volverSala() {
    window.location.href = 'sala5.html';
}