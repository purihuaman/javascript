export function functions() {
	greeting('Pedro');
	dismiss('Alison');
	toPrint(1_000, 2_000, 3_000, 4_000);
	message();
}

function greeting(name) {
	console.log(`Hola ${name}`);
}

function dismiss(name) {
	console.log(`Adiós ${name}`);
}

function toPrint(...params) {
	console.log(params);
	console.log(params.reduce((acu, el) => acu + el));
	console.log(typeof params);
}

const message = () => {
	console.log('Hello world');
};
