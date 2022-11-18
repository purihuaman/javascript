const ciclo = () => {
	let contador = 1;
	const vocales = ['a', 'e', 'i', 'o', 'u'];

	console.log('--- WHILE ---');

	while (contador <= 10) {
		console.log(contador);
		contador++;
	}

	contador = 0;
	while (contador < vocales.length) {
		console.log(vocales[contador]);
		contador++;
	}

	console.log('--- DO WHILE ---');

	contador = 4;
	do {
		console.log(vocales[contador]);
		contador++;
	} while (contador < vocales.length);
};

export const ciclos = () => ciclo();
