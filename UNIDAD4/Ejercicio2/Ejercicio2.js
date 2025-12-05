let alumno = {
    edad: 18,
    admin: "false",
    stats: {
        post: 0,
        followers: 0
    }
};

let alumno2 = structuredClone(alumno);
alumno.stats.post =+ 1;

let output = document.getElementById('output');

// Funcion recorrer objeto
function recorrerObjeto(objeto) {
    for (let claves in objeto) {
        if (claves == 'object') {
            for (let subclaves in claves) {
                output.innerHTML += `${claves}: ${claves[subclaves]}`
            }
        } else {
            output.innerHTML += `${claves}: ${objeto[claves]}<br>`;
        }
    }
}

recorrerObjeto(alumno);
recorrerObjeto(alumno2);
