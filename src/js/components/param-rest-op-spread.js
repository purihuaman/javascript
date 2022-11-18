/* NOTE:-> Parametros Rest */

function suma(...params) {
	console.log(params);

	console.log(Array.isArray(params));
	console.log(params.length);
	console.log('Spread recorrido con map');
	params.map((el) => console.log(` -> ${el}`));
}

function sumar(a, b, ...c) {
	let resultado = a + b;

	c.forEach((element) => {
		resultado += element;
	});

	return resultado;
}

/* NOTE:-> Spread Operator */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [60, 70, 80, 90, 100];
const arr3 = [...arr1, ...arr2];

const personaje = {
	nombre: 'Pedro',
	apellido: 'Puri',
	hobbies: {
		futbol: true,
	},
};

const direccion = {
	calle: 'Anonimous',
	localidad: 'Lima',
	pais: 'Perú',
};

const persona = { ...personaje, direccion: { ...direccion }, edad: 23 };

// personaje.hobbies.futbol = false;
persona.direccion.calle = 'Ponpinchu';

const paramRest = () => {
	console.log(personaje);
	console.log(direccion);
	console.log(persona);

	// console.log(sumar(2, 2, 10, 10));
	// console.log(sumar(2, 2, 10, 10, 10));
	// console.log(sumar(2, 2, 10, 10, 10, 10));

	// suma(2, 10, 20);

	// console.log(arr3);
};

export const paramRestOpSpread = () => paramRest();
