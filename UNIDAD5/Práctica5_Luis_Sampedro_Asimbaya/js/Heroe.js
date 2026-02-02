export default class Heroe {
    // propiedades privadas de la calse Héroe
    #vida;
    #vidaMaxima;

    // contructor de la clase Héroe
    constructor(nombre) {
        this.nombre = nombre;
        this.#vidaMaxima = 100;
        this.#vida = 100
        this.daño = 100
        this.nivel = 1
        this.vivo = true;
    }

    // getter y setters de vida y vidaMáxima
    get vida() {
        return this.#vida;
    }

    get vidaMaxima()  {
        return this.#vidaMaxima;
    }

    set vida(valor) {
        this.#vida = valor;
    }

    // método que resta la vida del Héroe lo que se haya introducido por parametro
    // si la vida es menor que 0 se cambia el valor de la propiedad vivo a 'false'
    recibirDaño(cantidad) {
        this.#vida = this.#vida - cantidad;
        if (this.#vida <= 0) {
            this.vivo = false;
        }
    }

    // devuelve true o false dependiendo si el personaje esta vivo o no
    estaVivo() {
        return this.vivo;
    }

    // método que configura la vida de cada persona, se llama desde el contructor al instanciarlos
    configurarVida(vidaMaxima) {
        this.#vidaMaxima = vidaMaxima;
        this.#vida = vidaMaxima;
    }

    // método para mostrar la vida de cada personaje
    mostrarVida() {
        return `A tu personaje ${this.nombre} le quedan ${this.vida} puntos de vida`;
    }
}