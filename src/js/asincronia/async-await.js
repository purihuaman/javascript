const async = () => {
	function square(value) {
		if (typeof value !== 'number') {
			// eslint-disable-next-line prefer-promise-reject-errors
			return Promise.reject(`No es un número`);
		}

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ value, result: value * value });
			}, 0 | Math.ceil(Math.random() * 1000));
		});
	}

	async function squareAsync() {
		try {
			let result = await square(0);
			console.log(result);

			result = await square(1);
			console.log(result);

			result = await square(2);
			console.log(result);

			result = await square(3);
			console.log(result);

			result = await square(4);
			console.log(result);

			result = await square(5);
			console.log(result);
		} catch (ex) {
			console.log(ex);
		}
	}

	squareAsync();
};

export const asyncAwait = () => async();
