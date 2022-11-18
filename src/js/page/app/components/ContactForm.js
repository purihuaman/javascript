import { addLoading, removeLoading } from './Router';

export default function ContactForm() {
	const doc = document;
	const patternName = '^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$';
	const patternEmail =
		'^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$';

	const formContainer = doc.createElement('div');
	const form = doc.createElement('form');
	const fieldTextArea = doc.createElement('div');
	const fieldBtn = doc.createElement('div');
	const legend = doc.createElement('legend');
	const textarea = doc.createElement('textarea');
	const inputButton = doc.createElement('input');

	legend.textContent = 'Envíanos tus comentarios';
	textarea.name = 'comments';
	textarea.title = 'Tu comentario no debe exceder los 255 caracteres';
	textarea.dataset.pattern = '^.{1,255}$';
	textarea.required = true;
	textarea.placeholder = 'Escribe tu comentario';

	inputButton.type = 'submit';
	inputButton.value = 'Enviar';

	form.id = 'form';

	formContainer.classList.add('form__container');
	form.classList.add('form');
	fieldTextArea.classList.add('form__field');
	fieldBtn.classList.add('form__field');

	inputButton.classList.add('btn', 'btn-primary');

	form.appendChild(legend);
	fieldTextArea.appendChild(textarea);
	fieldBtn.appendChild(inputButton);

	form.append(
		InputElement(
			'text',
			'name',
			'Nombre sólo acepta letras y espacios en blanco',
			true,
			'Escribe tu nombre',
			patternName
		),
		InputElement(
			'email',
			'email',
			'Email incorrecto',
			true,
			'Escribe tu email',
			patternEmail
		),
		InputElement(
			'text',
			'subject',
			'El asunto es requerido',
			true,
			'Asunto a tratar'
		),
		fieldTextArea,
		fieldBtn,
		ResponseContact()
	);

	// form.appendChild(fieldTextArea);
	// form.appendChild(fieldBtn);
	// form.appendChild(ResponseContact());
	// form.append(fieldTextArea, fieldBtn, ResponseContact());

	formContainer.appendChild(form);
	setTimeout(() => validForm(), 100);

	return formContainer;
}

function InputElement(
	type = 'text',
	name,
	title,
	required,
	placeholder,
	pattern
) {
	const field = document.createElement('div');
	const input = document.createElement('input');

	input.type = type;
	input.name = name;
	input.title = title;
	input.required = required;
	input.placeholder = placeholder;
	input.pattern = pattern;
	input.name === 'subject' && input.removeAttribute('pattern');

	field.classList.add('form__field');
	field.appendChild(input);

	return field;
}

function ResponseContact() {
	const field = document.createElement('div');
	const text = document.createElement('p');

	text.textContent = 'Los datos han sido enviados';

	field.id = 'contact-response';
	field.classList.add('form__field', 'alert-valid');
	field.appendChild(text);

	return field;
}

function validForm() {
	const doc = document;
	const form = doc.getElementById('form');
	const inputs = doc.querySelectorAll('#form [required]');

	inputs.forEach((element) => {
		const span = doc.createElement('span');

		span.id = element.name;
		span.textContent = element.title;
		span.classList.add('alert-valid');
		// span.classList.remove('error');
		element.insertAdjacentElement('afterend', span);

		doc.addEventListener('keyup', (ev) => {
			if (ev.target.matches('.form [required]')) {
				const input = ev.target;
				const pattern = input.pattern || input.dataset.pattern;

				if (pattern && input.value !== '') {
					const regex = new RegExp(pattern);
					return !regex.exec(input.value)
						? doc.getElementById(input.name).classList.add('error')
						: doc.getElementById(input.name).classList.remove('error');
				}

				if (!pattern) {
					return input.value === ''
						? doc.getElementById(input.name).classList.add('error')
						: doc.getElementById(input.name).classList.remove('error');
				}
			}
		});

		doc.addEventListener('submit', (ev) => {
			ev.preventDefault();
			alert('Enviando formulario');

			const responseContact = doc.querySelector('#contact-response');

			fetch('https://formsubmit.co/ajax/pedropuriihuaman@gmail.com', {
				method: 'POST',
				body: new FormData(ev.target),
			})
				.then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
				.then((data) => {
					// console.log(data);
					responseContact.classList.replace('success', 'error');
					responseContact.textContent = data.message;
					console.log(data.message);
					form.reset();
				})
				.catch((ex) => {
					console.log(ex);
					const message =
						ex.statusText || 'Ocurrio un error al enviar, intenta nuevamente.';
					responseContact.textContent = `Error: ${ex.status}: ${message}`;
				})
				.finally(() => {
					setTimeout(() => {
						responseContact.classList.add('success');
					}, 3000);
				});
		});
	});
}
