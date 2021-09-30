/* 
  속성값 알아내기
  .getAttribute()
  - 요소의 속성값 구하는 함수

  속성값 변경하기
  .setAttribute(변경할 속성명, 변경할 속성값)

  HTML 텍스트 내용 알아내기
  선택자.innerText

  HTML 텍스트 내용 변경
  선택자.innerText = "변경할 텍스트";
*/

// getAttribute
const link = document.querySelector("a");
const link_href = link.getAttribute("href");
console.log(link_href);

const new_href = "http://daum.net";
link.setAttribute("href", new_href);

// innerText
link.innerText = "다음";