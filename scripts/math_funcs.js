// Function which returns the sum of two numbers. It also checks if the arguments are numbers.
function my_sum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        a = Number(a);
        b = Number(b);
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Arguments must be numbers');
    }
    return a + b;
}

// Function which returns the difference of two numbers. It also checks if the arguments are numbers.
function difference(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Arguments must be numbers');
    }
    return a - b;
}