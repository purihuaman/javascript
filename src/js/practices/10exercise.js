function myFunction() {
	return true;
}

console.log(myFunction());

const asynchronous = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hola soy una promesa');
	}, 5_000);
});

asynchronous.then((message) => console.log(message));

function* autoPairs() {
	let id = 0;

	while (true) {
		yield (id += 2);
	}
}

const generator = autoPairs();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
