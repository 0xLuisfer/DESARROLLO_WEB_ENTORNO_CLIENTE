import Heroe from './Heroe.js';
export class Luchador extends Heroe {
    constructor(nombre) {
        super(nombre);
        this.daño = 15;
        this.nivel = 1;
        this.configurarVida(100);
    }

    recibirGolpe() {
        this.recibirDaño(10);
        return this.vida;
    }

    atacar(monstruo) {
        monstruo.recibirDaño(this.daño);
    }
}