console.log("1. this");
function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

console.log(`add1 = ${add1(1, 2)}`); // 3
console.log(`add2 = ${add2(1, 2)}`); // 3
console.log(`add3 = ${add3(1, 2)}`); // 3

console.log("-------------------------");

var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    // this.friends.forEach(function (friend) {
    //   console.log(this); // window
    // });

    const self = this;
    this.friends.forEach(function (friend) {
      console.log(self.name, self.friends, friend); // 1
    });

    this.friends.forEach((friend) => {
      console.log(this.name, this.friends, friend); // 2
    });
  },
};
relationship1.logFriends();

// 1과 2는 같은 결과
// 화살표 함수가 기존 function() {} 을 대체하는 건 아님 (this가 달라짐)
// function은 function마다 자기만의 this를 갖는다
// 화살표 함수는 자기만의 this를 갖지않고, 부모의 this를 물려받는다.
// 정리 : 물려받고 싶지 않을때는 function() {}을 사용한다.

//
console.log("2. bind 메서드 - 내부 함수에 this 전달");
const obj = {
  logThis: function () {
    console.log(this);
  },
  logThis2: function () {
    this.logThis(); // obj가 가리키는 this, 즉 {logThis: ƒ, logThis2: ƒ}
    setTimeout(this.logThis, 200); // window
  },

  logThis3: function () {
    setTimeout(this.logThis.bind(this), 1000);
    // this를 obj로 설정, obj이 가리키는 this, 즉 {logThis: ƒ, logThis2: ƒ, logThis3: ƒ}
  },
};
obj.logThis2();
obj.logThis3();
// this는 어떻게 호출되느냐가 중요하다. `.` 으로 메서드로 호출되는것인지, 함수로 호출되는것인지 판별가능
// 메서드로 호출될시 .앞에 있는 객체가 가리키는 this를 본다.
// 콜백함수 내에서의 this는 window다
// bind로 this를 설정할 수 있다.

console.log("3. 화살표 함수의 예외 상황");
const obj2 = {
  outer: function () {
    console.log(this); // {outer: ƒ}
    const innerFunc = () => {
      console.log(this); // {outer: ƒ}
    };
    innerFunc();
  },
};
obj2.outer();
// 이렇게하면 별도의 변수로 this를 우회하거나, call/apply/bind를 적용할 필요가 없음

console.log("4. 별도의 인자로 this를 받는 경우(콜백 함수 내에서의 this)");
const report = {
  sum: 0,
  count: 0,
  add: function () {
    // const args = Array.prototype.slice.call(arguments); // arguments를 배열로 변환해서 args에 담는다.
    const args = Array.from(arguments);
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
      console.log(this); // {sum: 60, count: 1, add: ƒ}
    }, this);
  },
  average: function () {
    return this.sum / this.count;
  },
};
report.add(60, 85, 95);
console.log(report.sum, report.count, report.average());
// forEach함수는는 배열을 순회하면서 콜백 함수를 실행하는데,
// 이때 콜백 함수 내부에서의 this는 forEach함수의 두번째 인자로 전달해준 this가 바인딩 된다.
// 그래서 이 콜백 함수 안에서의 this는 add함수가 가리키는 this(report)를 그대로 가리킨다.
// thisArg를 인자로 받는 메서드 : forEach, map, filter, some, every, find, findIndex, flatMap, from, ....
//  Array.prototype.slice.call(arguments) ===  Array.from(arguments);
