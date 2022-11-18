const destructuracion = () => {
	const numeros = [100, 20000, 30000];

	const [one, two, three] = numeros;

	console.log({ one, two, three });

	const persona = {
		nombre: 'Pedro',
		apellido: 'Puri',
		edad: 23,
	};

	const { nombre, apellido, edad } = persona;

	console.log(nombre);
	console.log(apellido);
	console.log(edad);
};

export const destructuraciones = () => destructuracion();
