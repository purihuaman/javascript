const validateEmail = (email = '') => {
	if (typeof email !== 'string' || email.length <= 12)
		return console.log('Ingrese un correo valido!.');

	const regex1 =
		/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

	const regex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.length > 12 && regex.test(email.toLowerCase())) {
		console.log(`${email} valido`);
	} else return console.log(`${email} NO valido`);
};

export const ejercicioVeinte = () => validateEmail('pedropuri98@gmail.com.pe');

/* TODO:
	20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
