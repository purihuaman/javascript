export class Product {
	#uid;
	#name;
	#price;
	#year;

	constructor(name, price, year) {
		this.#uid = `${Date.now()}`;
		this.#name = name;
		this.#price = price;
		this.#year = year;
	}

	get getUid() {
		return this.#uid;
	}

	get getName() {
		return this.#name;
	}

	get getPrice() {
		return this.#price;
	}

	get getYear() {
		return this.#year;
	}
}
