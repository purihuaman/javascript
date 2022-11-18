const cortocircuito = () => {
	let nombre = 'pedro';

	// nombre = nombre || 'anonimo';
	nombre = nombre && 'hola';

	console.log(nombre);
};

export const objCortocircuito = () => cortocircuito();
