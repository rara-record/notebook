
/* 
    eventTarget.addEventListener("event명", (전달될 값) => {실행할구문});
    preventDefault()
    - 이벤트의 기본 기능을 실행하지 말라는 명령어

    선택자.innerText 
    -선택한 요소의 텍스트 불러오기 
    선택자.innerText = "변경할 텍스트"
*/

const link = document.querySelector(".btn");
const box = document.querySelector("#box");
const list = document.querySelectorAll(".list li");


// link를 클릭했을때
link.addEventListener("click", (e) => {
    e.preventDefault(); //기본링크이동금지
    console.log("링크를 클릭했습니다.");
});

// box에 마우스를 올렸을때
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "pink";
});

// box에 마우스를 떠났을때
box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "aqua";
});

for (let el of list) {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.currentTarget.innerText);
    }); 
}



