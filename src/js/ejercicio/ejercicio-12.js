const isPrimo = (number = 0) => {
	if (typeof number !== 'number' || number <= 1)
		return console.log('Ingrese un número mayor a uno!.');

	let divible = false;

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			divible = true;
			break;
		}
	}

	console.log(divible ? ' NO, es primo' : 'SI, es primo');
};

export const ejercicioDoce = () => isPrimo(2);

/* TODO:
	12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
