/*
    조건문
    : 특정 조건마다 분기를 생성해서 코드 흐름의 변화를 준다.

    if(조건식) {
        // 조건식이 참일 경우 구문 실행
    } else if (조건식2) {
        // 조건식2가 참일 경우 구문 실행
    } else {
        위의 조건식들이 모두 거짓일 때
        무조건 이곳의 구문을 실행하고 종료
    }

    // 현재 시간 구하기
    new Date();
    .getFullYear();
    .getMonth()
    .getDay()
*/

let now = new Date();
//now = now.getHours();
now = now.getDay();
console.log(now);

const main = document.querySelector("main");

// 0시보다 같거나 크고, 9시보다는 작을때
if (now >= 0 && now < 9) {
  main.style.backgroundColor = "orangered"
}

// 9시보다 같거나 크고, 17시보다는 작을때
if (now >= 9 && now < 17) {
  main.style.backgroundColor = "lightblue"
}

// 17시보다 같거나 크고, 25시보다는 작을때
if (now >= 17 && now < 25) {
  main.style.backgroundColor = "violet"
}

const week = ["일", "월", "화", "수", "목", "금", "토"];
const day = week[now];
console.log(day);