const form = document.getElementById('form');
const cardsStudents = document.getElementById('cards-students');
const cardsTeachers = document.getElementById('cards-teachers');
const templateStudent = document.getElementById('template-student').content;
const templateTeacher = document.getElementById('template-teacher').content;
const alert = document.querySelector('.alert');

const students = [];
const teachers = [];
const listUsers = [];

class Person {
	#uid;
	#name;
	#age;

	constructor(name, age) {
		this.#uid = Date.now();
		this.#name = name;
		this.#age = age;
	}

	get getUid() {
		return String(this.#uid);
	}

	get getName() {
		return this.#name;
	}

	get getAge() {
		return this.#age;
	}

	static showPersonUI(persons, role) {
		const fragment = document.createDocumentFragment();
		cardsTeachers.innerHTML = '';

		const students = persons.filter((element) => element instanceof Student);
		const teachers = persons.filter((element) => element instanceof Teacher);

		// if (role === 'estudiante') {
		// 	cardsStudents.innerHTML = '';
		// 	const fragment = document.createDocumentFragment();
		// 	persons.forEach((element) => {
		// 		fragment.appendChild(element.addStudent());
		// 	});
		// 	cardsStudents.appendChild(fragment);
		// }

		students.forEach((element) => {
			fragment.appendChild(element.addStudent());
		});
		cardsStudents.appendChild(fragment);

		// if (role === 'profesor') {
		// 	const fragment = document.createDocumentFragment();
		// 	cardsTeachers.innerHTML = '';
		// 	persons.forEach((element) => {
		// 		fragment.appendChild(element.addTeacher());
		// 	});

		// 	cardsTeachers.appendChild(fragment);
		// }

		teachers.forEach((element) => {
			fragment.appendChild(element.addTeacher());
		});

		cardsTeachers.appendChild(fragment);
	}
}

class Student extends Person {
	#stateCurso = true;
	#student = 'Estudiante';

	constructor(name, age, stateCurso) {
		super(name, age);
		this.#stateCurso = stateCurso;
	}

	get getStateCurso() {
		return this.#stateCurso;
	}

	// eslint-disable-next-line accessor-pairs
	set setStateCurso(newStateCurso) {
		this.#stateCurso = newStateCurso;
	}

	addStudent() {
		const cloneTemplate = templateStudent.cloneNode(true);

		cloneTemplate.querySelector('h5 .text-primary').textContent = this.getName;
		cloneTemplate.querySelector('h5 .badge').textContent = this.getStateCurso
			? 'Aprobado'
			: 'Desaprobado';
		cloneTemplate.querySelector('small').textContent = this.#student;
		cloneTemplate.querySelector(
			'[data-age]'
		).textContent = `Edad: ${this.getAge}`;

		if (this.#stateCurso) {
			cloneTemplate
				.querySelector('h5 .badge')
				.classList.replace('bg-success', 'bg-success');
			cloneTemplate.querySelector('.btn-success').disabled = true;
			cloneTemplate.querySelector('.btn-danger').disabled = false;
		} else {
			cloneTemplate
				.querySelector('h5 .badge')
				.classList.replace('bg-success', 'bg-danger');
			cloneTemplate.querySelector('.btn-success').disabled = false;
			cloneTemplate.querySelector('.btn-danger').disabled = true;
		}

		cloneTemplate.querySelector('.btn-success').dataset.uid = this.getUid;
		cloneTemplate.querySelector('.btn-danger').dataset.uid = this.getUid;

		return cloneTemplate;
	}
}

class Teacher extends Person {
	#stateHoliday = false;
	#teacher = 'Profesor(a)';

	constructor(name, age, stateHoliday) {
		super(name, age);
		this.#stateHoliday = stateHoliday;
	}

	addTeacher() {
		const cloneTemplate = templateTeacher.cloneNode(true);

		cloneTemplate.querySelector('h5 .text-primary').textContent = this.getName;
		cloneTemplate.querySelector('h5 .badge').textContent = this.#stateHoliday
			? 'Clases'
			: 'Vacaciones';
		cloneTemplate.querySelector('small').textContent = this.#teacher;
		cloneTemplate.querySelector(
			'[data-age]'
		).textContent = `Edad: ${this.getAge}`;

		cloneTemplate.querySelector(
			'.btn-info'
		).dataset.btnsucess = `${Date.now()}${this.getName.toLowerCase()}`;
		cloneTemplate.querySelector(
			'.btn-primary'
		).dataset.btndanger = `${Date.now()}${this.getName.toLowerCase()}`;

		return cloneTemplate;
	}
}

document.addEventListener('click', (ev) => {
	if (ev.target.dataset.uid) {
		if (ev.target.matches('.btn-success')) {
			listUsers.map((element) => {
				if (element.getUid === ev.target.dataset.uid)
					element.setStateCurso = true;

				return element;
			});
		}

		if (ev.target.matches('.btn-danger')) {
			listUsers.map((element) => {
				if (element.getUid === ev.target.dataset.uid)
					element.setStateCurso = false;
				return element;
			});
		}
		Person.showPersonUI(listUsers, 'estudiante');
	}
});

const poo = () => {
	form.addEventListener('submit', (ev) => {
		ev.preventDefault();
		alert.classList.add('d-none');

		const data = new FormData(form);
		const [name, age, role] = data.values();

		if (!name.trim() || !age.trim() || !role.trim()) {
			alert.classList.remove('d-none');
			return;
		}

		if (role === 'estudiante') {
			const student = new Student(name, age, true);

			// students.push(student);
			// Person.showPersonUI(students, role);
			listUsers.push(student);
		}

		if (role === 'profesor') {
			const teacher = new Teacher(name, age, false);

			// teachers.push(teacher);
			// Person.showPersonUI(teachers, role);
			listUsers.push(teacher);
		}
		Person.showPersonUI(listUsers, role);
	});
};

export const practicePoo = () => poo();
