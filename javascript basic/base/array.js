'use strict';

/* Array : 비슷한 타입들의 object를 묶어 놓는 것을 자료구조라고 한다. 배열은 칸막이 처럼 촘촘히 모여있는 자료구조를 말한다. 인덱스를 활용하여 어떻게 데이터를 검색/삼입/삭제하는지 아는게 중요하다. */

/*=========== 선언 방법 ===========*/
const arr1 = new Array();
const arr2 = [1, 2];


const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined

// 배열의 마지막 요소 접근하는 방법
console.log(fruits[fruits.length - 1]); // 🍌


/*=========== 배열을 도는 메소드 ===========*/
{
const fruits = ['🍎', '🍌'];

// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // 🍎, 🍌
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit); // 🍎, 🍌
}

// c. forEach : callback 함수를 받아온다. 배열 안에 들어 있는 value들 마다 내가 전달한 함수를 출력한다.
fruits.forEach((item, index) => console.log(item, index)); // 🍎 0 , 🍌 1
}



/*=========== 추가, 삭제, 복사 메소드 ===========*/
{
    // a. push : 맨 끝에 item 추가
    const fruits = ['🍎', '🍌'];
    fruits.push('🍓', '🍉');
    console.log(fruits); // ['🍎', '🍌', '🍓', '🍉']
}

{
    // b. pop : 맨 끝에 있는 item 빼버림
    const fruits = ['🍎', '🍌'];
    const pop = fruits.pop();
    console.log(pop); // 🍌
    console.log(fruits); // ['🍎']
}

{
    // c. unshift : 맨 앞에 item 추가
    const fruits = ['🍎', '🍌'];
    const unshift = fruits.unshift('🍓', '🍇');
    console.log(fruits); // ['🍓', '🍇', '🍎', '🍌']
}

{
    // d. shift : 맨 앞에 item 삭제 : 
    const fruits = ['🍎', '🍌'];
    const shift = fruits.shift();
    console.log(shift); // 🍎
    console.log(fruits);  //['🍌']
}

/* !NOTE! : shift와 unshift 는 push와 pop보다 느리다. */

{
    // e. splice : item을 지정된 위치에서 데이터를 삭제, 추가 가능. 갯수를 지정하지 않으면 1번 index부터 끝까지 다 지운다. 새로운 배열을 만든다. 원본 배열 손상
    const fruits = ['🍎', '🍌', '🍇', '🍉', '🍑'];
    const splice = fruits.splice(0);
    console.log(fruits); // []
    console.log(splice); // ['🍎', '🍌', '🍇', '🍉', '🍑']

    const fruits2 = ['🍎', '🍌', '🍇', '🍉', '🍑'];
    const splice2 = fruits2.splice(1, 3);
    console.log(fruits2); //  ['🍎', '🍑']
    console.log(splice2); // ['🍌', '🍇', '🍉']

    const fruits3 = ['🍎', '🍌', '🍇', '🍉', '🍑'];
    const splice3 = fruits3.splice(2, 1, '🍒');
    console.log(fruits3); // ['🍎', '🍌', '🍒', '🍉', '🍑']
    console.log(splice3); // ['🍇']
}

{
    // f. concat : 두 배열을 합친다.
    const fruits = ['🍎', '🍌'];
    const fruits2 = ['🍇', '🍉', '🍑'];
    const newFruits = fruits.concat(fruits2);
    console.log(newFruits); //  ['🍎', '🍌', '🍇', '🍉', '🍑']
}


/*=========== 검색 메소드 =========== */

{
    // a. indexOf : 배열 안에 해당 데이터가 index번호 몇번째인지 알려준다. 배열안에 해당하는 값이 없을 때에는 -1이 출력된다.
    const fruits = ['🍎', '🍌', '🍎'];
    console.log(fruits.indexOf('🍎'));  // 0
    console.log(fruits.indexOf('🍌'));  // 1
    console.log(fruits.indexOf('🍅'));  // -1
}

{
    // b. lastIndexOf : indexOf와 거의 동일 하지만, 만약 배열 안에 같은 데이터가 있으면 indexOf와는 다르게 뒤에 있는 index번호를 가져온다.
    const fruits = ['🍎', '🍌', '🍎'];
    console.log(fruits.lastIndexOf('🍎'));  // 2  
    console.log(fruits.lastIndexOf('🍌'));  // 1
    console.log(fruits.lastIndexOf('🍅'));  // -1
}

{
    // c. includes : 배열 안에 해당 데이터가 들어있는지 진리값으로 나타내주는 함수
    const fruits = ['🍎', '🍌'];
    const includes = fruits.includes('🍎');
    console.log(includes); // true
}

/*=========== 읽기 전용 속성 =========== */

{
    // a. toString : 문자열로 변환
    const number = [1, 2];
    console.log(number.toString());
}


// Q. 1부터 30까지 배열 메소드를 사용해서 담아보기.
const number = [];
for(let i = 0; i <= 30; i++) { 
    number.push(i); 
}
console.log(number);