// A function that uses a function as an input parameter
function displayMessage(printFunction, message) {
    printFunction(message);
}
displayMessage(console.log, 'Happy new year everyone!');

// A function created as an output from another function
function createHelloWorldFunction() {
    return () => {
        console.log('Hello world!');
    };
}
const helloWorldFunction = createHelloWorldFunction();
helloWorldFunction();

// A function that calls itself
// Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...
// Index:              1, 2, 3, 4, 5, 6,  7,  8, ...
// Parameter: index - calculate the nth number (1-based, not zero-based)
// So: fibonacci(1) => 1; fibonacci(6) => 8, etc
function fibonacci(index) {
    if (index < 3) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);
}
console.log('Fibonacci index 6:', fibonacci(6));
console.log('Fibonacci index 8:', fibonacci(8));