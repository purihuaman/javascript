const proxie = () => {
	const persona = {
		name: '',
		email: '',
		age: 0,
	};

	const manejador = {
		Set(obj, prop, value) {
			if (Object.keys(obj).indexOf(prop) === -1) {
				return console.error(
					`La propiedad ${prop} no existe en el objeto persona`
				);
			}

			if (
				(prop === 'name' || prop === 'age') &&
				!/^[A-Za-zÑñ\s]+$/g.test(value)
			) {
				return console.log(`La propiedad ${prop} solo acepta letras`);
			}

			obj[prop] = value;
		},
	};

	const purii = new Proxy(persona, manejador);
	purii.name = 'P0_urii';
	purii.email = 'purii@gmail.com';
	purii.age = 23;
	purii.twitter = '@puriihuaman';

	console.log(purii);
	console.log(persona);
};

export const proxies = () => proxie();
