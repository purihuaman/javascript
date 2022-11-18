export default function sliderReponsive() {
	const slider = document.getElementById('slider');
	if (!slider) return;
	const sliderChilds = [...slider.children];

	const btnPrevious = document.querySelector(
		'[data-arrow-previous="previous"]'
	);
	const btnNext = document.querySelector('[data-arrow-next="next"]');
	const pointsChilds = [...document.getElementById('points').children];

	if (!slider || !sliderChilds || !btnPrevious || !btnNext || !pointsChilds)
		return;

	let i = 0;

	document.addEventListener('click', (ev) => {
		if (!slider || !sliderChilds) return;
		if (ev.target === btnPrevious) {
			sliderChilds[i].classList.remove('current');
			pointsChilds[i].classList.remove('current');
			i--;

			if (i < 0) {
				i = sliderChilds.length - 1;
			}

			sliderChilds[i].classList.add('current');
			pointsChilds[i].classList.add('current');
		}

		if (ev.target === btnNext) {
			sliderChilds[i].classList.remove('current');
			pointsChilds[i].classList.remove('current');
			i++;

			if (i >= sliderChilds.length) {
				i = 0;
			}

			sliderChilds[i].classList.add('current');
			pointsChilds[i].classList.add('current');
		}
	});
}
