'use strict';

// 1. Use strict
// added in ES 5
// use this for Valina Javascript




// 2. Variable, rw(read/write)
// let (added in ES6) ---> mutable data type

let globalScope = 'global name'; // Write to a minimum 
{ 
    let name = 'bora';
    name = 'hello';
    console.log(globalScope);
}
console.log(name);
console.log(globalScope);

// var (don't ever use this!)
// var hoistiong (move declaration from bottom to top)
// has no block scope (Ignore Block)

/*
console.log(age);
age = 4;
console.log(age);
var age;
*/

{
    age = 4;
    var age;
}
console.log(age);



// 3. Contants r(read only)
// use const whenever poosible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;



// Note!
// Immutable data types: premitive types, forozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reason:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types
// premitive, single item: number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-clss function

const count = 17; // integer
const size = 17.1; // decimal number 
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, - infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = 1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.lognegativeInfinity
console.log(nAn);

// bigInt (fairly new, dont't use it yet)
const bigInt = 1421435039409238491827312412389n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


// string
const char = 'c';
const bora = 'bora';
const sayHello = 'hello' + bora;
console.log(`value: ${sayHello}, type: ${typeof sayHello}`);
const helloBora = `hi ${bora}!`; //template literals (string)

//같다
console.log(`value: ${helloBora}, type: ${typeof helloBora}`);
console.log('value: ' + helloBora + ' type: ' +typeof helloBora );
// practice
let boraName = '보라';
let kokobark = '멍뭉멍!';
let kokoName = '코코';
console.log(`코코가 짖고 있어요 ${kokobark}`);
console.log(`${boraName}의 강아지는 ${kokoName}에요.`);


//boolean
//false: 0; null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);


//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// object, real-life object, data structure
const kimbora = { name: 'kimbora', age: 20};
kimbora.age = 21;
console.log(kimbora);


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
/* console.log(text.charAt(0)); //h */
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`); //number
console.log(text.charAt(0)); //error