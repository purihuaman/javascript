class Animal {
	constructor(nombre, genero) {
		this.nombre = nombre;
		this.genero = genero;
	}

	sonar() {
		console.log('Hago sonidos!');
	}

	saludar() {
		console.log(`Hola, soy ${this.nombre}`);
	}
}

class Perro extends Animal {
	constructor(nombre, genero, tamanio) {
		super(nombre, genero);
		this.tamanio = tamanio;
		this.raza = null;
	}

	sonar() {
		console.log('Guauuu Guauuu');
	}

	static queEres() {
		console.log('Somos perritos');
	}

	get getRaza() {
		return this.raza;
	}

	// eslint-disable-next-line accessor-pairs
	set setRaza(newRaza) {
		this.raza = newRaza;
	}
}

const ClaseHerencia = () => {
	const scooby = new Animal('Scooby', 'Macho');
	const kenai = new Perro('Kenai', 'Macho', 'Mediano');

	console.log(scooby);
	console.log(kenai);
	kenai.saludar();
	scooby.sonar();
	kenai.sonar();
	kenai.setRaza = 'Pastor Aleman';
	console.log('Raza: ', kenai.getRaza);

	Perro.queEres();
};

export const ClasesHerencia = () => ClaseHerencia();
