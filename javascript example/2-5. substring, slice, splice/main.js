
{
const string = '김보라+코코=코코와 함께 다정한 우리가족';
const array = ['김보라', '정주원', '박은희', '김나윤'];

// length : 문자열의 갯수를 반환

console.log(`string.length: ${string.length}`); 
console.log(`array.length: ${array.length}`);
}


{ 
/* string.substring : string만 가능 */

const string = '김보라+코코=코코와 함께 다정한 우리가족';

const substring = string.substring(7, 13);
console.log(`string.substring: ${substring}`); 

// string.substring(startIndex, endIndex+1) : 시작 인덱스로 부터 종료 인덱스 '전' 까지 문자열을 반환한다. 
}


{
/* array.slice : string + array 가능 */

const string = '김보라+코코=코코와 함께 다정한 우리가족';
const array = ['김보라', '정주원', '김나윤', '박은희'];

const stringSlice = string.slice(-8);
const arraySlice = array.slice(1, 3);
console.log(`string.slice: ${stringSlice}`);
console.log(`array.slice: ${arraySlice}`);

// array.slice(startIndex, endIndex+1) : 배열의 특정 위치의 원소를 분리하여, 새로운 배열로 반환한다. startIndex위치나 endIndex가 생략될 경우 문자열의 나머지 전체를 구하고, 음수일 경우 문자열 끝에서 endIndex갯수만큼 잘라낸다. 배열에서 원하는 부분만 리턴해서 받아오고 싶을때 쓴다. [원본 배열은 수정되지 않는다.] 
}


{
/* array.splice : array만 가능 */
const array = ['김보라', '정주원', '박은희', '김나윤'];

// 특정 원소를 제거 후, 다른 값으로 대체
const splice = array.splice(2, 2, '코코');
console.log(`splice: ${splice}`);
console.log(array);

// array.splice(startIndex, deleteLength, [replaceItem]) : 배열의 특정 위치의 원소를 제거하거나, 제거후 새 원소를 추가한다. startIndex가 음수일 경우, slice랑 동일하다. 삭제된 원소가 없다면 빈 배열이 반환된다. [원본 배열을 수정한다]
}