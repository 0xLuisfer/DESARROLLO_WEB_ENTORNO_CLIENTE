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