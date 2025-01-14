/*
    배열 (Array)
    [자바스크립트 배열의 특징]
    1. 어떤 타입의 값도 저장 가능
    2. 배열의 크기가 동적으로 늘어남 (크기를 지정할 필요가 없음)
    3. 값을 인덱스에 연속적으로 저장할 필요가 없음
    4. 유사배열객체나 이터러블을 배열로 변환 가능
*/

// 배열의 크기, 인덱스를 통한 요소 접근
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[2]);

// 동적 배열 요소 추가
arr1[5] = 6;
console.log(arr1.length); // 6
console.log(arr1);

arr1[100] = 101;
console.log(arr1.length); // 101
console.log(arr1); // 희소배열 (sparse array)

// 배열 생성법

const arr3 = [1, 2, 3, 4, 5]; // 배열 리터럴

const arr4 = new Array(10); // Array생성자함수, 크기가 10인 배열
console.log(arr4.length);
console.log(arr4);

const arr5 = new Array(1, 2, 3); // Array생성자함수, 크기가 3인 배열
console.log(arr5.length);
console.log(arr5);

const arr6 = Array.of(1); // Array.of메소드
console.log(arr6.length); // 1
console.log(arr6); // [1]

const arr7 = Array.of(1, 2, 3); // Array.of메소드
console.log(arr7.length); // 3
console.log(arr7); // [1, 2, 3]

// Array.from 인자로 유사배열객체
const arr8 = Array.from({length:2, 0:'a', 1:'b'});
console.log(arr8.length); // 2
console.log(arr8); // ['a', 'b']

// Array.from 인자로 이터러블
const arr9 = Array.from('Hello');
console.log(arr9.length); // 5
console.log(arr9); // ['H', 'e', 'l', 'l', 'o']

// 배열 요소 삭제
const arr10 = [1, 2, 3, 4, 5];

delete arr10[0];
console.log(arr10.length); // 5
console.log(arr10); // [, 2, 3, 4, 5]

arr10.splice(1, 1); // 1번 인덱스에서 1개 요소를 제거
console.log(arr10.length); // 4
console.log(arr10); // [, 3, 4, 5]

arr10.splice(0, 1); // 0번 인덱스에서 1개 요소를 제거
console.log(arr10.length); // 3
console.log(arr10); // [3, 4, 5]

// 0번 인덱스에서 1개 요소를 제거하고 2와 3을 추가
arr10.splice(0, 1, 2, 3);
console.log(arr10.length); // 3
console.log(arr10); // [2, 3,  4, 5]





































