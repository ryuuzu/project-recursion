#!/usr/bin/node

function fibs(n) {
	let a = 0;
	let b = 1;
	let fibo = [a];
	let c;
	for (let i = 1; i < n; i++) {
		c = a + b;
		a = b;
		b = c;
		fibo.push(a);
	}
	return fibo;
}

// Took me an hour to understand Lofty-Brambles' solution
function fibsRec(n) {
	return n === 1
		? [0]
		: n === 2
		? [0, 1]
		: [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log(fibs(8));
console.log(fibsRec(8));
