const objects = () => {
	const user = {
		id: 8,
		name: 'Pedro',
		lastname: 'Purihuaman',
		isDeveloper: true,
		favorite_books: ['El método', 'Él código de la manifestacón'],
		'4-game': [1, 3, 4],
	};

	const movies = [
		{ title: 'Lo que el viento se llevó', year: 1939 },
		{ title: 'Titanic', year: 1997 },
		{ title: 'Moana', year: 2016 },
		{ title: 'El efecto mariposa', year: 2004 },
		{ title: 'TED', year: 2012 },
	];

	// Copiando objeto
	// const user2 = { ...user };
	const user2 = JSON.parse(JSON.stringify(user));

	const propsDev = 'isDeveloper';

	console.log(user);
	console.log(user.name);
	console.log(user['4-game']);
	console.log(user[propsDev]);

	user2.lastname = 'Purihuaman Purihuaman';
	console.log(user2);
	console.log(user.lastname);

	//
	console.log(movies);
	// Ordenar objetos -> .sort()
	const orderMovies = movies.sort((a, b) => a.year - b.year);
	console.log(orderMovies);
};

export { objects };
