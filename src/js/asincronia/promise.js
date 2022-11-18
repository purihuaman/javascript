const promise = () => {
	function squarePromise(value) {
		if (typeof value !== 'number') {
			// eslint-disable-next-line prefer-promise-reject-errors
			return Promise.reject(`El valor "${value}" ingresado no es un número`);
		}

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ value, result: value * value });
			}, 0 | (Math.random() * 1000));
		});
	}

	squarePromise(0)
		.then((result) => {
			console.log(result);
			return squarePromise(1);
		})
		.then((result) => {
			console.log(result);

			return squarePromise('2');
		})
		.then((result) => {
			console.log(result);
			return squarePromise(3);
		})
		.then((result) => {
			console.log(result);
			return squarePromise(4);
		})
		.then((result) => {
			console.log(result);
			return squarePromise(5);
		})
		.then((result) => {
			console.log(result);
		})
		.catch((ex) => console.error(ex));
};

export const promises = () => promise();
