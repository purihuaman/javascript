class Persona {
	#nombre;
	#edad;

	constructor(nombre, edad) {
		this.#nombre = nombre;
		this.#edad = edad;
	}

	saludar() {
		return `Hola soy ${this.#nombre}`;
	}

	adios() {
		return `Adios!.`;
	}

	get getNombre() {
		return this.#nombre;
	}

	// eslint-disable-next-line accessor-pairs
	set setNombre(nombre) {
		this.#nombre = nombre;
	}

	static probarSaludo(nombre) {
		return `Bienvenido ${nombre}`;
	}
}

class Estudiante extends Persona {
	#email = '';
	#notas = [];

	constructor(nombre, edad, email, notas = []) {
		super(nombre, edad);
		this.#email = email;
		this.#notas = notas;
	}

	saludar() {
		return `${super.saludar()}, un estudiante.`;
	}

	get getNotas() {
		return this.#notas;
	}

	// eslint-disable-next-line accessor-pairs
	set setNotas(nota) {
		this.#notas.push(nota);
	}
}

const pedro = new Persona('Pedro', 23);
const meliza = new Estudiante('Meliza', 25, 'meliza@gmail.com');
meliza.setNotas = 17;
meliza.setNotas = 18;

const poo = () => {
	console.log(pedro);

	console.log(meliza);
	console.log(meliza.getNotas);

	console.log(Persona.probarSaludo('Meli'));
};

export const oop = () => poo();

/*
	function Persona(nombre) {
		this.nombre = nombre;

		// this.saludar = function () {
		// 	return `Hola soy ${this.nombre}`;
		// };

		// this.adios = function () {
		// 	return `Adios!.`;
		// };
	}

Persona.prototype.saludar = function () {
	return `Hola soy ${this.nombre}`;
};

Persona.prototype.adios = function () {
	return `Adios!.`;
};

const pedro = new Persona('Pedro');
const meliza = new Persona('Meliza');

*/
