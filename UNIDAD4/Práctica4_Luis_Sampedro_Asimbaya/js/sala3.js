class Heroe {
    #vida;
    #vidaMaxima;

    constructor(nombre) {
        this.nombre = nombre;
        this.#vidaMaxima = 100;
        this.#vida = 100
        this.daño = 100
        this.nivel = 1
    }

    get vida() {
        return this.#vida;
    }

    get vidaMaxima()  {
        return this.#vidaMaxima;
    }

    curar(cantidad) {
        this.#vida = this.#vida + cantidad;
    }

    recibirDaño(cantidad) {
        this.#vida = this.#vida - cantidad;
    }

    configurarVida(vidaMaxima) {
        this.#vidaMaxima = vidaMaxima;
        this.#vida = vidaMaxima;
    }

    mostrarVida() {
        return `A tu personaje le quedan ${this.vida} puntos de vida`;
    }
}

class Curandero extends Heroe {
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

class Tanque extends Heroe {
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
        monstruo.recibirDaño(this.daño);
    }
}

class Luchador extends Heroe {
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

let curandero1 = new Curandero('Pepe');
curandero1.recibirGolpe();
curandero1.curarse();
alert(curandero1.mostrarVida());

class monstruo {
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
