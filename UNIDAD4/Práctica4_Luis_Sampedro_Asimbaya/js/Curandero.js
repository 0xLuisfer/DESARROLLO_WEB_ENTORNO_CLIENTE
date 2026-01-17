import Heroe from './Heroe.js';
export class Curandero extends Heroe {
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

    atacar(monstruo) {
        // probabilidades para que curandero ataque
        if (Math.random() < 0.9) {
            monstruo.recibirDaño(this.daño);
        } else {
            alert(`Tu personaje ${this.nombre} ha fallado el ataque`);
        }
    }
}