const shoppingList = ['Arroz', 'Azucar', 'Huevos', 'Yogurt', 'Pan'];
shoppingList.push('Aceite de Girasol');
shoppingList.pop();
console.log({ shoppingList });

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const favoriteMovies = [
	{
		title: 'Rápidos y Furiosos 9',
		director: 'Justin Lin',
		date: new Date(2021, 5, 25),
	},
	{
		title: 'Thor: Ragnarok',
		director: 'Taika Waititi',
		date: new Date(2017, 10, 3),
	},
	{
		title: 'Megalodón',
		director: 'Jon Turteltaub',
		date: new Date(2018, 7, 16),
	},
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const filterMovies = favoriteMovies.filter(
	(movie) => movie.date > new Date(2010, 0, 1)
);

console.log(filterMovies);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directors = favoriteMovies.map((movie) => movie.director);
console.log(directors);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const movieTitles = favoriteMovies.map((movie) => movie.title);
console.log(movieTitles);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directorsAndMovieTitles = directors.concat(movieTitles);
console.log(directorsAndMovieTitles);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directorsAndTitles = [...directors, ...movieTitles];
console.log(directorsAndTitles);
