/* TODO:
 	- Funcion expresada: Cuando se le asigana a una variable
 	- Funcion declarada: Se declara con su nombre
*/

/* NOTE:-> Funcion expresada con return implicito */
const saludar = (nombre) => console.log('Hola,', nombre);

/* NOTE:-> Funcion expresada con return explicito */
const suma = (a, b) => {
	const total = a + b;
	return total;
};

const persona = {
	nombre: 'Pedro',
	apellidos: 'Puri',
	edad: 23,
	saludar: function () {
		console.log('function:', this);
	},
	saludar2: () => {
		console.log('arrow:', this);
	},
	saludar3() {
		console.log('function:', this);
	},
};

const perro = () => {
	console.log(this);
};

const arrowFunction = () => {
	persona.saludar();
	persona.saludar2();
	persona.saludar3();

	// console.log(persona);
	// saludar('Pedro');
	// console.log('Total:', suma(2, 3));
};

/* NOTE:-> Funcion declarada */
function sumar() {
	return 8 + 8;
}

sumar();

export const arrowsFunction = () => arrowFunction();
