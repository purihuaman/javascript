const iterator = () => {
	// const iterable = [1, 2, 3, 4, 5];
	// const iterable = new Set([1, 2, 3, 4, 5, 6]);
	const iterable = new Map([
		['nombre', 'Puri'],
		['edad', 23],
	]);

	// Accedemos al iterador del iterable
	const iterador = iterable[Symbol.iterator]();

	console.log(iterable);
	console.log(iterador);

	let next = iterador.next();

	while (!next.done) {
		console.log(next.value);

		next = iterador.next();
	}
};

export const iterables = () => iterator();
