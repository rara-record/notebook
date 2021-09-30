/*
    변수: 특정 데이터값을 임시로 저장하는 공간
    es5 : var
    es6 : const, let

    변수를 쓰는 이유
    1. 자주 쓰는 데이터값을 효율적으로 관리
    2. 한번 찾은 데이터를 재활용하기 위함

    console.log();
    특정 데이터값을 콘솔탭에 출력
    오류내용이나 특정 정보값을 확인하는 디버깅용도

    var 변수명 = 대입할 값

    es5 변수생성
    var num;
    num = 3;
    
    var num = 3;

    es6방식의 변수 생성
    let : 특정 변수에 저장되는 값이 자주 바뀔 때
    const : 값이 바뀌면 안될 때

    변수명 작성시 유의점
    1. 숫자로 시작불가
    2. 특수문자로 삽입 불가
    3. "-" 불가 (예약어, 산술연산에서 빼기의 예약어)
    4. 대소문자 구분 apple APPLE 두개는 다른 변수
    5. 예약어 불가 (var const let function..)
    6. 한글 불가


    for of 반복문
    for (let "반복하는 요소가 담길 변수" of "반복시킬 그룹") {
        // 그룹에 담겨 있는 요소의 갯수만큼 자동반복
        반복 실행할 구문

    for문
    for (let i = 0; i < group.length; i++) {
        console.log(group[i]);
    }
    
    let i = 0; - 반복하기 위한 초기 순서값
    i < group.length; - 그룹의 갯수만큼 반복 횟수 지정
    i++ 반복 순서를 1씩 증가
    console.log(group[i]); 현재 반복하고 있는 그룹의 순번 탐색

    자식 요소 선택
    .children

    부모 요소 선택 
    .parentElement (직계 부모 선택)
    
    제일 가까운 상위 부모요소 선택
    .closest()

    형제 요소 중 직전에 있는 요소 선택
    .previousElementSibling

    형제 요소 중 직후에 있는 요소 선택
    .nextElementSibling
}
*/

// html요소 선택하기
const frame = document.querySelector("#wrap");
const box1 = document.querySelector("#wrap .box1");
const items = document.querySelectorAll("#wrap article");
console.log(items);

// for of
for(let item of items) {
    console.log(item);
}

// for
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}


// 자식요소 선택하기
const list = document.querySelector(".list");
const children = list.children;
console.log(children);

// 부모요소 선택하기
const item2 = document.querySelector(".item2");
console.log(item2.parentElement);
console.log(item2.closest("main"));

// 형제요소 선택하기
console.log(item2.previousElementSibling);
console.log(item2.nextElementSibling);