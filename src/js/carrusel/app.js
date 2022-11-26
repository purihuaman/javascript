import { Card } from './Card';

export const carrusel = () => {
	const app = document.getElementById('app');
	const screenApp = document.createElement('div');
	const container = document.createElement('container');
	const fragment = document.createDocumentFragment();

	screenApp.classList.add('screenApp');
	container.classList.add('container');

	courses.map((course) => {
		fragment.append(Card(course.id, course.title, course.avatar));
	});

	container.appendChild(fragment);
	screenApp.append(container);
	app.appendChild(screenApp);
	getResize(container);
};

const getResize = (screenApp) => {
	const container = document.querySelector('.container');
	if (screenApp) {
		addEventListener('w', (ev) => {
			const width = ev.target.innerWidth;

			container.style.setProperty('--width', `${width}%`);
		});
	}
};

const courses = [
	{
		id: 1,
		title: 'React Native',
		avatar:
			'https://edteam-media.s3.amazonaws.com/courses/original/9cfa2a82-e1d9-4903-849f-b3d09804a703.png',
	},
	{
		id: 2,
		title: 'Angular',
		avatar:
			'https://edteam-media.s3.amazonaws.com/specialities/big/af23506e-24c8-4633-b813-869e07c108ad.png',
	},
	{
		id: 3,
		title: 'React',
		avatar:
			'https://edteam-media.s3.amazonaws.com/blogs/original/7debaf0c-a396-4a57-a000-b1e418c4cb7c.png',
	},
	{
		id: 4,
		title: 'Node JS',
		avatar:
			'https://edteam-media.s3.amazonaws.com/courses/original/3cc48fa0-8327-4561-aa04-dafc3b799909.png',
	},
	{
		id: 5,
		title: 'Python',
		avatar:
			'https://edteam-media.s3.amazonaws.com/blogs/original/9839e589-1a3f-49bc-8b6e-ec9b5bd2d145.jpg',
	},
	{
		id: 6,
		title: 'JavaScript',
		avatar:
			'https://edteam-media.s3.amazonaws.com/courses/original/0ee9349f-f9c3-4a83-93f7-d697fba965b4.jpg',
	},
	{
		id: 7,
		title: 'Symfony',
		avatar:
			'https://edteam-media.s3.amazonaws.com/courses/original/8cb7bce7-eb7c-4925-af03-8e22f9c0e9a9.jpg',
	},
	{
		id: 8,
		title: 'Laravel',
		avatar:
			'https://edteam-media.s3.amazonaws.com/courses/original/5acb325f-217e-4f5d-a7de-c1934464af3e.png',
	},
];
