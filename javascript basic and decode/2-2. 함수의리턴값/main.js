/*
  함수의 리턴값 (반환값, return)

  -함수 내부의 값을 함수 외부로 반환
  - 함수 안에서 내보내고 싶은 값 앞에 return키워드를 붙여줌
  - 리턴값을 쓰는 이유는 해당 함수의 결과값을 다시 함수에서 재활용해야 할때
  - 함수 내부에서 구문 실행 도중에 return문을 만나면 강제로 함수가 종료됨
 */


// 함수 내부의 값을 밖으로 반환하기 위한 리턴문
function plus(num1, num2) {
  let result = num1 + num2;
  console.log(result);
  return result;
}
let abc = plus(2, 3);
console.log(abc);


// 함수를 강제 종료하기 위한 리턴문
function minus(num1, num2) {
  if (num1 == undefined || num2 == undefined) {
    console.error("두개의 인수값을 모두 입력하세요!!");
    return;
  }
  let result = num1 - num2;
  console.log(result);
  console.log(result);
  console.log(result);
}
minus(4,2); 
minus(); 