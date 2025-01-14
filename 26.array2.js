/*
    고차함수 (high order function) : 함수를 인자로 전달받는 함수
    콜백함수 (callback function) : 인자로 전달되는 함수
*/

// 배열 메소드

const arr = [1, 10, 9, 4, 5];

console.log(Array.isArray(arr));
console.log(arr.indexOf(10));
console.log(arr.includes(9));

// stack
console.log(arr.push(7)); // 배열 맨 뒤에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.pop()); // 배열 맨 뒤의 요소를 제거하고 제거된 요소를 반환

// queue
console.log(arr.unshift(2)); // 배열 맨 앞에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.shift()); // 배열 맨 앞의 요소를 제거하고 제거된 요소를 반환

console.log(arr.concat(3, 8)); //  배열 3, 8 추가

console.log(arr.splice(1, 2)); // 1번 인덱스에서 2개 요소 제거
console.log(arr.splice(1, 2, 3, 4)); // 1번 인덱스에서 2개 요소 제거한 후 3, 4 삽입

console.log(arr.slice(1, 3)); // 1번 인덱스에서 3번 인덱스전까지의 부분 배열

console.log(arr.join()); // 요소들을 붙인 문자열 반환

console.log(arr.reverse()); // 요소 순서를 180도 회전

console.log(arr.fill(10)); // 모든 요소를 10으로 채움

const arr2 = [[1, 2], [3, 4]];
console.log(arr2.flat()); // 평탄화, [1, 2, 3, 4]


// 배열 고차 함수
const arr3 = [1, 2, 3, 4, 5];

// 배열의 각 요소마다 콜백함수를 실행하고 반환 없음
const forEachArr = arr3.forEach(function(ele) {
    console.log(ele);
});
console.log(forEachArr);

// 배열의 각 요소마다 콜백함수를 실행하고 결과 배열을 반환
const mapArr = arr3.map(function(ele) {
    return ele ** ele;
});
console.log(mapArr);

// 배열의 각 요소마다 콜백함수를 실행하고 콜백함수의
// 결과가 true인 요소들의 배열을 반환
const filterArr = arr3.filter(function(ele) {
    return ele % 2;
});
console.log(filterArr);

// 배열의 각 요소에 콜백함수를 실행하고 실행 결과를
// 다음번 콜백함수 호출시에 전달
// acc:누적변수, curr:현재요소
// acc=0, curr=1
// acc=1, curr=2
// acc=3, curr=3
// acc=6, curr=4
// acc=10, curr=5
// acc=15
const sum = arr3.reduce(function(acc, curr) {
    return acc + curr;
}, 0); // acc의 초기값 0
console.log(sum);

// 콜백함수의 결과가 true인 경우가 있으면 true
const some = arr3.some(function(ele) {
    return ele == 5;
});
console.log(some);

// 콜백함수의 결과가 모두 true인 경우 true
const every = arr3.every(function(ele) {
    return ele < 10;
});
console.log(every);

// 콜백함수의 결과가 true인 첫번째 요소 리턴
const find = arr3.find(function(ele) {
    return ele < 3;
});
console.log(find);

// 콜백함수의 결과가 true인 첫번째 요소의 인덱스 리턴
const findIndex = arr3.findIndex(function(ele) {
    return ele > 3;
});
console.log(findIndex);

// sort 고차 함수
const numbers = [4, 2, 9, 1, 5];

numbers.sort((a, b) => a - b); // 오름차순 정렬
console.log(numbers);
numbers.sort((a, b) => b - a); // 내림차순 정렬
console.log(numbers);

const words = ['banana', 'apple', 'cherry', 'peach'];
words.sort();
console.log(words); // 오름차순 정렬
words.sort((a, b) => (a<b ? 1 : -1));
console.log(words); // 내림차순 정렬