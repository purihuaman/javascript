const lightTheme = {
	'--first-bg': 'var(--grey-100)',
	'--second-bg': 'var(--grey-200)',
	'--third-bg': 'var(--grey-300)',
	'--title-color': 'var(--grey-600)',
	'--text-color': 'var(--grey-500)',
	'--border-color': 'var(--grey-300)',
	'--link-color': 'var(--primary-500)',
	'--lightbg-rgba': 'var(--light-rgba)',
};

const darkTheme = {
	'--first-bg': 'var(--grey-900)',
	'--second-bg': 'var(--grey-800)',
	'--third-bg': 'var(--grey-700)',
	'--title-color': 'var(--grey-200)',
	'--text-color': 'var(--grey-300)',
	'--border-color': 'var(--grey-600)',
	'--link-color': 'var(--primary-500)',
	'--darkbg-rgba': 'var(--dark-rgba)',
};

const changeTheme = (theme = darkTheme) => {
	const rootStyle = document.documentElement.style;

	const cssVars = Object.keys(theme);
	for (const cssVar of cssVars) {
		rootStyle.setProperty(cssVar, theme[cssVar]);
	}
};

const toggleTheme = () => {
	addEventListener('click', (ev) => {
		const target = ev.target;

		if (!ev.target.dataset.theme) return;

		// console.log(target.dataset.theme);
		if (target.dataset.theme.toLowerCase() === 'dark') {
			changeTheme(lightTheme);
			target.dataset.theme = 'ligth';
			target.textContent = '🌜';
			localStorage.setItem('themes', 'ligth');
		} else {
			changeTheme(darkTheme);
			target.dataset.theme = 'dark';
			target.textContent = '☀';
			localStorage.setItem('themes', 'dark');
		}

		if (!localStorage.getItem('themes')) {
			localStorage.setItem('themes', 'dark');
		}
		if (localStorage.getItem('themes') === 'dark') changeTheme(darkTheme);

		if (localStorage.getItem('themes') === 'light') changeTheme(lightTheme);
	});
};

export default toggleTheme;
