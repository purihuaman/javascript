const factorialNumber = (number = 0) => {
	if (typeof number !== 'number' || number <= 0)
		return console.log('Ingrese un número positivo y mayor a cero!.');

	let current = 1;

	for (let i = 1; i <= number; i++) {
		current = current * i;
	}
	console.log(current);
};

export const ejercicioOnce = () => factorialNumber(120);

/* TODO:
	11) Programa una funcion que calcule el factorial de un número (El factorial de un entero positvo n, se define como el producto de todos los números enteros positivos desde 1 hasta n). pe. miFuncion(5) devolvera 120
*/
