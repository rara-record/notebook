'use strict';

let button = container.querySelector('button');
let text = container.querySelector('#text');

button.addEventListener('click', () => {
   text.classList.toggle('on');
   let boolean = text.classList.contains('on');
   boolean === true ? text.style.color = '#ff0000' : text.style.color = '#0000ff'
});



