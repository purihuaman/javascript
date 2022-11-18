import Person from './Person';

export default class Student extends Person {
	#age;
	#note = 0;

	constructor(name, lastname, age) {
		super(name, lastname);
		this.#age = age;
	}

	setNote(note) {
		this.#note = note;
	}

	getNote() {
		return this.#note;
	}
}
