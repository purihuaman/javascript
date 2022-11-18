const numberRandom = (numberMin = 0, numberMax = 0) => {
	if (typeof numberMin !== 'number' || numberMin < 500)
		return console.log('Ingrese un número mayor a 500!.');

	if (typeof numberMax !== 'number' || numberMax > 600)
		return console.log('Ingrese un número menor a 600!.');

	console.log(Math.floor(Math.random() * (numberMax - numberMin) + numberMin));
};

export const ejercicioNueve = () => numberRandom(500, 600);

/* TODO:
	9) Programa una función que obtenga un número aleatorio entre 501 y 600
*/
