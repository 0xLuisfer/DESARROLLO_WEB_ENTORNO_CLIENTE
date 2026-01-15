class Monstruo {
#vida
#vidaMaxima
    contructor() {
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
        heroe.recibirDaño(this.daño);
    }

    recibirDaño(cantidad) {
        this.vida -= cantidad;
    }

    mostrarVida() {
        return `Al monstruo le quedan ${this.daño} puntos de vida`;
    }
}