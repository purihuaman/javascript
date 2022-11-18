export function appOop() {
	const jhon = new Person('Jhon', 'Millan');
	const tony = new Person('Tony', 'Kroos');
	const pedro = new Person('Pedro', 'Puri');

	// console.log(jhon);
	// console.log(tony);
	// console.log(pedro);
	tony.name = 'Antonio';
	tony.showFullName();

	// "prototype" Hace referencia a la estructura que ya tenia el constructor Person.
	// Extendiendo el método "greet" del contructor Person
	Person.prototype.greet = function () {
		return `Hello I'am ${this.name}`;
	};

	Person.prototype.email = '';

	// console.log(tony.greet());
	// console.log(jhon.greet());
	// console.log(pedro.greet());
	pedro.email = 'pedropuriihuaman@gmail.com';
	// console.log(pedro.email);

	console.clear();
	//FIXME: Class in JS
	const user1 = new User('Puri', 'Purihuaman');
	const user2 = new User('Tony', 'Kroos');
	// console.log(user1);
	// console.log(user2);
	user1.greet();
	user2.greet();

	const company = new Company('WebSite');
	const company2 = new Company('WebSite 2');

	// console.log(company);
	// console.log(company2);
	// console.log(company.getEmployees());
	// console.log(company2.getEmployees());

	// company.addEmployee({ name: 'puri' });
	// company2.addEmployee({ name: 'jaqui' });

	// console.log(company.getEmployees());
	// console.log(company2.getEmployees());

	// Usando herencia con funciones contructoras
	// mainContructor();

	// Usando herencia con clases
	const user = new User('Alison', 'Puri');
	// console.log(user);

	// const programmer = new Programmer('pedro', 'puri', 'React');
	// console.log(programmer);
	console.clear();
	// mutation(['hello', 'hell']);
	// mutation(['zyxwvutsrqponmlkjighfedcba', 'qrstu']);
	mutation(['Mary', 'Army']);
}

function mutation(arr) {
	const [pos0, pos1] = arr;

	const arr1 = [...pos0.toLowerCase()];
	const arr2 = [...pos1.toLowerCase()];

	console.log(arr1);
	console.log(arr2);

	const result = arr2.every((x) => arr1.some((y) => y === x));

	console.log(result);
}

// Constructor
function Person(name, lastname) {
	this.name = name;
	this.lastname = lastname;
	this.age = 0;
	this.showFullName = function () {
		console.log(`${this.name} ${this.lastname}`);
	};
}

function Company(name) {
	let employees = [];
	this.name = name;
	this.getEmployees = function () {
		return employees;
	};
	this.addEmployee = function (employee) {
		employees.push(employee);
	};
}
