import loading from '../dom/loading';

const sendFormPhp = () => {
	const formSubmit = document.getElementById('form-submit');

	if (!formSubmit) return;

	contactFormValidations(formSubmit);
};

const contactFormValidations = (elementForm) => {
	const loadingMessage = elementForm.querySelector('[data-message]');

	if (!elementForm || !loadingMessage) return;

	const inputsForm = [...elementForm.querySelectorAll('.form__input')];

	inputsForm.forEach((element) => {
		const span = document.createElement('span');
		span.id = element.name;
		span.textContent = element.title;

		span.classList.add('alert-valid', 'error');
		span.insertAdjacentElement('afterend', span);
	});

	addEventListener('keyup', (ev) => {
		if (ev.target.matches('.form__input [required]')) {
			const input = ev.target;
			const pattern = input.pattern || input.dataset.pattern;

			if (pattern && input.value !== '') {
				const regex = new RegExp(pattern);

				return !regex.exec(input.value)
					? document.getElementById(input.name).classList.add('is-active')
					: document.getElementById(input.name).classList.remove('is-active');
			}
		}
	});

	elementForm.addEventListener('submit', (ev) => {
		ev.preventDefault();
		loading(loadingMessage, 'Enviado email');

		fetch('../../php/send-form-php.php', {
			method: 'post',
			body: new FormData(elementForm),
			mode: 'cors',
		})
			.then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
			.then((result) => {
				loadingMessage.innerHTML = `<p>${result.message}</p>`;
			})
			.catch((ex) => {
				const message =
					ex.statusText || 'Ocurrió un error al enviar, intenta nuevamente.';
				loadingMessage.innerHTML = `<p>Error ${ex.status}: ${message}</p>`;
			})
			.finally(() =>
				setTimeout(() => {
					elementForm.reset();

					loadingMessage.removeChild(loadingMessage.querySelector('.loading'));

					loadingMessage.textContent = '';
				}, 3000)
			);
	});
};

export default sendFormPhp;
