const convertingDegrees = (amount = 0, discount = 0) => {
	if (typeof amount !== 'number' || amount <= 0)
		return console.log('Ingrese una monto positivo mayor a cero!.');
	if (typeof discount !== 'number' || discount < 0)
		return console.log('Ingrese un valor numerico positivo!.');

	const percentageDiscount = discount / 100;
	const total = Math.floor(amount - amount * percentageDiscount);

	console.log(`${amount} - ${discount}% = $${total}`);
};

export const ejercicioDieciseis = () => convertingDegrees(1000, 25);

/* TODO:
	16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/
