/* NOTE:-> if {} - else {} */

const condiconal = () => {
	console.log('--- CONDICIONAL IF ---');
	const edad = 18;

	if (edad > 17) {
		console.log('Mayor de edad');
	} else {
		console.log('Menor de edad');
	}

	console.log('--- OPERADOR TENERARIO ---');
	console.log(edad, edad >= 18 ? ': Mayor de edad' : ': Menor de edad');

	console.log('--- CONDICIONAL IF ELSE ---');

	const hora = 0;

	if (hora >= 19) console.log('Buenas noches');
	else if (hora >= 12) console.log('Buenas tardes');
	else if (hora >= 6) console.log('Buenos días');
	else console.log('Dejame dormir');

	console.log('--- SWITCH CASE ---');

	const dia = 20;

	switch (dia) {
		case 0:
			console.log(dia, 'Domingo');
			break;
		case 1:
			console.log(dia, 'Lunes');
			break;
		case 2:
			console.log(dia, 'Martes');
			break;
		case 3:
			console.log(dia, 'Miercoles');
			break;
		case 4:
			console.log(dia, 'Jueves');
			break;
		case 5:
			console.log(dia, 'Viernes');
			break;
		case 6:
			console.log(dia, 'Sábado');
			break;

		default:
			console.log(dia, 'Ingrese un día existente');
			break;
	}
};

export const condiconales = () => condiconal();
