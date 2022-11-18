function suma() {
	return 2 + 2;
}

const resultadoSuma = suma();

function saludar(nombre = 'Anonimous', edad = 0) {
	return `Hola, soy ${nombre}, tengo ${edad} años.`;
}

const tipoFuncion = () => {
	console.log('Uno');
	console.log('Dos');

	console.log(resultadoSuma);
	console.log('Tres');
	console.log(saludar('Pedro', 23));

	funcionDeclarada();
	fExpresada();
};

/* NOTE:-> Funciones declaradas VS funciones expresadas */
function funcionDeclarada() {
	console.log('Esta es una funcion declarada');
}

const fExpresada = function () {
	console.log('Soy una funcion expresada');
};

export const funciones = () => tipoFuncion();
