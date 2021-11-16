


function oneMore() {
    console.log('one more')
}
function run() {
    console.log('run run'); 
    setTimeout(() => {
        console.log('wow');
    }, 0)
    new Promise((resolve) => {
        resolve("hi");
    })
    .then(console.log);
    oneMore();
}
setTimeout(run, 5000) 

/*
    실행 결과: run run => one more => hi => wow
*/ 


// 함수를 선언했다 : 메모리에 올렸다 
// 메모리 : 임시 저장장치
// 호출 스택 : 함수 호출 순서대로 쌓이고, 역순으로 실행됨. 완료되면 스택에서 빠짐
// 코드가 백그라운드로 가면, 호출스택과 백그라운드가 동시에 실행된다
// 태스크큐는 호출스택에 비어있어야 이동한다. 비어있지 않으면 이동하지 못함
// setTimeout => 0초면 바로 실행되는가? 아님. 무조건 백그라운드로 감
// promise는 then을 만나는 순간 비동기로 간다
// 백그라운드는 먼저 끝나는 쪽이 걍 먼저 실행
// Promise와 setTimeout 중 Promise가 더 우선순위로 실행