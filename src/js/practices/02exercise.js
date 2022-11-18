let maxNumber = 10;
let result = 1;

for (let index = maxNumber; index > 0; index--) {
	// result = index * result;
	result *= index;
}
console.log(`FACTORIAL FOR: ${result}`);

// variable reassignment

maxNumber = 10;
result = 1;

while (maxNumber > 0) {
	result *= maxNumber;

	maxNumber--;
}

console.log(`FACTORIAL WHILE: ${result}`);

// variable reassignment

maxNumber = 10;
result = 1;

while (true) {
	result *= maxNumber;
	maxNumber--;

	if (maxNumber === 1) {
		break;
	}
}

console.log(`FACTORIAL WHILE AND BREAK STATEMENT: ${result}`);
