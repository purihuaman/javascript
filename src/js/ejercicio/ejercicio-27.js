class Movies {
	#id = '';
	#title = '';
	#director = '';
	#releaseYear = 0;
	#country = '';
	#genders = [];
	#qualification = 0;

	constructor({
		id,
		title,
		director,
		releaseYear,
		country,
		genders,
		qualification,
	}) {
		this.#id = id;
		this.#title = title;
		this.#director = director;
		this.#releaseYear = releaseYear;
		this.#country = country;
		this.#genders = genders;
		this.#qualification = qualification;

		this.validateId(this.#id);
		this.validateTitle(this.#title);
		this.validateDirector(this.#director);
		this.validateReleaseYear(this.#releaseYear);
		this.validateCountry(this.#country);
		this.validateGenders(this.#genders);
		this.validateQualification(this.#qualification);
		// this.fileMovie();
	}

	validateString(key, value) {
		if (!value) return console.warn(`${value} "${value}" esta vacío.`);
		if (typeof value !== 'string')
			return console.warn(`${key} "${value}", no es una cadena!.`);

		return true;
	}

	validateLength(key, value, length) {
		if (value.length > length)
			return console.error(
				`${key} "${value}" excede el número de caracteres permitidos (${length})`
			);

		return true;
	}

	validateId(id) {
		const regex = /^([a-z]){2}([0-9]){7}$/;
		if (this.validateString('id', id))
			if (!regex.test(id.toLowerCase()))
				return console.error(
					`IMDB id: "${id}" no es válido, debe contener 9 caracteres, los 2 primeros letras, los 7 restantes números.`
				);
	}

	validateTitle(title) {
		if (this.validateString('title', title))
			this.validateLength('title', title, 100);
	}

	validateDirector(director) {
		if (this.validateString('director', director))
			this.validateLength('director', director, 50);
	}

	validateNumber(releaseYear) {
		if (typeof releaseYear !== 'number' || !releaseYear)
			return console.warn(
				`${releaseYear} no es un número válido o es no es un año valido`
			);
		return true;
	}

	validateReleaseYear(releaseYear) {
		const regex = /^([0-9]){4}$/;

		if (this.validateNumber(releaseYear))
			if (!regex.test(releaseYear))
				return console.error(
					`Año de estreño ${releaseYear} no es válido. Ingrese un año valido`
				);
	}

	validateArray(arrayElements) {
		if (!(arrayElements instanceof Object) || !arrayElements)
			return console.warn(`${arrayElements} no es un array!.`);

		if (arrayElements.length < 0)
			return console.warn(`${arrayElements} esta vácio!.`);

		!arrayElements.some((element) => typeof element !== 'string') ||
			console.error(
				`El array [${arrayElements}] contiene diferentes valores!. Debe contener solo textos`
			);

		return true;
	}

	validateCountry(country) {
		this.validateArray(country);
	}

	validateGenders(elementsGender) {
		if (this.validateArray(elementsGender)) {
			elementsGender.forEach((element) => {
				if (!Movies.getListGenres.includes(element))
					return console.log(
						`"${element}" no existe en la lista de generos ${Movies.getListGenres}`
					);
			});
		}
	}

	validateQualification(qualification) {
		if (this.validateNumber(qualification))
			if (qualification < 0 || qualification > 10)
				return console.warn(
					`${qualification} no está en el rango de calificación!. Se califica de 0 a 10`
				);
	}

	static get getListGenres() {
		return [
			'Action',
			'Adult',
			'Adventure',
			'Animation',
			'Biography',
			'Comedy',
			'Crime',
			'Documentary',
			'Drama',
			'Family',
			'Fantasy',
			'Film Noir',
			'Game-Show',
			'History',
			'Horror',
			'Musical',
			'Music',
			'Mystery',
			'News',
			'Reality-TV',
			'Romance',
			'Sci-Fi',
			'Short',
			'Sport',
			'Talk-Show',
			'Thriller',
			'War',
			'Western',
		];
	}

	static acceptedGenres() {
		return console.info(
			`Los géneros aceptados son: ${Movies.getListGenres.join(', ')}`
		);
	}

	fileMovie() {
		console.log(
			`FICHA TÉCNICA:\nTítulo: "${this.#title}"\nDirector: "${
				this.#director
			}"\nAño: "${this.#releaseYear}"\nPais: "${this.#country.join(
				' - '
			)}"\nGéneros: "${this.#genders.join(', ')}"\nCalificación: "${
				this.#qualification
			}"\nID: "${this.#id}"`
		);
	}

	static infoMovies(movie) {
		movie.fileMovie();
	}
}

const createMovie = () => {
	const newMovie = new Movies({
		id: 'tt8888888',
		title: 'Dragon Ball Z',
		director: 'Goku',
		releaseYear: 1998,
		country: ['peru', 'argentina'],
		genders: ['Action', 'Crime'],
		qualification: 10,
	});

	const myMovies = [
		{
			id: 'tt8888888',
			title: 'Dragon Ball Z',
			director: 'Goku',
			releaseYear: 1998,
			country: ['peru', 'argentina'],
			genders: ['Action', 'Crime'],
			qualification: 10,
		},
		{
			id: 'tt6666666',
			title: 'Caballeros de Zodiaco',
			director: 'Goku',
			releaseYear: 2008,
			country: ['China', 'Japón'],
			genders: ['Action', 'Crime'],
			qualification: 8.1,
		},
		{
			id: 'tt3333333',
			title: 'Rocky Balboa',
			director: 'Sylvester Stallone',
			releaseYear: 2006,
			country: ['USA'],
			genders: ['Action', 'Drama', 'Sport'],
			qualification: 7.1,
		},
	];

	myMovies.forEach((element) => {
		const movie = new Movies(element);
		Movies.infoMovies(movie);
	});
};

export const moviesIMBD = () => createMovie();

/* TODO:
  27) Programa una clase llamada Pelicula.

  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha técnica 
      de cada película.

  Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
