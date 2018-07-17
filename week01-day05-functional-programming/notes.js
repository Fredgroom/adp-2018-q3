//  slide 1
//  In functional programming, computation is treated as the transformation of data through functions.

//  slide 2
//

//  Declarative - Using Expressions
    // if(person.first === 'Vlad' && person.lastName === 'The Impaler') {
    //     console.log('beware!');
    // }

//  Imperative - Using Statements
    //statment
    // const person = {
    //     firstName: 'Vlad',
    //     lastName: 'The Impaler'
    // };
    // const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19];

    //functional programming example
    // function circumference(radius) {
    //     const pi = 3.14;
    //     return 2 * pi * radius;
    // }
    //factorial 
    // 5 factorial:
    // 5! = 5*4*3*2*1

    function factorial(n) {
        if(n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
        const x = factorial(5);
    console.log('Factorial of 6: ', factorial(5));