/* TODO:
	POO - Programación Orientada a Objetos
		* CLASES 	 -> Modelo|Molde a seguir.
 		* OBJETOS 	 -> Es una instancia de una clase.
 		* ATRIBUTOS -> Son caracteristicas de un objeto.
 		* MÉTODOS 	 -> Son acciones (que hace o que puede ) de un objeto. (Son funciones dentro de un objeto).
*/

const animal = {
	nombre: 'Snoopy',
	sonar() {
		console.log('Hago sonidos por que vivo');
	},
};

const animal2 = {
	nombre: 'Lola Bunny',
	sonar() {
		console.log('Hago sonidos por que vivo');
	},
};

/* NOTE:-> Función constructura */

function Animal(nombre, genero) {
	this.nombre = nombre;
	this.genero = genero;

	this.sonar = function () {
		console.log(`Hola, soy ${this.nombre}`);
	};
}

function Usuario(nombre, correo) {
	this.nombre = nombre;
	this.correo = correo;
}

Usuario.prototype.saludar = function (nombre) {
	console.log(`Hola, soy el usuario ${nombre}!.`);
};

/* NOTE:-> Herencia prototípica */

function Perro(nombre, genero, tamanio) {
	this.super = Animal;
	this.super(nombre, genero);
	this.tamanio = tamanio;
}
/* NOTE:-> Perro está heredando de Animal */
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

/* NOTE:-> Sobreescribiendo el método de prototipo en el hijo */
Perro.prototype.sonar = function () {
	console.log('Soy un perro, hago ladridos');
};
Perro.prototype.ladrar = function () {
	console.log('Guauu Guauu');
};

const prototype = () => {
	console.log(animal);
	console.log(animal2);

	const snoopy = new Animal('Snoopy', 'Macho');
	const lolaBunny = new Animal('Lola Bunny', 'Hembra');

	console.log(snoopy);
	console.log(lolaBunny);
	snoopy.sonar();

	const usuario1 = new Usuario('Pedro', 'puri@gmail.com');

	console.log(usuario1);
	usuario1.saludar(usuario1.nombre);

	const tony = new Perro('Tony', 'Macho', 'Mediano');

	console.log(tony);
	tony.ladrar();
	tony.sonar();
};

export const prototipos = () => prototype();
