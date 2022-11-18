export class Animal {}

export class Personaje {
	#name;
	type = 'Player';
	lifes = 5;
	energy = 10;

	constructor(name) {
		this.#name = name;

		console.log(`¡Bienvenido/a ${this.#name}!`);
	}

	get status() {
		return '⭐'.repeat(this.energy);
	}

	set status(starts) {
		this.energy = starts.length;
	}
}
