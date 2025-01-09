// 기본타입 값은 불변(immutable)
let num = 100;
let numStr = num.toString();
console.log(typeof numStr, numStr); // string 100
console.log(typeof num, num); // number 100

console.log(typeof String(1)); // string
console.log(typeof String(NaN)); // string
console.log(typeof String(true)); // string
console.log(typeof Number('1')); // number
console.log(typeof Number(true)); // number
console.log(typeof Boolean('')); // boolean
console.log(typeof Boolean('a')); // boolean
console.log(typeof Boolean(NaN)); // boolean
console.log(typeof Boolean({})); // boolean
console.log(typeof Boolean([])); // boolean

console.log((1).toString()); // 1
console.log(NaN+''); // NaN
console.log(+'0'); // 0
console.log(+true); // 1
console.log(true*5); // 5
console.log(!!'x'); // true
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!{}); // true

console.log('10'+2); // 102
console.log(10*'10'); // 100
console.log(!0); // true

console.log(0+''); // 0
console.log(-0+''); // 0
console.log(NaN+''); // NaN
console.log(Infinity+''); // Infinity 
console.log(-Infinity+''); // -Infinity
console.log(true+''); // true
console.log(false+''); // false
console.log(null+''); // null
console.log(undefined+''); // undefined
// console.log((Symbol())+''); // TypeError
console.log(({})+''); // [object Object]
console.log(Math+''); // [object Math]
console.log([]+''); // 
console.log([10,20]+''); // 10,20
console.log((function(){})+''); // function(){}
console.log(Array+''); // function Array() {[nateive code]}
console.log(1-'1'); // 0
console.log(1*'10'); // 10
console.log(1/'one'); // NaN
console.log('1'>0); // true
console.log(+''); // 0
console.log(+'0'); // 0
console.log(+'1'); // 1
console.log(+'string'); // NaN
console.log(+true); // 1
// console.log(+Symbol()); // TypeError
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10,20]); // NaN
console.log(+(function(){})); // NaN
console.log(+false); // 0
console.log(+undefined) // NaN
console.log(!null); // true
console.log(!0); // true
console.log(!-0); // true
console.log(!NaN); // true
console.log(!''); // true

// 단축 평가 (Short-Circuit Evaluation)
console.log('Cat'&&'Dog'); // Dog
console.log('Cat'||'Dog'); // Cat
























