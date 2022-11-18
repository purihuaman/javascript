import Person from './Person';

export default class Teacher extends Person {
	#dni;

	constructor(name, lastname, dni) {
		super(name, lastname);
		this.#dni = dni;
	}

	setStudentNote(student, note) {
		student.setNote(note);
	}
}
