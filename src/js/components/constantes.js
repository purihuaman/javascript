let nombre = 'Pedro';

const objeto = {
	nombre: 'Pedro',
	edad: 23,
};

const colores = ['White', 'Black', 'Skyblue'];

const tipoConstante = () => {
	const PI = 3.1416;

	objeto.genero = 'Masculino';
	colores.push('Purple');

	console.log(colores);
	console.log(objeto);
};

export const constantes = () => tipoConstante();
