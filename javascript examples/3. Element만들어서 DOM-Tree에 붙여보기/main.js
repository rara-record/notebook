
let container = document.querySelector('#container');

const fristSpan = document.createElement('span');
const secondSpan = document.createElement('span');

fristSpan.innerText = "안녕";
secondSpan.innerText = "하세요";

container.append(fristSpan, secondSpan);