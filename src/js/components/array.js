function tipoArray() {
	const a = [];
	const b = [1, true, 'Hello', [1, 2, 3]];
	const c = Array.of(0, 2, 3, 10, 'Hello', 'Wolrd');
	const d = Array(20).fill('Hello');
	const colores = ['Red', 'Green', 'Blue'];

	console.log(a);
	console.log(b[2]);
	console.log(b[0]);
	console.log(b[3][2]);
	console.log(c);
	console.log(d);

	colores.push('Black');
	colores.pop();
	colores.unshift('White');
	colores.shift();
	console.log(colores);

	colores.forEach((color, key) => {
		console.log(key, `${color}`);
	});
}

export const arrays = () => tipoArray();
