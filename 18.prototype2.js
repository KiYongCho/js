// 프로토타입 확장

// Person 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    };
}

// 프로토타입 확장
Person.prototype.getAge = function() {
    return this.age;
};

const person1 = new Person('홍길동', 20);
console.log(person1.getName()); // 홍길동, 인스턴스 메소드 사용
console.log(person1.getAge()); // 20, 프로토타입 메소드 사용

const person2 = new Person('강감찬', 30);
console.log(person2.getName()); // 강감찬
console.log(person2.getAge()); // 30

console.log(Person.getName == person1.getName); // false
console.log(person1.getName == person2.getName); // false
console.log(Person.getAge == person1.getAge); // false
console.log(person1.getAge == person2.getAge); // true
console.log(person1.__proto__ == person2.__proto__); // true


// 프로토타입 체인

function Car(company, model) {
    this.company = company;
    this.model = model;
}

// car객체, Car.prototype, Object.prototype 으로 프로토타입 체이닝
// => Object.prototype을 상속받은 Car.prototype을 상속받은 car객체
const car = new Car('BMW', '520D');
console.log(car.__proto__ == Car.prototype); // true
console.log(Car.prototype.__proto__ == Object.prototype); // true
console.log(car.__proto__.__proto__ == Object.prototype); // true


// 프로토타입 교체
function Chicken(name) {
    this.name = name;
}
Chicken.prototype.sound = function() {
    console.log(this.name + "가 꼬끼오 소리를 냅니다!");
};
function Duck(name) {
    this.name = name;
}
Duck.prototype.sound = function() {
    console.log(this.name + "가 꽥꽥 소리를 냅니다!");
};
const chicken1 = new Chicken("오골계");
chicken1.sound();
const duck1 = new Duck('청둥오리');
duck1.sound();

// 프로토타입 교체
// 자바스크립트는 원하면 프로토타입 교체를 통해 상속구조를 변경할 수 있음
Chicken.prototype = Duck.prototype;

const chicken2 = new Chicken("수탉");
chicken2.sound();

















