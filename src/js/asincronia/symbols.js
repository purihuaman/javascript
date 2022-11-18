class User {
	constructor(name) {
		this.id = Symbol(Date.now());
		this.name = name;
	}
}

const symbol = () => {
	const id = Symbol('id2');
	const id2 = Symbol('id2');

	console.log(id === id2);
	console.log(typeof id);
	console.log(typeof id2);

	const pedro = new User('Pedro');
	const puri = new User('Pedro');

	console.log(pedro.id === puri.id);
	console.log(pedro);
	console.log(puri);
};

export const symbols = () => symbol();
