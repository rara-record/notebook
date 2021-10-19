const wrap = document.querySelector('#wrap');
const box = document.querySelector('article');


wrap.addEventListener('click', () => {
    // contains : on클래스가 wrap에 있는지 판별 - true/false
    let isOn = wrap.classList.contains("on");
    console.log(isOn);

    if (isOn) {
        wrap.classList.remove("on");
    } else {
        wrap.classList.add("on");
    }

    //(isOn) ? wrap.classList.remove("on") : wrap.classList.add("on");
    //wrap.classList.toggle("on");
});

/*
    if() {
        // 조건이 참일때
    } else {
        // 거짓일때
    } 
*/