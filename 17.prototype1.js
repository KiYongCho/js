// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    }
}

// new연산자와 함께 호출하는 함수 => 생성자 함수
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// 인스턴스 메소드 : 객체마다 getArea 메소드를 가짐 > 문제 있음!
console.log(circle1.getArea == circle2.getArea); // false


// 생성자 함수
function Circle2(radius) {
    this.radius = radius;
}

// prototype method : 프로토타입에 정의한 메소드 => 객체들이 공유
// 프로토타입 메소드 확장
Circle2.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

const circle3 = new Circle2(1);
const circle4 = new Circle2(2);

console.log(circle3.getArea == circle4.getArea); // true

// prototype, constructor, __proto__의 관계
// 1. 모든 객체는 __proto__ 프라퍼티를 가진다.
//    __proto__는 객체가 리터럴로 만들어진 경우 Object.prototype
//    을 가리키고, 객체가 생성자 함수로 만들어진 경우
//    생성자함수.prototype을 가리킨다.
// 2. 생성자함수는 prototype 프라퍼티를 가진다.
// 3. prototype은 constructor를 가진다. constructor는 
//    생성자함수를 가리킨다.

function Person(name) {
    this.name = name;
}

const hong = new Person('홍길동');

console.log(Person); // Person 생성자함수
console.log(Person.prototype); // Person 생성자함수의 prototype
console.log(Person.prototype.constructor); // Person 생성자함수
console.log(Person.prototype.__proto__); // Object 생성자함수의 prototype
console.log(hong.__proto__.constructor); // Person 생성자함수
console.log(hong.__proto__.__proto__); // Object 생성자함수의 prototype
console.log(hong.__proto__.__proto__.constructor); // Object 생성자함수
























































































