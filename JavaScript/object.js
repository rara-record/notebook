'use strict';

// Objects
// one of the javaScript's data types. (자바스크립트 데이터 타입 중 하나이다.)
// a collection of related data and/or functionality. (관련 데이터 및 또는 기능의 컬렉션이다.)
// Nearly all objects in JavaSccript are instances of Object. (자바스크립트의 거의 모든 object들은 object의 instances 이다.)
// object = { key : value }; 오브젝트는 키와 벨류의 집합체이다.


// 1. 오브젝트를 만드는 방법
const obj = { name: "김보라", age: 29 }; // 'object literal' syntax
console.log(obj);  // {name: "김보라", age: "29"}




// 'object constructor' syntax
class ObjectConstr {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const obj2 = new ObjectConstr('김보라', 29);  // {name: "김보라", age: 29}
console.log(obj2);

const name = 'ellie';
const age = 4;





// 이 함수의 문제점 : 인자가 많아지면 관리 하기가 어려움
function print(name, age) {
    console.log(name);
    console.log(age);
}
print(name, age);




console.clear();
// object ellie를 만들어서 person이라는 파라미터로 전달
function print2(person) {
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age: 4 };
print2(ellie);




// with JavaScript magic (daynamically typed language)
ellie.hasjob = true;
console.log(ellie.hasjob); // true






// can delete properties later
delete ellie.hasjob; 
console.log(ellie.hasjob); // undefined



// 2. Computed properties 계산된 프로퍼티
// key should be always string 프로퍼티(key)는 항상 스트링타입으로 해야 한다.
console.log(ellie['name']);  // ellie 
ellie['hasjob'] = true;
console.log(ellie.hasjob); // true




// 실시간(런타임)에서 결정될 때는, computed properties를 쓴다
// 동적으로 key에 관련된 vlaue를 받아올 때 유용하게 쓰인다.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name'); // ellie
printValue(ellie, 'age');  // age





console.clear();
// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// class에서 object를 만드는 것 처럼 할 수 있다.
const person4 = makeperson('ellie', 30);
console.log(person4);

function makeperson(name, age) {
    return {
        name, // 동일한 변수와 프로퍼티시 한개만 작성 가능
        age   // : Property value shorthand
    };   
}



// 4. Constructor function 생성자 함수
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
}   // return this;

const person5 = new Person('ellie', 20);
console.log(person4);  // {name: "ellie", age: 20}



// 5. in operator : property existence check (key in obj) 
// : 해당 오브젝트 안에 key가 있는지 없는지 확인하는 것
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined






// 6. for.. in vs for.. of (유용!)
// for (key in obj)
for (let key in ellie) {
    console.log(key); // name, age, hasjob : key
    console.log(ellie[key]); // ellie, 4, true : 데이터 '[]' 중괄호 필!
}


const array = [1, 2, 4, 5];

// 기존 for문으로 배열을 순회하는 방법
/*
for(let i=0; i<array.length; i+=1) {
    console.log( array[i] ); // 1, 2, 4, 5
}
*/

// for (value of iterable)
// array에 있는 모든 값들이 value에 할당되어짐.
for (let value of array) {
    console.log(value); // 1, 2, 4, 5
}





// 7. Fun cloning 
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder'
console.log(user); // coder

// 오브젝트를 복사하는 방법

// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}

console.log(user3);  // {name: "coder", age: "20"}

// object.assign 
//  : assign<T, U>(target: T, source: U): T & U;
//  = target: T (복사하고자 하는 타겟)
//  = source: U (복사하려고 하는 소스) 를 같이 전달 해 주어야 한다.
//  = T & U; 리턴값은 타겟과 복사하고자 하는 것이 통합 된 아이가 리턴 된다.
const user4 = Object.assign({}, user); // 타겟(T) 과 복사하고자 하는 소스(U);
console.log(user4);  // {name: "coder", age: "20"}

// another example
const fruit1 = { color : 'red' };
const fruit2 = { color : 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 동일한 property가 있다면 값을 덮어 씌움
console.log(mixed.color); // blue
console.log(mixed.size);  // big
console.log(mixed);  // {color: "blue", size: "big"}