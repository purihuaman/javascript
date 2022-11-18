export const showMessage = (message, bgColor = '', textColor = '') => {
	const container = document.createElement('div');
	const content = document.createElement('div');
	const text = document.createElement('p');

	text.textContent = message;

	container.classList.add('modal');
	content.classList.add('modal__content', bgColor, textColor);
	text.classList.add('modal__text');

	content.append(text);
	container.append(content);

	document.body.append(container);

	setTimeout(() => {
		document.body.removeChild(container);
	}, 800);
};
