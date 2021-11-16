'use strict';

let string;

function solution(str) {
   string = -1;
   
   // if 조건 충족될때까지 '무한반복'
   while (true) {
      string++;
      if (str[string] === undefined) return string;
   }
}
const stringLength = solution('498798465465432154'); // 무작위로침
console.log(stringLength);


