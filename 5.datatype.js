/*
    자바스크립트의 데이터 타입

    1. 기본타입 (primitive type)
    1) number : 64비트 실수
    2) string : 문자, 문자열 구분 없이 모두 문자열
    3) boolean : true, false
    4) undefined : 타입이자 값, 초기화 안된 상태
    5) null : 타입이자 값, null로 초기화된 상태
    6) Symbol (ES6) : 중복되지 않은 값을 만들기 위한 타입

    2. 참조타입 (reference type) : 나머지 모두
*/


// primitive type 6가지

let num1 = 5;
console.log(num1);

let num2 = 3.14;
console.log(num2);

let num3 = 0b0010;
console.log(num3);

let num4 = 0o010;
console.log(num4);

let num5 = 0x01;
console.log(num5);

let num6 = Infinity;
console.log(num6);

let num7 = -Infinity;
console.log(num7);

let num8 = NaN;
console.log(num8);

let str1 = 'hong';
console.log(str1);

let str2 = "kil dong";
console.log(str2);

let str3 = `${str1} ${str2}`;
console.log(str3);

let bool1 = true;
console.log(bool1);

let bool2 = false;
console.log(bool2);

let ud = undefined;
console.log(ud);

let nu = null;
console.log(nu);

let sb = Symbol();
console.log(sb);


// reference type

const obj = {};
console.log(obj);

const arr = [];
console.log(arr);

let re = /abc/;
console.log(re);

let func = function() {};
console.log(func);

// ES6의 클래스 문법
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('홍길동', 20);
console.log(person.name, person.age);
console.log(typeof person);














