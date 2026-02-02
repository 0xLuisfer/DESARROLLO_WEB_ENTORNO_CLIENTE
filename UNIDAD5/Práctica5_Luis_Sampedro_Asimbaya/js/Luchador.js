import Heroe from './Heroe.js';
export class Luchador extends Heroe {
    // constructor de Luchador
    constructor(nombre) {
        super(nombre);
        this.daño = 15;
        this.nivel = 1;
        this.configurarVida(100); // se configura la vida de Luchador llamándo al método de la clase Héroe
    }

    // llama al método recibirDaño de Héroe para restar la vida del personaje
    recibirGolpe() {
        this.recibirDaño(10);
        return this.vida;
    }

    // método atacar que llama al método recibir daño de la clase monstruo
    atacar(monstruo) {
        // probabilidades para que luchador ataque
        if (Math.random() < 0.6) {
            monstruo.recibirDaño(this.daño);
        } else {
            alert(`Tu personaje ${this.nombre} ha fallado el ataque`);
        }
    }
}