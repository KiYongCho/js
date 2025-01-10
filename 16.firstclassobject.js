/*
    일급객체 (first class object) : 값으로 사용할 수 있는 객체
    - 함수는 일급객체
*/

const func = function() {
    console.log('hello');
};

const main = function(f1, f2) {
    f1();
    f2();
}

main(func, func); // hello hello

const add = function(a, b) {
    // arguments는 함수 호출시의 인자들의 정보를 가진 유사배열객체
    // 유사배열객체 : 객체인데 배열처럼 사용할 수 있는 객체 (length프라퍼티가 있음)
    console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
    console.log(arguments.length); // 2
    // caller는 비표준 프라퍼티이므로 사용을 권장하지 않음
    console.log(add.caller); // [Function (anonymous)]
    console.log(arguments.callee); // [Function: add]
    console.log(add.name); // add (함수명)
    console.log(add.prototype); // {} (함수의 prototype)
};
add(1, 2);

// Object.getOwnPropertyDescriptors : 프라퍼티 디스크립터들을 조회
// Object.getOwnPropertyDescriptor : 프라퍼티 디스크립터를 조회
// add는 함수 = 일급객체 => 함수 일급객체의 프라퍼티의 디스크립터를 조회
console.log(Object.getOwnPropertyDescriptors(add));
/*
// 프라퍼티는 데이터프라퍼티와 접근자프라퍼티로 나뉨
// 프라퍼티 수 : 5
// 프라퍼티마다 디스크립터 객체를 가짐
// 디스크립터 객체는 아래와 같은 프라퍼티를 가짐
// value: 프라퍼티의 값 (데이터프라퍼티는 value를 가짐)
// writable : 프라퍼티의 값 수정 가능 여부
// enumerable : 프라퍼티 열거 가능 여부
// configurable : 프라퍼티의 삭제 가능 여부
{
  length: { value: 2, writable: false, enumerable: false
            , configurable: true },
  name: { value: 'add', writable: false, enumerable: false
            , configurable: true },
  arguments: { value: null, writable: false, enumerable: false
                , configurable: false },
  caller: { value: null, writable: false, enumerable: false
            , configurable: false },
  prototype: { value: {}, writable: true, enumerable: false
            , configurable: false }
}
*/

const person = {
    name: '홍길동',
    age: 20
};

console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: { value: '홍길동', writable: true, enumerable: true, configurable: true },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
}
*/
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
/*
{ value: '홍길동', writable: true, enumerable: true, configurable: true }
*/

// 모든 객체는 __proto__ 라는 프라퍼티를 가짐
// __proto__는 prototype의 참조를 저장하고 있는 프라퍼티
console.log(person.__proto__ === Object.prototype); // true
// hasOwnProperty : 직접 생성한 프라퍼티인지 여부
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // true
console.log(person.hasOwnProperty('__proto__')); // false

const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
























