/*
    동적타이핑 (dynamic typing)
    : 실행시간(runtime)에 변수의 타입이 결정되고 변경도 가능
    : 인터프리터 언어의 특성
*/

let l;
console.log(typeof l); // undefined

l = 1;
console.log(typeof l); // number

l = 'hello';
console.log(typeof l); // string

l = false;
console.log(typeof l); // boolean

l = Symbol();
console.log(typeof l); // symbol, 기본타입

l = {};
console.log(typeof l); // object

l = null;
console.log(typeof null); // object

l = [];
console.log(typeof l); // object

l = /[abc]/;
console.log(typeof l); // object

l = function() {};
console.log(typeof l); // function


const obj = {};
console.log(obj instanceof Object); // true
console.log(obj instanceof Array); // false
console.log(obj instanceof Function); // false

const obj2 = null;
console.log(obj2 instanceof Object); // false

const func = function() {};
console.log(func instanceof Object); // true
console.log(func instanceof Function); // true

// 결론)
// 모든 function은 object, 역은 성립하지 않음
