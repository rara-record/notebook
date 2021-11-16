'use strict';

let container = document.querySelector('#container');
const input = document.querySelector('input');

let value = input.value * 1;
console.log(value);

for (let i = 1; i < value + 1; i++) {
   
   // const div = document.createElement('div');
   // div.innerText = i;
   // container.append(div);

   container.innerHTML += `<div>${i}</div>`
}
