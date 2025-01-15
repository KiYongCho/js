// 정규표현식 객체 생성
const regExp = /abc/i; // 대소문자 구별없이 a가 오고 b가 오고 c가 오는 패턴
const regExp1 = new RegExp(/abc/i);
const regExp2 = new RegExp(/abc/, 'i');
const regExp3 = new RegExp('abc', 'i');
console.log(regExp.test('Abc')); // true, 패턴 만족 여부 반환

// 정규표현식 메소드
const str = 'ab abc ab';
const regExp4 = /ab/g;
console.log(regExp4.test(str)); // true
console.log(regExp4.exec(str)); // [ 'ab', index: 3, input: 'ab abc ab', groups: undefined ]
console.log(str.match(regExp4)); // [ 'ab', 'ab', 'ab' ]
console.log(str.replace(/abc/, '')); // ab  ab

// 패턴 문자

const str2 = 'a ab aa abc aaa ac abcd';

// . : 문자 하나
console.log(str2.match(/a./g)); // ['a ','ab','aa','ab','aa','a ','ac','ab']

// {} : 반복 회수
console.log(str2.match(/a{2}/g)); // ['aa', 'aa']
console.log(str2.match(/a{2,3}/g)); // ['aa', 'aaa']

// + : 1문자 이상
console.log(str2.match(/a+/g)); // ['a','a','aa','a','aaa','a','a']

// ? : 0문자 또는 1문자
// [
//   'a', '',  'a', '', '', 'a', 'a',
//   '',  'a', '',  '', '', 'a', 'a',
//   'a', '',  'a', '', '', 'a', '',
//   '',  '',  ''
// ]
console.log(str2.match(/a?/g));

// | : or
console.log(str2.match(/abc|ab/g)); // [ 'ab', 'abc', 'abc' ]
// ab가 먼저 검색되므로 abc는 안나옴
console.log(str2.match(/ab|abc/g)); // [ 'ab', 'ab', 'ab' ]

// [-] : 범위
console.log(str2.match(/[a-b]/g));
// [
//     'a', 'a', 'b', 'a',
//     'a', 'a', 'b', 'a',
//     'a', 'a', 'a', 'a',
//     'b'
// ]

// str2 = 'a ab aa abc aaa ac abcd';

console.log(str2.match(/[0-9]/g)); // null, 숫자 하나, = \d

console.log(str2.match(/[a-zA-Z]/g)); // 영문자 하나
/*
[
  'a', 'a', 'b', 'a', 'a',
  'a', 'b', 'c', 'a', 'a',
  'a', 'a', 'c', 'a', 'b',
  'c', 'd'
]
*/

console.log(str2.match(/[a-zA-Z_]/g)); // 워드(영대소문자 또는 _) 하나 = \w
/*
[
  'a', 'a', 'b', 'a', 'a',
  'a', 'b', 'c', 'a', 'a',
  'a', 'a', 'c', 'a', 'b',
  'c', 'd'
]
*/

// \s : 공백문자
console.log(str2.match(/\s/g)); // [ ' ', ' ', ' ', ' ', ' ', ' ' ]

// ^ : 시작
console.log(str2.match(/^[abc]/g)); // ['a']

// [^] : not
console.log(str2.match(/[^abc]/g));
/*
[
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  'd'
]
*/

// $ : 끝
console.log(str2.match(/[cd]$/g)); // ['d']


// 플래그
// i : ignorecase, 대소문자 구별없음
// g : global, 전체 영역에서 탐색
// m : multi line, 줄마다 탐색
// 줄바꿈문자 : windows (\r\n), unix/linux (\n)
const str3 = 'a ab abc \r?\nabc ab a';
// [ 'ab', index: 2, input: 'a ab abc \r?\nabc ab a', groups: undefined ]
console.log(str3.match(/AB/i));
console.log(str3.match(/AB/ig)); // [ 'ab', 'ab', 'ab', 'ab' ]
console.log(str3.match(/^AB/igm)); // ['ab']






