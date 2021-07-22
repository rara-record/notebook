'use strict';

// 자바스크립트는 동기적이다.
// 호이스팅이 된 이후부터 코드가 순차적으로 동기적으로 실행
// hoisting: var, function declaration 자동적으로 제일 위로 선언되는 것
// 콜백 함수: 전달해준 함수를 나중에 불러줌


//Synchronous callback
function printImmediately(print) {
    print();
}

//Asynchronous callback 비동기콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기
printImmediately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000); // 비동기

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  
  getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if(user === 'ellie') {
          onSuccess ({ name: 'ellie', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user, 
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
      }, 
    (erroe) => {
      console.log(error);
    }
    );
  }, 
  error => {
    console.log(error)
  }
);

