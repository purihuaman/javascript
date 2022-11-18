export default function searchFilter() {
	const filterInput = document.getElementById('filter');
	const cardsFilter = document.getElementById('cards-filter');
	if (!cardsFilter) return;
	const cardsChilds = [...cardsFilter.children];

	if (!filterInput || !cardsFilter || !cardsChilds) return;

	addEventListener('keyup', (ev) => {
		if (ev.target.id !== 'filter') return;
		if (ev.key === 'Escape' && ev.keyCode === 27) ev.target.value = '';

		cardsChilds.forEach((el) =>
			el.textContent.toLowerCase().includes(ev.target.value)
				? el.classList.remove('filter')
				: el.classList.add('filter')
		);
	});
}
