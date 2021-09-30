/*
자료형 

1.문자열 
2.숫자 
3.불린 
4.undefined 
5.null 
6.배열 Array
7.객체 Object

형변환 
- 만약 숫자와 문자를 연산 처리하면 강제로 문자열로 변환 
*/

let num1 = "2"; //문자열
let num2 = 3; //숫자 
let num3 = 5; 
let result = num1 + num2; 
let type = typeof result; 
console.log(type); 
 

 console.log(num1+num2+num3); 
 console.log(num3+num2+num1); 

 //배열 - 성격이 비슷한 연관된 값들을 그룹으로 묶을 때 
 //배열의 갯수를 구할 때 - 배열명.length 
 const fruit = ["apple", "strawberry", "melon"]; 
 console.log(fruit[0]); 
 console.log(fruit[1]); 
 console.log(fruit[2]); 
 console.log(fruit.length); 

 //반복문 : 특정 코드를 원하는 횟수만큼 자동으로 반복 
 for(let i =0; i<fruit.length; i++){
     console.log(fruit[i]); 
 }

 const studentA = {
     name : "홍길동", 
     age : 30, 
     isFemale : false, 
     hobby : "music", 
     address : "Seoul"
 }

 // 객체에서 정보를 추출하는 방법
 //console.log(studentA["name"]); 
 console.log(studentA.name);
 console.log(studentA.age); 
 console.log(studentA.address); 