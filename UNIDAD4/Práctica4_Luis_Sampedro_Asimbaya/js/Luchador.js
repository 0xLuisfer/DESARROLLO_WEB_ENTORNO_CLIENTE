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
        // probabilidades para que luchador ataque
        if (Math.random() < 0.6) {
            monstruo.recibirDaño(this.daño);
        } else {
            alert(`Tu personaje ${this.nombre} ha fallado el ataque`);
        }
    }
}