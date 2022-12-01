export function promises() {
	myPromise
		.then(() => console.log('Ejecutado de forma CORRECTA'))
		.catch(() => console.log('Se ejecuta cuando da ERROR'))
		.finally(() => console.log('SIEMPRE SE EJECUTA'));
}

const myPromise = new Promise((resolve, reject) => {
	const i = Math.floor(Math.random() * 2);

	if (i !== 0) {
		resolve();
	} else {
		reject();
	}
});
