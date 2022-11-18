export class User {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}

	greet() {
		console.log('THIS', this);
		console.log(`Hello I am ${this.name} ${this.lastname}`);
	}
}

export class Programmer extends User {
	constructor(name, lastname, language) {
		super(name, lastname);
		this.language = language;
	}
}
