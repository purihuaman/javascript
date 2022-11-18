class Book {
	#title;
	#author;
	#price;
	#stock;
	#code;

	constructor(title, author, price, stock, code) {
		this.#title = title;
		this.#author = author;
		this.#price = price;
		this.#stock = stock;
		this.#code = code;
	}

	getInfo() {
		return `Código: ${this.#code}, Título: ${this.#title}, Autor: ${
			this.#author
		}, Precio: S/. ${this.#price}, Stock: ${this.#stock}`;
	}

	get getTitle() {
		return this.#title;
	}

	// eslint-disable-next-line accessor-pairs
	set setTitle(newTitle) {
		this.#title = newTitle;
	}
}

class Comic extends Book {
	#ilustradores;
	#volumen;

	constructor(title, author, price, stock, code, ilustradores, volumen) {
		super(title, author, price, stock, code);
		this.#ilustradores = ilustradores;
		this.#volumen = volumen;
	}

	getInfo() {
		return `${super.getInfo()}, Ilustradores: ${
			this.#ilustradores.length
		}, Volumen: ${this.#volumen}`;
	}
}

const book1 = new Book('Caballos desbocados', 'Yukio M', 259, 100, 1);
const comic = new Comic(
	'Batman',
	'Author',
	55,
	50,
	1,
	['ilus1', 'ilus2'],
	'Vol 2'
);

const opp = () => {
	console.log(book1);
	console.log(comic);

	// console.log(book1.getInfo());
	console.log(comic.getInfo());
};

export const poo = () => opp();
