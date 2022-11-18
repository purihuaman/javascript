function tipoObjetos() {
	const pedro = {
		nombre: 'Pedro',
		apellido: 'Puri',
		edad: 23,
		hobbies: ['Futbol', 'Ejercicio'],
		soltero: false,
		contacto: {
			email: 'puri@gmail.com',
			twitter: 'purihuamanp@gmail.com',
		},
		saludar: function () {
			console.log(`Hola`);
		},
		nombreCompleto: function () {
			console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
		},
	};

	console.log(pedro);
	console.log(pedro.contacto.email);
	console.log(pedro.hobbies[0]);
	pedro.saludar();
	pedro.nombreCompleto();

	console.log(Object.keys(pedro));
	console.log(Object.values(pedro));
}

export const objetos = () => tipoObjetos();
