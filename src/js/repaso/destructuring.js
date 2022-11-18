const destructuring = () => {
	// destructuringObjetos();
	// destructuringArrays();

	swapVariables();
};

const destructuringArrays = () => {
	const listaNumeros = [12, 21, 38, 100, 5_000, 8];

	// const [posi1, posi2, posi3] = listaNumeros;
	// const [posi1, , posi3] = listaNumeros;
	const [posi1, posi2, posi3, ...resto] = listaNumeros;

	console.log({ posi1, posi3, resto });
};

const destructuringObjetos = () => {
	const persona = {
		nombre: 'Jaqui',
		apellido: 'Puri',
		edad: 23,
		direccion: {
			calle: 'La Ramada',
			codigoPostal: 48888,
		},
	};

	// const { nombre: primerNombre, edad } = persona;
	const {
		nombre: primerNombre,
		direccion: { calle, codigoPostal },
		...restoPersona
	} = persona;
	// const { calle, codigoPostal } = direccion;

	console.log({ primerNombre, restoPersona });
	console.log({ calle, codigoPostal });
};

const swapVariables = () => {
	let nombre = 'Pedro';
	let apellido = 'Purihuaman';

	// NOTE: 1era forma
	// let intermedia = '';
	// intermedia = nombre;
	// nombre = apellido;
	// apellido = intermedia;

	// NOTE: 2da forma
	[apellido, nombre] = [nombre, apellido];

	console.log(nombre, apellido);
};

export default destructuring;
