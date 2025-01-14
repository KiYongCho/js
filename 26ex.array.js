// 배열 고차함수 실습

const arr1 = [1, '2', 3, '4', 5, '6', 7, '8'];

// 1. arr1 배열의 모든 요소를 숫자타입으로 변경 (forEach 사용)

// 2. arr1 배열의 모든 요소를 3배한 배열을 출력 (map 사용)

// 3. arr1 배열의 요소 중 5의 배수가 있는지 확인 (some 사용)

// 4. arr1 배열의 모든 요소가 짝수인지 확인 (every 사용)

// 5. arr1 배열의 모든 요소의 합을 출력 (reduce 사용)

// 6. arr1 배열에서 3의 배수들만 추출하여 배열 생성해 출력 (filter 사용)

// 7. arr1 배열에서 짝수들만 추출하여 각각 3배한 배열의 합계를 출력
//    (filter, map, reduce 사용)

























// sort
const people = [
    {name:'홍길동', age: 20},
    {name:'이순신', age: 40},
    {name:'강감찬', age: 30}
];

// 1. age 오름차순 / 내림차순 정렬
people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.age - a.age);
console.log(people);

// 2. name 오름차순 / 내림차순 정렬
people.sort((a, b) => (a.name>b.name ? 1 : -1))
console.log(people);
people.sort((a, b) => (a.name<b.name ? 1 : -1))
console.log(people);

const fruits = ['apple', 'banana', 'pineapple', 'pear'];
// 3. 문자열 길이 오름차순 / 내림차순
fruits.sort((a,b) => a.length - b.length);
console.log(fruits);
fruits.sort((a,b) => b.length - a.length);
console.log(fruits);

const nums = [5, 8, 3, 10, 1, 4];
// 4. 짝수를 앞에, 홀수를 뒤에 정렬
nums.sort((a,b) => {
    if (a%2==0 && b%2!=0) return -1; // a 짝수, b 홀수 a가 앞으로
    if (a%2!=0 && b%2==0) return 1; // a 홀수, b 짝수 b가 앞으로
    return a - b; // 둘 다 짝수이거나 둘 다 홀수 인 경우 오름차순
});
console.log(nums);

const nested = [[3,4], [1,2], [5,6], [0,1]];
// 5. 중첩배열의 첫번째 원소 기준 오름차순 정렬
nested.sort((a,b) => a[0] - b[0]);
console.log(nested);

const students = [
    {name: '홍길동', score: 65},
    {name: '이길동', score: 95},
    {name: '최길동', score: 65},
    {name: '김길동', score: 55}
];
// 6. 점수에 대해 내림차순 정렬, 점수가 같으면 이름에 대해 오름차순 정렬
students.sort((a,b) => {
    if (b.score != a.score) return b.score - a.score;
    return (a.name>b.name) ? 1 : -1;
});
console.log(students);

const items = ['item20', 'item3', 'item100', 'item1'];
// 7. item 숫자 기준으로 오름차순 정렬 (item1 item3 item20 item100)
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
// 8. 나이 기준으로 내림차순 정렬,
//    나이가 같으면 풀네임(lname+fname) 내림차순 정렬
obj.sort((a, b) => {
    if (a.age!=b.age) return b.age - a.age;
    else return a.name.lname+a.name.fname
        > b.name.lname+b.name.fname ? 1 : -1;
});
console.log(obj);