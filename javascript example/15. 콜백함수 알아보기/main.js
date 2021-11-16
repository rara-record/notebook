'use strict';

/*
    test 함수가 하는 일은, 예약을 거는 일뿐이다.
    setTimeout 안의 코드를 test함수가 실행시켜주는 것이 아니라,
    test함수는 setTimeout함수를 실행만 시켜줄 뿐, 코드실행은 브라우저가 한다. 
*/

{
   function test() {
      setTimeout(() => {
         let val = 1 + 2;
         console.log(val);
      }, 1000);
   }

   test();
   console.log('end');
}


{
   function test(callback) {
      setTimeout(() => {
         let val = 1 + 2;
         console.log(val);
         callback();
      }, 2000);
   }

   test(function() {console.log('end')});
}




