import { Animal, Personaje } from './classes/Animal';
import Course from './classes/Course';
import Person from './classes/Person';
import Student from './classes/Student';
import Teacher from './classes/Teacher';
// class Animal {
// 	// propiedades
// 	// name = 'Garfield';
// 	name;
// 	type = 'cat';

// 	constructor(name) {
// 		this.name = name;
// 	}

// 	// Métodos
// 	hablar() {
// 		return 'Odio los lunes.';
// 	}
// }

// function hello() {
// 	return this;
// }

const app = () => {
	const pato = new Animal();

	// Student
	const haileeStudent = new Student('Hailee', 'Purihuaman');
	const puri = new Student('Pedro', 'Puri', 23);

	// Teacher
	const jaquiTeacher = new Teacher('Jaqui', 'Brujis');

	// Course
	const feCourseReact = new Course('Front End React');
	const beCourseExpress = new Course('Front End Express');

	console.log(haileeStudent);
	console.log(haileeStudent.getFullName());
	console.log(jaquiTeacher.getFullName());
	console.log(puri);

	console.log(feCourseReact.getName);
	feCourseReact.setStudent = haileeStudent;
	feCourseReact.setStudent = puri;

	beCourseExpress.setStudent = puri;

	console.log('**** Alumnos del curso de Front End ****');
	feCourseReact
		.getStudents()
		.forEach((element) => console.log(element.getFullName()));

	console.log('**** Alumnos del curso de Back End ****');
	beCourseExpress
		.getStudents()
		.forEach((element) => console.log(element.getFullName()));
};

export default app;
