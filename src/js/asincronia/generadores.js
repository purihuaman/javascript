function* iterables() {
	yield 'hello';
	console.log('Hello consola');
	yield 'hello world';
	console.log('Siguiente instrución');
	yield 'hello js';
}

function square(value) {
	setTimeout(() => {
		console.log({
			value,
			result: value * value,
		});
	}, 2000);
}

function* generadorSquare() {
	console.log('Inicia generado');
	yield square(1);
	yield square(2);
	yield square(3);
	yield square(4);
	yield square(5);
	console.log('Termina generado');
}

const generador = () => {
	const iterador = iterables();

	// console.log(iterador.next());
	// console.log(iterador.next());
	// console.log(iterador.next());

	for (const iterator of iterador) {
		console.log(iterator);
	}
	const arr = [...iterables()];
	console.log(arr);

	const gsquare = generadorSquare();

	for (const y of gsquare) {
		console.log(y);
	}
};

export const generadores = () => generador();
