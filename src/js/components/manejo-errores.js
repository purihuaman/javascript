const errores = () => {
	try {
		const numero = 'a';
		if (isNaN(numero))
			throw new Error('El caracter ingresado, no es un número');

		console.log(numero * 9);
	} catch (ex) {
		console.log(`Se produjo el siguiente error, ${ex}`);
	} finally {
		console.log('Se ejecuta siempre');
	}
};

export const menejoErrores = () => errores();
