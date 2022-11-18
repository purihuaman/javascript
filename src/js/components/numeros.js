const tiposNumeros = () => {
	let a = 2;
	let b = new Number();
	let c = 8.18;
	let edad = '5.1';

	console.log({ a, b });
	console.log(c.toFixed(1));
	console.log(c.toFixed(5));
	console.log(parseInt(c));
	console.log(parseFloat(c));
	console.log(parseInt(edad));
	console.log(parseFloat(edad) + 2);
	console.log(a + parseInt(edad));
};

export const numeros = () => tiposNumeros();
