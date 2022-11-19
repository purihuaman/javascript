const stringMethods = () => {
	// Longitud de un string
	let str = 'Hola soy un string';
	console.log(str.length);

	// Obtener partes de cadenas de caracteres
	// slice() - substring() - substr()

	console.log(str.slice(0, 8));
	console.log(str.substring(0, 8));
	console.log(str.substr(5, 8));

	// Reemplazar una parte del texto con método y expresiones regulares
	let strLarge =
		'Algún día descifrare las misterios de la vida, y encontraré que todo los caminos y decisiones que tome en un momento  determinado fueron los indicados, por ahora nada tiene sentido, sin embargo, no es una tragedia, es un misterio que descubrir.';
	console.log(strLarge.replace('vida', 'MUERTE'));
	console.log(strLarge.replace(/y/g, 'VIDA'));

	// Repetir el texto el número que lo indiquen
	console.log(str.repeat(8));

	// Obtener el caracter que hay en cierta posición
	console.log(str.charAt(2));
	console.log(str[10]);

	// Convierte en array
	console.log(str.split());

	// Obtener la posición deun palabra dentro de un texto
	console.log(str.indexOf('soy')); // Busca en todo
	console.log(str.indexOf('n', 11)); // Desde la pos 11 busca
	console.log(str.lastIndexOf('n')); // Busca en todo la última letra

	// Devuelve true|false si incluye la palabra "soy"
	console.log(str.includes('soy'));

	let javascript =
		'Estoy reeaprendiendo javascript desde cero, con el curso javascript desde cero de OpenBootcamp. Javascript es muy interesante.';

	// Usando expresiones regulares y metodos de busqueda
	// match -> Devuelve un array con los resultados encontrados
	console.log(javascript.match(/javascript/g));
	console.log(javascript.match(/cero/g));

	// Saber si un texto empieza con una palabra indicada
	console.log(javascript.startsWith('javascript'));
	console.log(javascript.startsWith('Estoy'));

	// Saber si un texto termna con una palabra indicada
	console.log(javascript.endsWith('OpenBootcamp'));
	console.log(javascript.endsWith('interesante.'));
};

export default stringMethods;
