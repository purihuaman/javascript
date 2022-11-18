const numberIsCapicúa = (number = 0) => {
	if (typeof number !== 'number' || number <= 10)
		return console.log('Ingrese un número de dos dígitos a más!.');

	const newNumber = Number(String(number).split('').reverse().join(''));

	console.log(newNumber === number ? 'SI, es capicúa' : 'NO, es capicúa');
};

export const ejercicioDiez = () => numberIsCapicúa(101);

/* TODO:
	10) Programa una función que reciba un número y evalué si es capicúa o no (que se lee igual en un sentido que en otro), pe. mifuncion(2002) develvera true.
*/
