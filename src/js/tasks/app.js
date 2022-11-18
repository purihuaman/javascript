class Task {
	#uid;
	#todo;

	constructor(todo) {
		this.#uid = `${Date.now()}`;
		this.#todo = todo;
	}

	get getUid() {
		return this.#uid;
	}

	get getTodo() {
		return this.#todo;
	}

	// static showTodos() {
	// 	const newTodos = [...todos];

	// 	console.log(newTodos);
	// 	localStorage.setItem('todos', JSON.stringify(newTodos));

	// 	paintTodo.innerHTML = '';
	// 	const fragment = document.createDocumentFragment();

	// 	todos.forEach((element) => {
	// 		const cloneTemplate = templateTodo.cloneNode(true);

	// 		cloneTemplate.querySelector('[data-task]').textContent = element.getTodo;
	// 		cloneTemplate.querySelector('[data-btn]').dataset.uid = element.getUid;
	// 		fragment.append(cloneTemplate);
	// 	});

	// 	paintTodo.append(fragment);
	// }
}
let todos = [];

const paintTodo = document.getElementById('paint-todo');
const formTodo = document.getElementById('form-todo');
const templateTodo = document.getElementById('template-todo').content;
const alert = document.getElementById('alert');

const createTodo = (task) => {
	todos.push(task);
};

const showTodos = () => {
	localStorage.setItem('todo', JSON.stringify(todos));
	paintTodo.innerHTML = '';

	const fragment = document.createDocumentFragment();

	todos.forEach((element) => {
		console.log(element);
		const cloneTemplate = templateTodo.cloneNode(true);

		cloneTemplate.querySelector('[data-task]').textContent = element.getTodo;
		cloneTemplate.querySelector('[data-btn]').dataset.uid = element.getUid;
		fragment.append(cloneTemplate);
	});

	paintTodo.append(fragment);
};

document.addEventListener('click', (ev) => {
	if (ev.target.matches('.btn-danger') || ev.target.dataset.uid) {
		todos = todos.filter((element) => element.getUid !== ev.target.dataset.uid);

		showTodos();
	}
});

const tasksList = () => {
	formTodo.addEventListener('submit', (ev) => {
		ev.preventDefault();
		alert.classList.add('d-none');

		const data = new FormData(formTodo);
		const [todo] = [...data.values()];

		if (!todo.trim()) {
			alert.classList.remove('d-none');
		}

		const task = new Task(todo);

		createTodo(task);

		showTodos();
	});

	if (localStorage.getItem('todo')) {
		todos = JSON.parse(localStorage.getItem('todos'));
		showTodos();
	}
};

export const todoList = () => tasksList();
