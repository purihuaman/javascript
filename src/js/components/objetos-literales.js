const objetos = () => {
	const nombre = 'tony';
	const edad = 4;

	const perro = {
		nombre,
		edad,
		ladrar: function () {
			console.log('guauuu');
		},
	};

	const personaje = {
		nombre: 'Pedro',
		apellido: 'Puri',
		edad: 23,
		5: 55,
	};

	const salario = {
		enero: 920,
		febrero: 1040,
		marzo: 1250,
	};

	/* NOTE:-> Object.keys(obj) -> Recomendación (Hay la longitud del objeto) */
	// console.log(Object.keys(personaje).length);

	/* NOTE:-> Object.values(obj) -> */

	// console.log(Object.values(personaje));
	// console.log(
	// 	Object.values(salario).reduce((prev, current) => prev + current, 0)
	// );

	/* NOTE:-> Object.entries(obj) */

	// console.log(Object.entries(personaje));
	// Object.entries(personaje).forEach((el) => {
	// 	const key = el[0];
	// 	const value = el[1];

	// 	if (typeof value === 'string') {
	// 		personaje[key] = value.toUpperCase();
	// 	}
	// });
	// console.log(personaje);

	/* NOTE:-> Object.fromEntries(obj) -> recibe un array de array, retorna un objeto */
	// const persona1 = [
	// 	['name', 'pedro'],
	// 	['lastname', 'puri'],
	// 	['age', 23],
	// ];
	// console.log(Object.fromEntries(persona1));

	const personal = {
		nombre: 'Luis',
		apellido: 'Gonzalez',
		edad: 30,
		altura: 1.8,
		direccion: {
			calle: 'Calle Falsa,123',
			ciudad: 'Madrid',
			pais: 'España',
			facturacion: {
				calle: 'Calle Coro',
			},
		},
	};

	const personaCopia = {};
	Object.assign(personaCopia, personal);

	personal.direccion.pais = 'Perú';

	console.log(personal);
	console.log(personaCopia);

	/* TODO:
		Recomendación usar JSON.parse() y JSON.stringyfi()
	*/
};

export const objetosLiterales = () => objetos();
