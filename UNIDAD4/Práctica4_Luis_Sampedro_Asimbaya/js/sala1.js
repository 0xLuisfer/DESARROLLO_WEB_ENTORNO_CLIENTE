const puntuacionObjetivo = Symbol("Puntuación necesaria para pasar a la siguiente sala")

const quiz = {
    titulo: "Quiz sala 1",
    dificultad: "Baja",
    tematica: {
        capitales : {
            preguntas: [
                {p: "¿Cuál es la capital de España?", r: "Madrid"},
                {p: "¿Cuál es la capital de Francia?", r: "París"},
                {p: "¿Cuál es la capital de Italia?", r: "Roma"},
                {p: "¿Cuál es la capital de Alemania?", r: "Berlín" },
                {p: "¿Cuál es la capital de Portugal?", r: "Lisboa" },
                {p: "¿Cuál es la capital de Reino Unido?", r: "Londres" }
            ]
        },
        matematicas: {
            preguntas : [
                {p: "¿Cuánto es 10 + 15 + 20?", r: 45},
                {p: "¿Cuánto es 7 x 8?", r: 56},
                {p: "¿Cuánto es 9 ÷ 3?", r: 3},
                {p: "¿Cuánto es 12 + 18?", r: 30 },
                {p: "¿Cuánto es 6 x 9?", r: 54 },
                {p: "¿Cuánto es 25 - 7?", r: 18 }
            ]
        },
        cultura: {
            preguntas: [
                {p: "¿A qué temperatura, en grados Celsius, hierve el agua?", r: 100},
                {p: "¿Cuál es el planeta más grande de nuestro sistema solar?", r: "Júpiter"},
                {p: "¿En qué año se acabó la segunda guerra mundial?", r: 1945},
                {p: "¿Cuál es el océano más grande del mundo?", r: "Pacífico" },
                {p: "Fórmula del gas que necesitan las plantas para realizar la fotosíntesis.", r: "CO2"},
                {p: "¿En qué año llegó el ser humano a la Luna?", r: 1969 }
            ]
        }
    },
    puntuacion_usuario: 0,
    validarRespuesta (respuestaUsuario, respuestaCorrecta) {
        return String(respuestaUsuario).trim().toLowerCase() == String(respuestaCorrecta).trim().toLowerCase();
    },
    [puntuacionObjetivo] : 60
};

let contador = 1
let titulo = ""

// funciones de boton tematica
function preguntarCapitales() {
    if (nombre.value.trim()) {
        let capitalesClon = structuredClone(quiz.tematica.capitales); // clonamos unicamente la seccion de preguntas de capitales
        titulo = "Capitales";
        iniciarQuizClonado(capitalesClon)
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

function preguntarMatematicas() {
    if (nombre.value.trim()) {
        let matematicasClon = structuredClone(quiz.tematica.matematicas); // clonamos unicamente la seccion de preguntas de matematicas
        titulo = "Matemáticas";
        iniciarQuizClonado(matematicasClon)
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

function preguntarCultura() {
    if (nombre.value.trim()) {
        let culturaClon = structuredClone(quiz.tematica.cultura); // clonamos unicamente la seccion de preguntas de matematicas
        titulo = "Cultura";
        iniciarQuizClonado(culturaClon)
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

// funcion para iniciar cuestionario clonado - se oculta menu de inicio y se muestra menu de preguntas
function iniciarQuizClonado(temaClonado) {
    document.getElementById('menuInicio').style.display = "none";
    preguntasActuales = temaClonado.preguntas;
    indicePregunta = 0;
    document.getElementById("contenedorPreguntas").style.display = "block";
    mostrarPregunta();
}

// funcion para ir mostrando las preguntas de cada tema
function mostrarPregunta() {
    if (indicePregunta < preguntasActuales.length) {
        document.getElementById('tituloTematica').innerHTML = `${titulo}: pregunta ${contador}/6`
        document.getElementById("preguntaTexto").innerHTML = preguntasActuales[indicePregunta].p;
        document.getElementById("respuestaInput").value = "";
        document.getElementById("puntuacion").innerHTML = `Puntuación actual: ${quiz.puntuacion_usuario}`;
        contador += 1
    } else {
        // al finalizar la lista de preguntas se valora si alncaza la puntuacoón objetivo
        if (quiz.puntuacion_usuario === quiz[puntuacionObjetivo]) {
            document.body.innerHTML = `<h3>¡Felicidades ${nombre.value}, has logrado ${quiz.puntuacion_usuario} puntos!</h3><input type='button' value='Siguiente sala' onclick='pasarSala()'> <input type='button' value='Volver al inicio' onclick='volverInicio()'>`
        }
        else {
            document.body.innerHTML = `<h3>Mala suerte, ${nombre.value}. Has logrado ${quiz.puntuacion_usuario} puntos. <br>Vuelve a intentarlo y consigue ${quiz[puntuacionObjetivo]} para pasar a la siguiente sala.</h3><input type='button' value='Volver al inicio' onclick='volverInicio()'>`
        }
    }
}

// validamos las respuestas del usuario
function enviarRespuesta() {
    let respuestaUsuario = document.getElementById("respuestaInput").value;
    let respuestaCorrecta = preguntasActuales[indicePregunta].r;

    if (quiz.validarRespuesta(respuestaUsuario, respuestaCorrecta)) {
        quiz.puntuacion_usuario += 10;
        document.getElementById("comentario").style.color = 'green';
        document.getElementById("comentario").innerHTML = "Correcto";
    } else {
        document.getElementById("comentario").style.color = 'red';
        document.getElementById("comentario").innerHTML = `Incorrecto. Respuesta correcta: ${respuestaCorrecta}`;
    }
    indicePregunta++;
    mostrarPregunta();
}

// funcion ejecutada al llegar a 60 puntos y pulsar botón de 'siguiente sala'
function pasarSala() {
    window.location.href = 'sala2.html';
}

// funcion ejecutada al llegar a 60 puntos y pulsar botón de 'volver a inicio'
function volverInicio() {
    window.location.reload()
}