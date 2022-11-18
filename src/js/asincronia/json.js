const json = () => {
	const user = {
		uid: Date.now(),
		name: 'Pedro',
		email: 'puri@gmail.com',
		age: 23,
	};

	console.log(JSON.stringify(user, null, 2));
	console.log(user);
};

export const jsons = () => json();
