let shoppingList = [];

const shoppingCart = () => {
	const listCourses = document.getElementById('list-courses');
	const cart = document.getElementById('cart');

	const btnDeleteCartAll = document.getElementById('delete-cart-all');

	if (!listCourses || !cart || !btnDeleteCartAll) return;

	// Muestra la lista de curso
	showCourses(courses, listCourses);

	loadingEvent(listCourses, cart, btnDeleteCartAll);
};

const loadingEvent = (listCourses, cart, btnDeleteCartAll) => {
	const listCart = document.querySelector('#list-cart tbody');
	listCourses.addEventListener('click', addCourse);

	// Elimina cursos del carrito
	cart.addEventListener('click', deleteCourse);

	// Vaciar el carrito
	btnDeleteCartAll.addEventListener('click', (ev) => {
		shoppingList = [];
		clearHtml(listCart);
	});
};

const addCourse = (ev) => {
	ev.preventDefault();

	if (ev.target.dataset.uid === 'adding') {
		const selectedCourse = ev.target.parentElement.parentElement;
		readDataCourse(selectedCourse);
	}
};

// Leyendo data del curso
const readDataCourse = (course) => {
	if (!shoppingList) return;

	const infoCourse = {
		uid: course.querySelector('[data-uid]').id,
		banner: course.querySelector('img').src,
		title: course.querySelector('h4').textContent,
		price: course.querySelector('[data-price] span').textContent,
		amount: 1,
	};

	// Verifica si el el elemento ya existe
	const exists = shoppingList.some((el) => el.uid === infoCourse.uid);

	if (exists) {
		// Actualización de cantidad
		const courses = shoppingList.map((el) => {
			if (el.uid === infoCourse.uid) {
				el.amount++;
				return el; // retorna objeto actualizado
			} else return el; // retorna el objeto no actulizados
		});

		shoppingList = [...courses];
	} else {
		// Agregando cursos
		shoppingList = [...shoppingList, infoCourse];
	}
	// console.log(shoppingList);
	showShoppingList();
};

// Elimina un curso del carrito
const deleteCourse = (ev) => {
	ev.preventDefault();
	if (!ev.target.dataset.id) return;

	const courseId = ev.target.getAttribute('data-id');

	// Elimina del arreglo de shoppingList por el data-id
	shoppingList = shoppingList.filter((el) => el.uid !== courseId);
	showShoppingList();
};

// Muestra el carrito con los cursos
const showShoppingList = () => {
	const listCart = document.querySelector('#list-cart tbody');
	const fragment = document.createDocumentFragment();

	if (!shoppingList || !listCart || !fragment) return;

	clearHtml(listCart);

	shoppingList.forEach((el) => {
		const row = document.createElement('tr');
		const { uid, banner, title, price, amount } = el;

		row.innerHTML = `
			<td><img src='${banner}' alt='${title}' class='img' /></td>
			<td>${title}</td>
			<td>${price}</td>
			<td>${amount}</td>
			<td><a href='#' class='btn btn-danger' data-id='${uid}'>X</a></td>
		`;

		fragment.append(row);
	});

	listCart.append(fragment);
};

// Elimina los cursos duplicados
const clearHtml = (listCart) => {
	/* FIXME: Forma lenta	*/

	// listCart.textContent = '';
	// listCart.innerHTML = '';

	/* FIXME: Forma rapida y mejor	*/

	while (listCart.firstChild) {
		listCart.removeChild(listCart.firstChild);
	}
};

// Muestra la lista de curso
const showCourses = (courses, listCourses) => {
	const templateCourse = document.getElementById('template-course').content;

	const fragment = document.createDocumentFragment();

	if (!listCourses || !courses || !fragment || !templateCourse) return;

	courses.forEach((el) => {
		const cloneTemplate = templateCourse.cloneNode(true);

		cloneTemplate.querySelector('[data-banner]').src = el.banner;
		cloneTemplate.querySelector('[data-title]').textContent = el.title;
		cloneTemplate.querySelector('[data-teacher]').textContent = el.teacher;
		cloneTemplate.querySelector('[data-start]').src = el.start;
		cloneTemplate.querySelector(
			'[data-price]'
		).innerHtml = `${el.price} <span>${el.promotion}</span>`;
		cloneTemplate.querySelector('[data-uid]').id = el.uid;

		fragment.append(cloneTemplate);
	});

	listCourses.append(fragment);
};

const courses = [
	{
		uid: 1,
		banner: '/assets/img/curso1.jpg',
		title: 'HTML5, CSS3, JavaScript para principiantes',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 2,
		banner: '/assets/img/curso2.jpg',
		title: 'Curso de comida vegetariana',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 3,
		banner: '/assets/img/curso3.jpg',
		title: 'Guitarra para principiantes',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 4,
		banner: '/assets/img/curso4.jpg',
		title: 'Huerto en casa',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 5,
		banner: '/assets/img/curso5.jpg',
		title: 'Decoración con productos de tu hogar',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 6,
		banner: '/assets/img/curso1.jpg',
		title: 'Diseño Web para principiantes',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 7,
		banner: '/assets/img/curso2.jpg',
		title: 'Comidda Mexicana para principiantes',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 8,
		banner: '/assets/img/curso3.jpg',
		title: 'Estudio Musical en tu casa',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 9,
		banner: '/assets/img/curso4.jpg',
		title: 'Cosecha tu propias verduras',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 10,
		banner: '/assets/img/curso5.jpg',
		title: 'Prepara galletas caseras',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 11,
		banner: '/assets/img/curso1.jpg',
		title: 'JavaScript Moderno con ES6',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
	{
		uid: 12,
		banner: '/assets/img/curso2.jpg',
		title: '100 Recetas de comida natural',
		teacher: 'Juan Pedro',
		start: '/assets/img/estrellas.png',
		price: 200,
		promotion: 15,
	},
];

export default shoppingCart;
