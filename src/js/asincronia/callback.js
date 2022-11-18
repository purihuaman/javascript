const callback = () => {
	function squareCB(value, cb) {
		setTimeout(() => {
			cb(value, value * value);
		}, 0 | (Math.random() * 1000));
	}

	squareCB(0, (value, result) => {
		console.log('Inicia callback');
		console.log(`Callback: ${value}, ${result}`);

		squareCB(1, (value, result) => {
			console.log(`Callback: ${value}, ${result}`);

			squareCB(2, (value, result) => {
				console.log(`Callback: ${value}, ${result}`);

				squareCB(3, (value, result) => {
					console.log(`Callback: ${value}, ${result}`);

					squareCB(4, (value, result) => {
						console.log(`Callback: ${value}, ${result}`);

						squareCB(5, (value, result) => {
							console.log(`Callback: ${value}, ${result}`);
						});
					});
				});
			});
		});
	});

	/* NOTE:-> Sincrono bloqueante */
	// (() => {
	// 	console.log('sincrono');
	// 	console.log('Inicio');
	// 	function dos() {
	// 		console.log('Dos');
	// 	}
	// 	function uno() {
	// 		console.log('Uno');
	// 		dos();
	// 		console.log('Tres');
	// 	}
	// 	uno();
	// 	console.log('Fin');
	// })();
	/* NOTE:-> Asincrono no bloqueante */
	// (() => {
	// 	console.log('Asincrono');
	// 	console.log('Inicio');
	// 	function dos() {
	// 		setTimeout(() => {
	// 			console.log('Dos');
	// 		}, 1000);
	// 	}
	// 	function uno() {
	// 		setTimeout(() => {
	// 			console.log('Uno');
	// 		}, 0);
	// 		dos();
	// 		console.log('Tres');
	// 	}
	// 	uno();
	// 	console.log('Fin');
	// })();
};

export const callbacks = () => callback();
