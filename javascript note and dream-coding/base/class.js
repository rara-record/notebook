'use strict';
// Object-oriendted programming
// class: template
// Javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const bora = new Person('bora', 20);
console.log(bora);
console.log(bora.name); // bora
console.log(bora.age); // age
bora.speak(); // bora: hello!


// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //if (value < 0) {
        //   throw Error ('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age); // 0



// 3. Fields (public, private)
// Too Soon!
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// Too Soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding


// 5. 상속 & 다양성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// Shape 연장 Rectangle에 포함
class Rectangle extends Shape {}
class Triangle extends Shape {
    // 필요한 것 재정의 : 오버라이딩(overriding)
    draw() {
        super.draw(); // 공통적으로 정의한 draw도 호출
        console.log(`Triangle`); // Triangle
    }    
    getArea() {
        return (this.width * this.height) / 2;
    }    

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

// rectangle 직사각형
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

// triangle 삼각형
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of
console.log(triangle.getArea()); // 200
console.log(triangle.toString()); // // Triangle: color: red



// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t