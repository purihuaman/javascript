const scrollSpy = () => {
	const containers = document.querySelectorAll('div[data-scroll-spy]');

	const cb = (entries) => {
		entries.forEach((el) => {
			const id = el.target.getAttribute('id');
			const currentLink = document.querySelector(
				`a[data-scroll-spy][href="/dom.html#${id}"]`
			);

			if (!currentLink) return;

			if (el.isIntersecting) currentLink.classList.add('current');
			else currentLink.classList.remove('current');
		});
	};

	const observer = new IntersectionObserver(cb, {
		// rootMargin: '-400px',
		// threshold: 0.5,
		threshold: [0.5, 0.75],
	});

	containers.forEach((el) => observer.observe(el));
};

export default scrollSpy;
