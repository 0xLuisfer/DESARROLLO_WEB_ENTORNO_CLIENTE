let alumno = {
    edad: 18,
    admin: "false",
    stats: {
        post: 0,
        followers: 0
    }
};

// Incrementa el número de posts en 2 y de folowers en 3
alumno.stats.post = alumno.stats.post + 2;
alumno.stats.followers = alumno.stats.followers + 3;
alert(alumno.stats.post);
alert(alumno.stats.followers);

// Cambia el permiso de administrador a "true" y muestra el resultado en el párrafo
alumno.admin = "true";
document.getElementById('output').innerHTML += `Propiedad después del cambio: ${alumno.admin}<br>`;

// Quita la propiedad de administrador
delete alumno.admin;

// Función fuera del objeto
function recorrer(objeto) {
    for (let key in objeto) {
        if (typeof objeto[key] == 'object') {
            document.getElementById('output').innerHTML += `Propiedades del objeto: ${objeto['key']}<br>`;
            for (let subkey in objeto[key]) {
                document.getElementById('output').innerHTML += `${subkey}: ${objeto[key][subkey]}<br>`;
            }
        } else {
            document.getElementById('output').innerHTML += `${key}: ${objeto[key]}<br>`;
        }
    }
}
recorrer(alumno);
