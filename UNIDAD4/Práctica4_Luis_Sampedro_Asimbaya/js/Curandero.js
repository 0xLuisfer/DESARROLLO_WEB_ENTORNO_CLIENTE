import Heroe from './Heroe.js';
export class Curandero extends Heroe {
    #curacionesUsadas = 0;

    static max_curaciones = 3;

    constructor(nombre) {
        super(nombre);
        this.daño = 10;
        this.nivel = 1;
        this.configurarVida(75);
    }

    curarse() {
        this.curar(10)
        return this.vida;
    }

    recibirGolpe() {
        this.recibirDaño(10)
        return this.vida;
    }

    curar(cantidad) {
        if (this.#curacionesUsadas < Curandero.max_curaciones) {
            this.vida = this.vida + cantidad;
            this.#curacionesUsadas++;
        } else {
            throw new Error('Tu personaje ha alcanzado el máximo de curaciones (3)');
        }
    }

    atacar(monstruo) {
        // probabilidades para que curandero ataque
        if (Math.random() < 0.9) {
            monstruo.recibirDaño(this.daño);
        } else {
            alert(`Tu personaje ${this.nombre} ha fallado el ataque`);
        }
    }
}