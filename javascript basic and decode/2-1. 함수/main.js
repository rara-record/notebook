/*
  함수 : function
  - 자주 쓰는 실행 코드들을 블록 다누이로 묶어서 패키징한 형태
  - 자주 쓰는 코드들을 기능단위로 묶어서 재사용하기 위함
  - 함수정의 : 미리 function 키워드로 자주 쓰는 코드들을 묶어주는 행위
  - 함수호출 : 미리 정의되어 있는 함수를 호출해야 비로서 실행됨

  함수의 인수 (파라미터, 매개변수)
  - 함수 외부에서 특정값을 함수 내부로 전달해주는 통로이름

  tyof 
  특정 데이터의 자료형 검사
  - typeof 검사할값;
  - 문자열 형태로 해당 자료형을 반환한다.
*/

// 더하기 함수 정의
function plus(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
// 함수호출
plus(2, 3);



// 빼기 함수 정의
function minus(num1, num2) {
  let result = num1 - num2;
  console.log(result);
}
// 함수호출
minus(2, 3);



// 곱하기 함수 정의
function multiply(num1, num2) {
  let result = num1 * num2;
  console.log(result);
}
// 함수호출
multiply(2, 3);


// 나누기 함수 정의
function divide(num1, num2) {
  let result = num1 / num2;
  console.log(result);
}
// 함수호출
divide(2, 3);

function calc(num1, num2, type) {
  // 각 인수의 자료형을 검사하여 변수에 저장
  let typeNum1 = typeof num1;
  let typeNum2 = typeof num2;
  let typeType = typeof type;

  // 세개의 자료형을 각각 비교해서 조건에 부합하면 경고문구를 콘솔에 출력
  if (typeNum1 !== "number" || typeNum2 !== "number" || typeType != "string") {
    console.error("첫번째, 두번째 인수값은 숫자로, 세번째 인수는 문자기호를 입력하세요"); 
  } else {
    // 3개의 인수값들이 모두 정상적으로 들어왔을때,
    // type에 따라서 각각 사칙연산함수를 호출
    if (type === "+") plus(num1, num2);
    if (type === "-") minus(num1, num2);
    if (type === "*") multiply(num1, num2);
    if (type === "/") divide(num1, num2);
  }

}
calc(2, 4, "+");
calc("보라", 3, "-");
calc(7, 2, "*");
calc(8, 2, "/");

calc("홍길동", 3, "-");
calc(10, 3, "-");