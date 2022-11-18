const objThis = () => {
	const person = {
		name: 'contexto objeto 1',
		imprimir: function () {
			console.log(this.name);
		},
	};

	person.imprimir();

	const persona2 = {
		nombre: 'contexto objeto 2',
		imprimir: function () {
			console.log(this.nombre);
		},
	};

	persona2.imprimir();

	const persona3 = {
		nombre: 'contexto objeto 3',
		imprimir: function () {
			console.log(this.nombre);
		},
	};

	persona3.imprimir();
};

export const temeThis = () => objThis();
