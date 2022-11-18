const tipoString = () => {
	let nombre = 'Pedro';
	let apellidos = 'Puri';
	let saludo = new String('Hello world');
	let texto =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae totam explicabo, earum asperiores recusandae corrupti nobis cum hic. Qui temporibus minus voluptate corporis, unde voluptas animi eveniet eius dolorem dolorum.';

	console.log({ nombre, apellidos, saludo });
	console.log(nombre.length);
	console.log(nombre.toUpperCase());
	console.log(nombre.toLowerCase());
	console.log(texto.includes('nobis'));
	console.log(texto.includes('puri'));
	console.log(nombre.split(''));
	console.log(saludo.split(' '));

	let nombreCompleto1 = nombre + ' ' + apellidos;
	let nombreCompleto2 = `${nombre} ${apellidos}`;
	let edad = 22;

	console.log('Usando concatenación:', nombreCompleto1);
	console.log(`Usando template string: ${nombreCompleto2}`);
	console.log(`Tengo ${edad + 1} años`);
};

export const strings = () => tipoString();
