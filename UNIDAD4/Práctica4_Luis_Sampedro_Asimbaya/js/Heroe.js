export default class Heroe {
    #vida;
    #vidaMaxima;

    constructor(nombre) {
        this.nombre = nombre;
        this.#vidaMaxima = 100;
        this.#vida = 100
        this.daño = 100
        this.nivel = 1
        this.vivo = true;
    }

    get vida() {
        return this.#vida;
    }

    get vidaMaxima()  {
        return this.#vidaMaxima;
    }

    set vida(valor) {
        this.#vida = valor;
    }

    recibirDaño(cantidad) {
        this.#vida = this.#vida - cantidad;
        if (this.#vida <= 0) {
            this.vivo = false;
        }
    }

    estaVivo() {
        return this.vivo;
    }

    configurarVida(vidaMaxima) {
        this.#vidaMaxima = vidaMaxima;
        this.#vida = vidaMaxima;
    }

    mostrarVida() {
        return `A tu personaje ${this.nombre} le quedan ${this.vida} puntos de vida`;
    }
}