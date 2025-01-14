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

const people = [
    {name:'홍길동', age: 20},
    {name:'이순신', age: 40},
    {name:'강감찬', age: 30}
];
// age 오름차순 / 내림차순 정렬
people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.age - a.age);
console.log(people);

// name 오름차순 / 내림차순 정렬
people.sort((a, b) => (a.name>b.name ? 1 : -1))
console.log(people);
people.sort((a, b) => (a.name<b.name ? 1 : -1))
console.log(people);

const fruits = ['apple', 'banana', 'pineapple', 'pear'];
// 문자열 길이 오름차순 / 내림차순
fruits.sort((a,b) => a.length - b.length);
console.log(fruits);
fruits.sort((a,b) => b.length - a.length);
console.log(fruits);

const nums = [5, 8, 3, 10, 1, 4];
// 짝수를 앞에, 홀수를 뒤에 정렬
nums.sort((a,b) => {
    if (a%2==0 && b%2!=0) return -1; // a 짝수, b 홀수 a가 앞으로
    if (a%2!=0 && b%2==0) return 1; // a 홀수, b 짝수 b가 앞으로
    return a - b; // 둘 다 짝수이거나 둘 다 홀수 인 경우 오름차순
});
console.log(nums);

const nested = [[3,4], [1,2], [5,6], [0,1]];
// 중첩배열의 첫번째 원소 기준 오름차순 정렬
nested.sort((a,b) => a[0] - b[0]);
console.log(nested);

const students = [
    {name: '홍길동', score: 65},
    {name: '이길동', score: 95},
    {name: '최길동', score: 65},
    {name: '김길동', score: 55}
];
// 점수에 대해 내림차순 정렬, 점수가 같으면 이름에 대해 오름차순 정렬
students.sort((a,b) => {
    if (b.score != a.score) return b.score - a.score;
    return (a.name>b.name) ? 1 : -1;
});
console.log(students);

const items = ['item20', 'item3', 'item100', 'item1'];
// item 숫자 기준으로 오름차순 정렬 (item1 item3 item20 item100)
items.sort((a,b) => {
    return parseInt(a.substring(4)) - parseInt(b.substring(4));
    //return +(a.substring(4)) - +(b.substring(4));
    //return parseInt(a.slice(4)) - parseInt(b.slice(4));
});
console.log(items);

const obj = [
    {name: {fname:'길동',lname:'홍'}, age: 30},
    {name: {fname:'순신',lname:'이'}, age: 20},
    {name: {fname:'감찬',lname:'강'}, age: 40},
    {name: {fname:'영',lname:'최'}, age: 20},
    {name: {fname:'관순',lname:'유'}, age: 20}
];
// 나이 기준으로 내림차순 정렬,
// 나이가 같으면 풀네임(lname+fname) 내림차순 정렬
obj.sort((a, b) => {
    if (a.age!=b.age) return b.age - a.age;
    else return a.name.lname+a.name.fname
        > b.name.lname+b.name.fname ? 1 : -1;
});
console.log(obj);