export default class Person {
	#name;
	#lastname;

	constructor(name, lastname) {
		this.#name = name;
		this.#lastname = lastname;
	}

	setName(name) {
		this.#name = name;
	}

	setLastname(lastname) {
		this.#lastname = lastname;
	}

	getFullName() {
		return `${this.#name} ${this.#lastname}`;
	}
}
