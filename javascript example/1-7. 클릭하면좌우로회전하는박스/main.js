const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box = document.querySelector("#box");
const deg = 45;
let num = 0;

btnLeft.addEventListener("click", (e) => {
    e.preventDefault();
    // 박스를 왼쪽으로 회전
    // 기준이 필요
    num++;
    box.style.transform = `rotate(${deg * num}deg)`;
    console.log(box.style.transform);
});

btnRight.addEventListener("click", (e) => {
    e.preventDefault();
    // 박스를 왼쪽으로 회전
    // 기준이 필요
    num--;
    box.style.transform = `rotate(${deg * num}deg)`;
    console.log(box.style.transform);
});
