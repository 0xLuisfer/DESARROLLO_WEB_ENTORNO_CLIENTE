export default class Monstruo {
    // propiedades privadas de la clase monstruo
    #vida
    #vidaMaxima
    
    constructor(nombre) {
        this.nombre = nombre
        this.#vidaMaxima = 100;
        this.#vida = 100;
        this.daño = 10;
        this.vivo = true;
    }

    // getters de vida y vidaMáxima
    get Vida() {
        return this.#vida;
    }

    get vidaMaxima() {
        return this.#vidaMaxima;
    }

    // método atacar a héroe que llama al método recibir daño de la clase héroe
    atacar(heroe) {
        // probabilidades para que monstruo ataque
        if (Math.random() < 0.75) {
            heroe.recibirDaño(this.daño);
        } else {
            alert(`El monstruo ${this.nombre} ha fallado el ataque`);
        }
    }

    // recibe daño el personaje y si su vida es menor que 0 se cambia la propiedad vivo a 'false'
    recibirDaño(cantidad) {
        this.#vida -= cantidad;
        if (this.#vida <= 0) {
            this.vivo = false;
        }
    }

    // devuelve true o false dependiendo si el personaje está vivo o no
    estaVivo() {
        return this.vivo;
    }

    // método para mostrar la vida del monstruo
    mostrarVida() {
        return `Al monstruo ${this.nombre} le quedan ${this.#vida} puntos de vida`;
    }
}