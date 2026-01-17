export default class Monstruo {
#vida
#vidaMaxima
    constructor(nombre) {
        this.nombre = nombre
        this.#vidaMaxima = 100;
        this.#vida = 100;
        this.daño = 10;
    }

    get Vida() {
        return this.#vida;
    }

    get vidaMaxima() {
        return this.#vidaMaxima;
    }

    atacar(heroe) {
        // probabilidades para que monstruo ataque
        if (Math.random() < 0.75) {
            heroe.recibirDaño(this.daño);
        } else {
            alert(`El monstruo ${this.nombre} ha fallado el ataque`);
        }
    }

    recibirDaño(cantidad) {
        this.#vida -= cantidad;
    }

    mostrarVida() {
        return `Al monstruo ${this.nombre} le quedan ${this.#vida} puntos de vida`;
    }
}