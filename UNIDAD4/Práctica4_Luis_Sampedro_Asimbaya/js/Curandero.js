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
        monstruo.recibirDaño(this.daño);
    }
}