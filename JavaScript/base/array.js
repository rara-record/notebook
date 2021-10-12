'use strict';

// Array 
// 비슷한 타입들의 object를 묶어 놓는 것을 자료구조라고 한다.
// 배열은 칸막이 처럼 촘촘히 모여있는 자료구조를 말한다.

// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];





// 인덱스를 활용하여 어떻게 데이터를 검색/삼입/삭제하는지 아는게 중요하다.
// 2. Index positio
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
// 배열의 마지막 요소 접근하는 방법
console.log(fruits[fruits.length - 1]); // 🍌






// 3. Looping over an array
// print all fruits

// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // 🍎, 🍌
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit); // 🍎, 🍌
}

// c. forEach 
// : callback 함수를 받아온다.
// : 배열 안에 들어 있는 value들 마다 내가 전달한 함수를 출력한다.
fruits.forEach((fruit, index) => console.log(fruit, index)); // 🍎 0
                                                             //🍌 1
/*
fruits.forEach(function (fruits, index) {
    console.log(fruits, index);
});
*/





// 4. Addtion, deletion, copy

// a. push : add an item to the end : 맨 끝에 item 추가
fruits.push('🍓', '🍉');
console.log(fruits); // (4) ["🍎", "🍌", "🍓", "🍉"]

// b. pop : remove an item from the end : 맨 끝에 있는 item 빼옴
fruits.pop();
fruits.pop();
console.log(fruits); // (2) ["🍎", "🍌"]

// c. unshift : add an item to the front : 맨 앞에 item 추가
fruits.unshift('🍓', '🍇');
console.log(fruits); // (4) ["🍓", "🍇", "🍎", "🍌"]

// d. shift : remove an item from the front : 맨 앞에 item 삭제
fruits.shift();
fruits.shift();
console.log(fruits); // (2) ["🍎", "🍌"]

// note! : shift, unshift are slower than push, pop
//  : shift와 unshift 는 push와 pop보다 느리다.

// e. splice : remove an item by index position 
//  : item을 지정된 위치에서 데이터를 삭제 할 수 있다.
fruits.push('🍇','🍉','🍑');
console.log(fruits); // (5) ["🍎", "🍌", "🍇", "🍉", "🍑"]

/*
fruits.splice(1);   // 갯수를 지정하지 않으면 1번 index부터 끝까지 다 지운다.
console.log(fruits); // ["🍎"]
*/

fruits.splice(1, 1);   // 
console.log(fruits); // (4) ["🍎", "🍇", "🍉", "🍑"] 바나나만 지워짐

// note ! : splice는 데이터를 넣을때도 사용이 가능하다
fruits.splice(1, 1, '🍓', '🍒'); 
console.log(fruits); // (5) ["🍎", "🍓", "🍒", "🍉", "🍑"] // 바나나 자리에 '🍓', '🍒' 추가 됨


// f. concat : combine two arrays : 두 배열을 합치다.
const fruits2 = ['🍈', '🍍']
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // (7) ["🍎", "🍓", "🍒", "🍉", "🍑", "🍈", "🍍"]






// 5. Searching 

// a. indexOf : find the index
//  배열 안에 해당 데이터가 index번호 몇번째인지 알려주는 API
console.log(fruits);
console.log(fruits.indexOf('🍎'));  // 0
console.log(fruits.indexOf('🍉'));  // 3
// 배열안에 해당하는 값이 없을 때에는 -1이 출력된다.
console.log(fruits.indexOf('🍅'));  // -1

// b. includes : 
//  배열 안에 해당 데이터가 들어있는지 진리값으로 나타내주는 함수
console.log(fruits.includes('🍉'));  // true

// c. lastIndexOf
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));  // 0
console.log(fruits.lastIndexOf('🍎'));  // 5



// interface ReadonlyArray<T>
console.log(fruits.toString());

const number = [];
for(let i = 0; i <= 30; i++){
    number.push(i);
}
console.log(number);