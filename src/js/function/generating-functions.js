export function generatingFunctions() {
	const generator = generatorId();

	console.log(generator);
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log('Return', generator.return());
}

function* generatorId() {
	let id = 0;

	while (true) {
		id++;

		if (id >= 10) {
			return id;
		}

		yield id;
	}
}
