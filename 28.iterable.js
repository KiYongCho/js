// iterable : 반복시킬 대상
// iterator : 반복 대상을 반복하는 반복자

const arr = [1, 2, 3];

// 배열은 Array.prototype의 Symbol.iterator
// 메소드를 상속받은 이터러블
console.log(Symbol.iterator in arr); // true

// Symbol.iterator메소드를 호출하여 이터레이터를 획득
const iterator = arr[Symbol.iterator]();

// 이터레이터에 있는 next는 반복대상의 다음번 요소를 반환
console.log('next' in iterator); // true
// value : 요소의 값, done : 반복 종료 여부
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for ~ of : 이터러블의 요소 수만큼 반복
for (ele of arr) {
    console.log(ele); // 1 2 3
}

// 스프레드 문법 : 이터러블의 요소들을 흩어 뿌림
console.log([...arr]); // [1, 2, 3]
console.log([...arr, 4, 5]); // [1, 2, 3, 4, 5]
console.log([...'Hello']); // ['H', 'e', 'l', 'l', 'o']
console.log([...[1,2], ...[3,4,5]]); // [1, 2, 3, 4, 5]
// 객체는 이터러블이 아니지만 스프레드 문법을 사용 가능
console.log({...{x:1, y:2}}); // {x:1, y:2}
// 객체 스프레드시 프라퍼티가 중복되면 마지막 프라퍼티만 남는다
console.log({...{x:1, y:2}, ...{y:3, z:4}}); // {x:1, y:3, z:4}

// 구조분해 할당 (destructuring assignment)
const [first, second] = [1, 2];
console.log(first, second);

// Rest요소를 사용한 구조분해할당
const [x, ...y] = [1, 2, 3];
console.log(x, y);

// 구조분해할당시 기본값 설정
const [aa, bb=2, cc] = [1,,3];
console.log(aa, bb, cc);

// 문자열 구조분해할당
const [a, b, c, d, e] = 'Hello';
console.log(a, b, c, d, e);
const [a1, b1, c1, d1, e1] = 'Hi';
console.log(a1, b1, c1, d1, e1);

// 문자열 객체의 length 프라퍼티 추출
const str = 'Hello';
const {length} = str;
console.log(length);

// 객체 구조분해할당
const person = {
    name: '홍길동',
    age: 30
};

const {name, age} = person;
console.log(name, age);
const {nvar, avar} = person;
console.log(nvar, avar);

const persons = [
    {pname: '홍길동', page: 20},
    {pname: '강감찬', page: 30},
    {pname: '이순신', page: 40}
];

const [firstPersonObj,,] = persons;
console.log(firstPersonObj);

const [,{pname},] = persons;
console.log(pname);

const [,,{page}] = persons;
console.log(page);

const user = {
    uname: '홍길동',
    addr: {
        city: '서울',
        dong: '역삼'
    }
};

const {uname, addr:{city, dong}} = user;
console.log(`${uname}은 ${city}시 ${dong}동에 삽니다!`);














