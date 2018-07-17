// function that accepts a function as a parameter:
function acceptsFunction(callback) {
    //we have been passed in a function, so we can now execute it:
    callback();
}

//function that returns a function:
function returnsFunction()  {
    return function() {
        console.log('this is the returned function');
    }
}

acceptsFunction(() => {
    console.log('passing in a function to be executed');
});

const returnedFunction = returnsFunction();

returnedFunction();