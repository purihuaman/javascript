import { getAllFetch } from './read';
import { getFetchHttp } from './getFetchHttp';
import { showMessage } from './showMessage';

const API_URL = 'http://localhost:5000/saints';

const crudFetch = () => {
	getAllFetch();

	const formSaints = document.getElementById('saints');
	if (!formSaints) return;

	formSaints.addEventListener('submit', (ev) => {
		ev.preventDefault();

		const data = Object.fromEntries(new FormData(formSaints));
		const options = {
			method: 'POST',
			body: JSON.stringify(data),
		};

		if (data.id === '') {
			// POST
			getFetchHttp(API_URL, options);
			getAllFetch();

			showMessage('¡Agregado correctamente!', 'green-100', 'text-green-800');
			formSaints.name.focus();
			formSaints.reset();
		} else {
			// PUT
			options.method = 'PUT';

			getFetchHttp(`${API_URL}/${data.id}`, options);
			getAllFetch();
			showMessage('Modificado correctamente!', 'blue-100', 'text-blue-800');
			formSaints.name.focus();
			formSaints.id.value = '';
			formSaints.querySelector('[type="submit"]').value = 'Send';
		}
		formSaints.reset();
	});
};

addEventListener('click', (ev) => {
	const formSaints = document.getElementById('saints');
	const options = {
		method: 'get',
		headers: { 'Content-Type': 'application/json' },
	};

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
			options.method = 'DELETE';

			getFetchHttp(`${API_URL}/${rowId}`, options);
			getAllFetch();
			showMessage('Eliminado correctamente!', 'red-200', 'text-red-500');
			target.parentNode.parentNode.remove();
		}
	}
});

export default crudFetch;
