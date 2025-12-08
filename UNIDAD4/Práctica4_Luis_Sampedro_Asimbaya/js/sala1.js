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
                {p: "Fórmula del gas que necesitan las plantas para realizar la fotosíntesis", r: "CO2"},
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
        iniciarQuizClonado(capitalesClon)
        titulo = "Capitales";
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

function preguntarMatematicas() {
    if (nombre.value.trim()) {
        let matematicasClon = structuredClone(quiz.tematica.matematicas); // clonamos unicamente la seccion de preguntas de matematicas
        iniciarQuizClonado(matematicasClon)
        titulo = "Matemáticas";
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

function preguntarCultura() {
    if (nombre.value.trim()) {
        let culturaClon = structuredClone(quiz.tematica.cultura); // clonamos unicamente la seccion de preguntas de matematicas
        iniciarQuizClonado(culturaClon)
        titulo = "Cultura";
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
}
