const menu = () => {
	const navegation = document.getElementById('navegation');

	document.addEventListener('click', (ev) => {
		if (!navegation) return;

		if (ev.target.id !== 'toggle-icon' && ev.target.id !== 'navegation') {
			navegation.classList.remove('active');
			document
				.getElementById('toggle-icon')
				.firstElementChild.classList.remove('close');
			return;
		}

		navegation.classList.toggle('active');
		document
			.getElementById('toggle-icon')
			.firstElementChild.classList.toggle('close');

		// const listLinks = [...navegation.querySelectorAll('a')];

		// listLinks.forEach((el) => {
		// 	el.classList.contains('current')
		// 		? el.classList.remove('current')
		// 		: el.classList.toggle('current');

		// 	console.log(el);
		// });

		// // if (!navegation.querySelectorAll('a').classList.contains('current')) {
		// // 	navegation.querySelector('a').classList.add('current');
		// // }
	});
};

export const menuDesplegable = () => menu();
