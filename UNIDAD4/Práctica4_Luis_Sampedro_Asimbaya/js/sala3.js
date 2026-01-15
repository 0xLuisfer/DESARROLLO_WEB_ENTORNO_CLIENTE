import Heroe from './Heroe.js';
import {Luchador} from './Luchador.js';
import {Curandero} from './Curandero.js';
import {Tanque} from './Tanque.js';

let luchador1 = new Luchador('Pepe');
luchador1.recibirGolpe();
alert(luchador1.mostrarVida());

let curandero1 = new Curandero("Jose");
curandero1.curarse();
alert(curandero1.mostrarVida());

let tanque1 = new Tanque("Pedro");
alert(tanque1.mostrarVida());