const tipoBoolean = () => {
	console.log(Boolean(''));
	console.log(Boolean(0));
	console.log(Boolean(undefined));
	console.log(Boolean(NaN));
	console.log(Boolean(null));

	/* NOTE:-> Indica que no se le ha inicializado una variable y que el valor está ausente */
	let indefinida;
	console.log(indefinida);

	/* NOTE:-> Null es un valor especial que indica la ausencia de un valor */
	let nula = null;
	console.log(nula);

	/* NOTE:-> NaN (Not a Number) */
	let noEsUnNumero = 'hola' * 3;

	console.log(noEsUnNumero);

	if (Number.isNaN(noEsUnNumero)) {
		console.log('No es un número', noEsUnNumero);
	}
};

export const boolean = () => tipoBoolean();
