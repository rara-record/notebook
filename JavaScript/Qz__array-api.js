// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  
  /* join: 배열의 모든 원소를 연결해 하나의 문자열로 만들어 반환한다. 
      => 배열을 string으로 변환.
  */

  const result = fruits.join(); 
  console.log(result); // apple,banana,orange
}

// Q2. make an array out of a string 
{
  /*
    split: 해당 문자열을 분리하여 배열로 반환한다. 
    string.split([separator[, limit]])
  */ 
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split("," , 2); 
  console.log(result); // (2) ["🍎", " 🥝"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{

  /*
    reverse: 배열을 원소 순서를 역순으로 변형한 뒤 그 배열의 참조를 반환한다.
  */ 
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // (5) [5, 4, 3, 2, 1]
  console.log(array); // (5) [5, 4, 3, 2, 1] : 참조 반환으로 인하여
}

// Q4. make new array without the first two elements
{
  /* 
    - 새로운 배열을 만들어야 하므로 splice는 사용하지 못함 - 

    splice: 배열 자체를 수정한다.
    array.splice(startIndex[, deleteLength[, ...[, replaceItem]]])
  
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0,2);
  console.log(result); // (2) [1, 2]
  console.log(array); // (3) [3, 4, 5]
  */ 

  /*
    slice: 배열에서 원하는 부분만 리턴해서 받아오고 싶을때 쓴다.
    array.slice(startIndex[, endIndex])
  */ 

  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);
  console.log(result);  // (3) [3, 4, 5]
  console.log(array); // (5) [1, 2, 3, 4, 5]

}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{

  /* find: 콜백함수를 만들어서 전달해야한다, true시 멈추고 리턴, 리턴시 불리언 타입*/
  const result = students.find((student) => student.score === 90);
  console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}

  /* const result = students.find(function(student) {
    return student.score === 90;
  });
  */
}

// Q6. make an array of enrolled students
{
  /* filter: 콜백 함수 테스트 통과하는 원소 반환(true), 새로운 배열로 반환*/
  const result = students.filter((student) => student.enrolled);
  console.log(result); // (3) [Student, Student, Student]
}


// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88] : 점수만 들어 있는 새로운 배열을 만들어라.
{
  /* map: 배열 안에 들어있는 요소 각각을 콜백함수를 거쳐서, 다른 것으로 변환해줌 */
  const result = students.map((student) => student.score);
  console.log(result); // (5) [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
  /* some : 배열에서 하나라도 조건에 만족되는 것이 있다면, true를 반환 */ 
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  /* every : 배열에 있는 모든 요소들이 조건에 충족 된다면, true를 반환 */ 
  const result2 = students.every((student) => student.score < 50);
  console.log(result2); // false
}

// Q9. compute students' average score
{
  /* reduce : 배열에 있는 모든 요소들의 값을 누적하는 api, 리턴 값이 있어야함*/
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length); // 73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score) // 학생들을 모두 점수로 변환한 다음
  //.filter((score) => score >= 50) // 그 점수들 가운데 50점 이상인 원소를 필터링하여
  .join(); // 문자열로 반환한다
  console.log(result); // 45,80,90,66,88
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b) // 작은 것부터
  // .sort((a, b) => b - a) // 높은 것부터
  .join();
  console.log(result);
}
