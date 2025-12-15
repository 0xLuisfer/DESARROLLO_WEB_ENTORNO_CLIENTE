let marcasCoches = ["Toyota", "Volskwagen", "Honda", "Renault", "Seat", "Suzuki",
    "Ferrari", "Opel", "Fiat", "Dacia", "Kia", "Ford", "Peugeot", "Lexus", "Audi"]

parrafoEnunciado = document.getElementById('arrayOrdenar');

for (let marca of marcasCoches) {
    parrafoEnunciado.innerHTML += `[${marca}] `;
}