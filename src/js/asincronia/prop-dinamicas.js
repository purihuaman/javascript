const propiedadesDinamica = () => {
	const objUsers = {
		[`id_${Math.ceil(Math.random() * 100 + 5)}`]: 'aleatorio',
	};
	const users = ['Fernando', 'Puri', 'Meliza'];

	console.log(objUsers);

	users.forEach((element, index) => {
		objUsers[index] = element;
	});

	console.log(objUsers);
};

export const propiedadesDinamicas = () => propiedadesDinamica();
