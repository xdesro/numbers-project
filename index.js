// Find Pi to the Nth digit
	// Get pi and round to N number of digits
function findPiToNth(n) {
	let pi = parseFloat(Math.PI).toFixed(n);
	console.log(pi);
}

// Fibonacci Sequence
	// Generate Fibonacci sequence until sequence reaches N.
function fibonacciSeq(n) {
	let fib = 1;
	let fibSeq = [1, 1];
	if (n > fib) {
		do {
			fib = fib * 2;
			fibSeq.push(fib);
		} while ((fib * 2) <= n)
	}
	console.log(fibSeq);
}

// Prime Factorization
	// Find all prime factors of N

// Next Prime Number
	// Program finds prime numbers one at a time until user stops asking

// Find Cost of Tile to Cover W x H Floor
	// Calculate the cost of tile to cover W x H of floor, at $N/ft

// Mortgage Calculator
	 // Calculate monthly payments of fixed term mortgage over N terms at i interest rate.
	 // Calculate how long it will take to pay back the loan.

// Change return

// Functions
	// findPiToNth(20);
	// fibonacciSeq(16);