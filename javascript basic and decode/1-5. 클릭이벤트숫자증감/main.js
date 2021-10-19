/*
let num;  //변수선언
num = 3;  //변수에 값 할당  

let num0 = 5; //변수 초기화 (변수를 선언하지마자 값 할당)

let num1 = 2; 
let num2 = 3; 
let total = num1 + num2; 
console.log(total); 


연산자 : 특정값을 도출하기 위해 연산을 처리하는 식별자 

산술연산자 : 수학적인 연산 ( +,-, *, /, %, **, ++, --)
대입연산자 : 특정 값을 대입하기 위한 연산 (= , +=, -=, *= )
비교연산자 : 두개 이상의 값을 서로 비교하기 위한 연산자 (true, false.. )

자료형 (data type)
1. 문자열 : string
2. 숫자 : number
3. 불린 : (ture, false) boolean
4. undefined : 변수를 생성하고 값을 할당하지 않으면 해당 자료형이 대신 저장
5. null : 명시적으로 특정 변수값을 비워야 할때 보통 null이 저장
*/

let num = 2; 
num = num +3; 
console.log(num); 

//전위연산자
let num1 = 3; 
let result1 = ++num1 *2; 
console.log(result1); 

//후위연산자 
let num2 = 3; 
let result2 = num2++ *2 ; 
console.log(result2); 

// 비교연산자에서 == 값만 비교
let result3 = (2 == "2"); 
console.log(result3);

// 비교연산자에서 === 자료형도 같이 비교
let result4 = (2 === "2"); 
console.log(result4);

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let count = 0;

btnPlus.addEventListener("click", (e) => {
    e.preventDefault();
    count++;
    console.log(count);
});

btnMinus.addEventListener("click", (e) => {
    e.preventDefault();
    count--;
    console.log(count);
});