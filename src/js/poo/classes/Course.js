export default class Course {
	#id;
	#name;
	#students = [];

	constructor(name) {
		this.#id = Date.now();
		this.#name = name;
	}

	get getId() {
		return this.#id;
	}

	get getName() {
		return this.#name;
	}

	set setStudent(student) {
		this.#students = [...this.#students, student];
	}

	getStudents() {
		return this.#students;
	}
}
