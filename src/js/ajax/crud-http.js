import { getAllHttp } from './read';
import getData from './getHttp';

const API_URL = 'http://localhost:5000/saints';

const crudHttp = () => {
	getAllHttp();

	const formSaints = document.getElementById('saints');

	if (!formSaints) return;

	formSaints.addEventListener('submit', (ev) => {
		ev.preventDefault();

		const data = Object.fromEntries(new FormData(formSaints));

		if (data.id === '') {
			// POST
			getData({
				endpoint: API_URL,
				method: 'POST',
				success: (resp) => getAllHttp(),
				error: () => console.log('Mensaje de error en el form'),
				data,
			});
			formSaints.name.focus();
			formSaints.reset();
		} else {
			// PUT
			formSaints.name.focus();

			getData({
				endpoint: `${API_URL}/${data.id}`,
				method: 'PUT',
				success: (resp) => getAllHttp(),
				error: () => console.log('Mensaje de error en el form'),
				data,
			});
			formSaints.id.value = '';
			formSaints.querySelector('[type="submit"]').value = 'Send';
		}
		formSaints.reset();
	});
};

addEventListener('click', (ev) => {
	const formSaints = document.getElementById('saints');

	if (ev.target.matches('[data-edit]')) {
		formSaints.querySelector('h2').textContent = 'Editar Santo';
		formSaints.id.value = ev.target.dataset.edit;
		formSaints.name.value = ev.target.dataset.name;
		formSaints.constelation.value = ev.target.dataset.constelation;

		formSaints.querySelector('[type="submit"]').value = 'Save';
	}

	if (ev.target.matches('[data-delete]')) {
		const target = ev.target;
		const btnId = target.dataset.delete;
		const rowId = target.parentNode.parentNode.dataset.id;

		if (btnId !== rowId) return;

		if (confirm('¿Desea eliminar el resitro?')) {
			// DELETE
			getData({
				endpoint: `${API_URL}/${target.dataset.delete}`,
				method: 'DELETE',
				success: (resp) => {},
				error: () => console.log('Mensaje de error en el form'),
			});
			target.parentNode.parentNode.remove();
		}
	}
});

export default crudHttp;
