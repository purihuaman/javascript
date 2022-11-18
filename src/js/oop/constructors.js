function Person() {
	this.name = '';
	this.lastname = '';
}

function Programmer() {
	this.language = '';
}

Programmer.prototype = new Person();

console.log(Programmer);

export function mainContructor() {
	const programmer = new Programmer();

	// console.log(programmer);
}
