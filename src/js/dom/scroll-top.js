export const scrollTop = () => {
	const scrollBtn = document.getElementById('scroll-top');

	if (!scrollBtn) return;

	window.addEventListener('scroll', (ev) => {
		scrollBtn.classList.add('d-none');
		const scroll = window.pageYOffset || document.documentElement.scrollTop;

		if (scroll > 100) {
			scrollBtn.classList.remove('d-none');
		}
	});

	scrollBtn.addEventListener('click', (ev) => {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	});
};
