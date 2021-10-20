
{
  // Q1. array를 string으로 반환하기 
  // join: 배열의 모든 원소를 연결해 하나의 문자열로 만들어 반환한다.

  const fruits = ['apple', 'banana', 'orange'];
  const join = fruits.join(); 
  console.log(join); // apple,banana,orange
}


{
  // Q2. string을 array로 반환하기
  // split(기준점, length): 해당 문자열을 분리하여 배열로 반환한다.

  const fruits = '🍎, 🥝, 🍌, 🍒';

  const split = fruits.split(","); 
  console.log(split); // ['🍎', ' 🥝', ' 🍌', ' 🍒']

  const split2 = fruits.split("," , 2);
  console.log(split2); // ['🍎', ' 🥝'] 
}


{
  // Q3. 배열 뒤집기
  // reverse: 배열을 원소 순서를 역순으로 변형한다. 원본을 손상한다.(참조반환으로 인하여)

  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // (5) [5, 4, 3, 2, 1]
  console.log(array); // (5) [5, 4, 3, 2, 1] : 참조 반환으로 인하여
}


{
  // Q4. 처음 두 요소를 제외하고, 새 배열 만들기 (3, 4, 5만 가져오기)
  // slice(시작, 끝+1) : 배열 분리 (원본 배열 유지, 새로운 배열 반환), 배열에서 원하는 부분만 리턴해서 받아오고 싶을때 쓴다.

  const array = [1, 2, 3, 4, 5];
  const slice = array.slice(2, 5);
  console.log(slice); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]

  // splice를 쓰지 못하는 이유 
  // splice(시작, 길이, 추가) : 원소 제거, 제거 후 추가 (원본 배열 수정)

  const array2 = [1, 2, 3, 4, 5];
  const splice = array2.splice(2, 3);
  console.log(splice); // (2) [3, 4, 5]
  console.log(array2); // (3) [1, 2]
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
  new Student('A', 30, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 90),
];


{
  // Q5. 점수가 90점인 학생 찾아보기.
  // find: 콜백함수에서 요구하는 원소를 찾기 위해, 배열 안의 원소를 순서대로 탐색하면서 '최초'로 찾은 배열의 원소를 반환한다. 없는 경우 undefined.

  const find = students.find((student) => student.score === 90);
  console.log(find); // Student {name: 'C', age: 30, enrolled: true, score: 90}
}


{
  // Q6. 재학생들을 새로운 배열로 만들기.
  // filter : 콜백함수 테스트를 통과하는(true만) 모든 원소를 새로운 배열로 반환

  const filter = students.filter((studnet) => studnet.enrolled);
  console.log(filter); 
}


{
  // Q7. 학생들의 성적을 새로운 배열로 만들기.
  // map : 배열 내의 모든 원소를 '순회'하며, 콜백 함수가 실행되어 그 '결과'를 새로운 배열로 반환

  const map = students.map((studnet) => studnet.score);
  console.log(map); // [45, 80, 90, 66, 88]
}


{ 
  // find, filter, map 비교

  const find = students.find((student) => student.age < 30);
  console.log(find); 
  // Student {name: 'B', age: 28, enrolled: false, score: 80}

  const filter = students.filter((student) => student.age < 30);
  console.log(filter); 
  // [ Student {name: 'B', age: 28, enrolled: false, score: 80}, 
  // Student {name: 'E', age: 18, enrolled: true, score: 90}, ]

  const map = students.map((student) => student.age < 30);
  console.log(map);
  // [false, true, false, false, true]

  const map2 = students.map((student) => student.age);
  console.log(map2);
  // [30, 28, 30, 40, 18]
}


{
  // Q8. 50점 이하의 학생이 있는지 확인g하기

  // some : 배열에서 하나라도 조건에 만족되는 것이 있다면, true를 반환 
  const some = students.some((student) => student.score < 50);
  console.log(some); // true

  // every : 배열에 있는 모든 요소들이 조건에 충족 된다면, true를 반환 
  const every = students.every((student) => student.score < 50);
  console.log(every); // false
}


{
  // Q9. 평균 점수 계산하기

  // reduce : 배열에 있는 모든 요소들의 값을 누적한다. 리턴 값이 있어야함
  const reduce = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(reduce / students.length); // 73.8
}


{
  // Q10. 50점 이상인 점수를 문자열 변환하여 만들기.

  const result = students
  .map((student) => student.score) // 학생들을 모두 점수로 변환한 다음
  .filter((score) => score >= 50) // 그 점수들 가운데 50점 이상인 원소를 필터링하여
  .join(); // 문자열로 반환한다
  console.log(result); // 80,90,66,90
}


{
  // Q11. 점수를 오름차순으로 문자열로 변환하여 정렬하기
  
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b) // 작은 것부터
  // .sort((a, b) => b - a) // 높은 것부터
  .join();
  console.log(result);
}
