const typeNumber = () => {
	let n1 = 0.1;
	let n2 = 0.2;

	console.log(n1 + n2);
	console.log(Math.round(n1 + n2));
	console.log(Math.floor(n1 + n2));
	console.log(Math.ceil(n1 + n2));

	// TRUCO para obtener valores "reales"
	console.log(Math.round((n1 + n2) * 100) / 100);

	// Redondeo de números decimales
	let x = 3.3;
	let y = x * 3;

	console.log(y);
	console.log(y.toFixed(2)); // Devuelve el resultado con 2 decimales indicados
	console.log(y.toPrecision(2));
	console.log(y.toPrecision(3));

	// Methods
	let num = 8;
	console.log(num.valueOf());

	// NaN -> Not a Number  - Infinity
	let n = Number('hello');
	console.log(n);
	console.log(isNaN(n));
	console.log(isNaN(num));

	// Devuelve infinity cuando se divide entre (0, null)

	// Números hexadecimales (base 16)
	let numberHex = '0x3a5b7';
	console.log(numberHex);
	console.log(parseInt(numberHex, 16));
	console.log(parseInt(numberHex, 8));

	// Números maximos o minimos
	console.log(Number.EPSILON);
	console.log(Number.MAX_VALUE);
	console.log(Number.MIN_VALUE);
	console.log(Number.POSITIVE_INFINITY);
};

export default typeNumber;
