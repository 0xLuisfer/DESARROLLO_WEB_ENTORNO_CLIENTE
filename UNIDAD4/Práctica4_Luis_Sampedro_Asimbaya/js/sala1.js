const puntuacionObjetivo = Symbol("Puntuación necesaria para pasar a la siguiente sala")

const quiz1 = {
    titulo: "Quiz sala 1",
    dificultad: "Baja",
    tematica: {
        capitales : {
            preguntas: [
                {p: "¿Cuál es la capital de España?", r: "Madrid"},
                {p: "¿Cuál es la capital de Francia?", r: "Paris"},
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
                {p: "¿Cuánto es 9/3?", r: 3},
                {p: "¿Cuánto es 12 + 18?", r: 30 },
                {p: "¿Cuánto es 6 x 9?", r: 54 },
                {p: "¿Cuánto es 25 - 7?", r: 18 }
            ]
        },
        cultura: {
            preguntas: [
                {p: "¿A qué temperatura hierve el agua (en grados Celsius)?", r: 100},
                {p: "¿Cuál es el planeta más grande de nuestro sistema solar?", r: "Júpiter"},
                {p: "¿En qué año se acabí la segunda guerra mundial?", r: 1945},
                {p: "¿Cuál es el océano más grande del mundo?", r: "Pacífico" },
                {p: "¿Qué gas necesitan las plantas para hacer la fotosíntesis? (Fórmula)", r: "CO2"},
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

// funciones de boton tematica
function preguntarCapitales() {
    if (nombre.value) {
        let capitalesClon = structuredClone(quiz1.tematica.capitales); // clonamos unicamente la seccion de preguntas de capitales
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

function preguntarMatematicas() {
    if (nombre.value) {
        let matematicasClon = structuredClone(quiz1.tematica.matematicas); // clonamos unicamente la seccion de preguntas de matematicas
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

function preguntarCultura() {
    if (nombre.value) {
        let culturaClon = structuredClone(quiz1.tematica.cultura); // clonamos unicamente la seccion de preguntas de matematicas
    } else {
        alert('Debe introducir un nombre para comenzar el juego');
    }
}

