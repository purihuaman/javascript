const breakContinue = () => {
	const numeros = [1, 2, 3, 4, 5, 6, 9, 10];

	for (let i = 0; i < numeros.length; i++) {
		// if (numeros[i] % 2 === 0) {
		// 	console.log(numeros[i]);
		// }

		// if (numeros[i] === 5) break;
		// if (numeros[i] === 5) continue;
		if (numeros[i] % 2 === 1) continue;

		console.log(numeros[i]);
	}
};

export const continueBreak = () => breakContinue();
