import Heroe from './Heroe.js';
export class Curandero extends Heroe {
    // propiedad privada de curaciones usadas
    #curacionesUsadas = 0;

    // propiedad estática de máximos de curaciones
    static max_curaciones = 3;

    constructor(nombre) {
        // propiedad heredada de la clase Héroe
        super(nombre);
        this.daño = 10;
        this.nivel = 1;
        this.configurarVida(75); // se configura la vida de Curandero llamándo al método de la clase Héroe
    }

    // propiedad curar solo de la clase Curandero, añade a la vida actual lo que se haya introducido por parámetro
    // Si se igualan las curaciones usadas y el máximo de usos, se lanza error con mensaje descriptivo
    curar(cantidad) {
        if (this.#curacionesUsadas < Curandero.max_curaciones) {
            this.vida = this.vida + cantidad;
            this.#curacionesUsadas++;
        } else {
            throw new Error('Tu personaje ha alcanzado el máximo de curaciones (3)');
        }
    }

    // llama a la función curar de esta misma clase
    curarse() {
        this.curar(10)
        return this.vida;
    }

    // llama a la función recibirDaño de la clase padre
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