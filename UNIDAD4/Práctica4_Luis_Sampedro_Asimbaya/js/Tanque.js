import Heroe from './Heroe.js';
export class Tanque extends Heroe {
    constructor(nombre) {
        super(nombre);
        this.daño = 10;
        this.nivel = 1;
        this.configurarVida(125);
    }

    recibirGolpe() {
        this.recibirDaño(10)
        return this.vida;
    }

    atacar(monstruo) {
    // probabilidades para que tanque ataque
    if (Math.random() < 0.6) {
        monstruo.recibirDaño(this.daño);
    } else {
        alert(`Tu personaje ${this.nombre} ha fallado el ataque`);
    }
    }
}