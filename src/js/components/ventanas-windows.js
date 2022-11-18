const ventanas = () => {
	const iamName = prompt('Ingrese su nombre', 'Anonimous');
	const confirm = window.confirm(`¿${iamName}, acepta los terminos?`);

	confirm ? alert('Acepto los terminos') : alert('No acepto los terminos');
};

export const ventanasWindow = () => ventanas();
