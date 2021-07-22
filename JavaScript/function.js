'use strict';

// Function 
// fundamental building block in the program
// subprogram can be used multiple times
// preforms a task or calculates a value

// think about 
//  - what parameters need to be passed on
//  - what values can be expected to return

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one funtion === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoin => createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello. my name is bora');




// 2. Parameters
// premitive prameters: passed by value
// object parameters: passed by reference
function changeName(rename) {
    rename.name = 'kim bora';
}

const person = { name: 'bora' };
// person variable declaration -> create an object and Assignemnt
// reference goes into memory -> reference points to an object. 
changeName(person);
console.log(person);



// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { //value replace
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');



// 4. Rest parameters (added in ES6)
function prinAll(...args) { // [...] => forward in array form
    /*for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    
    // More simplely (for-of)
    for (const arg of args) {
        console.log(arg);
    }*/

    // More simplely (forEach: functional language)
    args.forEach((arg) => console.log(arg));
}
prinAll('dream', 'coding', 'bora', 'koko', 'taehyeon');



// 5. Local scope
let globalMessage = 'global'; // grobal variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); error
}
printMessage();
//console.log(message); // Error when using local variable from outside



// 6. Return a vlaue
function sum(a, b) {
    return a + b;
}
const result = sum(1, 3); // 4
console.log(result);



// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upprade logic...
    }
}

// good = quick Return 
//  -conditions do not match
//  -value is undefined
//  -value is -1
function upgradeUser(user) {
    if (user.point <= 10){
        return;
    }
    // long upprade logic...
}



//First-class function
// functions are treated like any other variable
// can be assiganed as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

//1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function
    console.log('print');
};
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(2, 9));



// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// Arrow functiom
// always anonymous
/*
const simplePrint = function () {
    console.log('simplePrint!');
}
simplePrint();
*/
const simplePrint = () => console.log('simplePrint');
simplePrint();


/*
const add = function (a, b) {
    return a + b;
}
console.log(add(1, 9));
*/
const number = (a, b) => a + b;
console.log(number(1, 9));



// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate (command, a, b) {
    switch (command) {
        case 'add': 
            return a + b;
        case 'subtract': 
            return a - b;
        case 'divide': 
            return a / b;  
        case 'multiply': 
            return a * b;
        case 'remainder': 
            return a % b;                          
       default:
           throw Error('unkonwn command');
    }
}
console.log(calculate('add', 5, 4));
