function add(a, b) {
	return a += b;
}

function subtract(a, b) {
	return a -= b;
}

function sum(a) {
	let sumArray;
	(a.length === 0) ? (sumArray = 0) : (sumArray = a.reduce((acc, curr) => acc + curr));
	return sumArray;
}

function multiply(a) {
	let sumArray;
	sumArray = a.reduce((acc, curr) => acc * curr);
	return sumArray;
}

function power(a, b) {
	return a ** b
}

function factorial(a) {
	if (a === 0 || a === 1) {
		return 1;
	}
	if (a > 1) {
		return a * factorial(a - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}