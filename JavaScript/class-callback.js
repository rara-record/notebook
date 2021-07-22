'use strict';



// callback function 
function add (a, b) {
  return a + b;
}

function divide (a, b) {
  return a / b;
}

function surprise (callback) {
  const op = callback (2, 3);
  return op;
}
const result = surprise(divide);
console.log(result);


// class-callback-function : 
// 1. 클래스는 다양한 오브젝트를 만들기 위한 청사진이다.
// 2. new 라는 키워드를 사용하면 
// 5배가 될때마다 경고창이 뜨게 만들기 constructor가 실행된다.

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase () {
      this.counter++;
      console.log(this.counter);
      if (this.counter % 5 === 0) {
        this.callback && this.callback(this.counter)
    }
  }
}
function printSomething(num) {
    console.log(`'wow' ${num}`);
}
function alertNum(num) {
    alert(`'wow' ${num}`);
}
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

