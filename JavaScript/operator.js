'use strict';


// 1. String concatenation
console.log('my' + 'dog');
console.log('1' + '2'); //string
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log('bora\'s \npretty\n\tpreson');



// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(2 * 2); // multiply
console.log(6 % 5); // remainder
console.log(2 ** 3); // exponentiation



// 3. Increment and decrement operators 
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); 
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);



// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; 
x -= y;
x *= y;
x /= y;



// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal



// 6. Logical operators: || (or), && (and), ! (not)
// value = write at the forefront.
// function = write at the end.
const value1 = true; // if false = check funstion 'hello' output
const value2 = 4 < 2;

function check() {
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('hello');
    }
    return true;
}

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); 

// && (and), finds the first falsy value
// often used to compress long if-statement
// nullableObject && nullableObject.somthing
console.log(`and: ${value1 && value2 && check()}`); 

// ! (not)
console.log(!value1);



// 7. Equality
const stringFive  = '5';
const numberFive = 5;

// == loose equality, with type conversion 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);


// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// object equality by reference
const ellie1 = { name : 'ellie'};
const ellie2 = { name : 'ellie'};
const ellie3 = ellie1;
console.log( ellie1 == ellie2 ); // false
console.log( ellie1 === ellie2 ); // false
console.log( ellie1 === ellie3 ); // true
console.log(`---------------------------`);

// equality - puzzler
console.log(0 == false); // true, [0, null, undefined => false]
console.log(0 === false); // false [0 != boolean type]
console.log('' == false); // true;
console.log('' === false); // false ['' != boolean type]
console.log(null == undefined); // true 
console.log(null === undefined); // false [null != boolean type]



// 8. Conditional operator: if
// if, else if, else
const name = 'bora';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
// use only when it's simple, don't tie it up!
console.log( name === 'bora' ?  'ofcourse' : 'you are wrong'); 
console.log( name === 'koko' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use ofr enmu-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch ( browser ) {
    case 'IE' :
        console.log('go away!'); 
        break;
    case 'Chrome':
    case 'Firefox' :
        console.log('love you!'); 
        break;  
    default: 
        console.log('same all!!');
        break;                 
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed. (Until false)
// check condition => run block
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, 
// then check the condition. (Until false) 
// run block => check condition
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);



// 12. for loop, for(begin; condition; step)
for (let i = 3; i > 0; i--) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops (not good for cpu..)
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}


// break, continue (now skip, next step)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
// Q2. iterate from 0 to 10 and print numbers untill reaching 8 (use break)


for (let i = 0; i <= 10; i++) {
    if(i % 2 !== 0 ) continue; 
    console.log(`q1. ${i}`);
}

for (let i = 0; i <= 10; i++) {
    if( i > 8 ) break;
    console.log(`q2. ${i}`);
}