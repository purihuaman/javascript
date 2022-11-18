const videoInteligente = () => {
	const smartVideo = document.querySelectorAll('[data-smart-video]');

	if (!smartVideo) return;

	const cb = (entries) => {
		entries.forEach((el) => {
			if (el.isIntersecting) startSimulation(el.target);
			else pauseSimulation(el.target);

			document.addEventListener('visibilitychange', (ev) => {
				document.visibilityState === 'hidden'
					? pauseSimulation(el.target)
					: startSimulation(el.target);
			});
		});
	};

	const observer = new IntersectionObserver(cb, { threshold: [0.5, 0.75] });

	smartVideo.forEach((el) => observer.observe(el));
};

const pauseSimulation = (element) => {
	element.pause();
	element.muted = true;
};

const startSimulation = (element) => {
	element.play();
	element.muted = false;
};

export default videoInteligente;
