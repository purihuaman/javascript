const temp = () => {
	// setTimeout(() => {
	// 	console.log('Set TimeOut');
	// }, 2000);

	// setInterval(() => {
	// 	console.log('Ejecución de interval');
	// }, 1000);

	const timeID = setInterval(() => {
		console.log(new Date().toLocaleTimeString());
	}, 1000);

	clearInterval(timeID);
};

export const temporizador = () => temp();
