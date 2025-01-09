const hong = {};

// 프라퍼티 동적 생성
hong.name = '홍길동';
hong['first-name'] = '길동';
hong['last-name'] = '홍';
console.log(hong);

// 프라퍼티 축약 표현
let x = 1;
let y = 2;
const obj1 = {
    x,
    y
};
console.log(obj1);

// 계산된 프라퍼티명
const prefix = 'prop';
let i = 0;
const obj2 = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};
console.log(obj2);

const kang = {
    name: '강감찬',
    age: 30
};

// 동적 메소드 생성
// function을 값으로 가진 프라퍼티를 메소드라고 함
kang.getName = function() {
    return this.name;
};
kang.getAge = function() {
    return this.age;
};
console.log(kang);

// 메소드 축약 표현
const choi = {
    name: '최영',
    age: 20,
    getName() {
        console.log(this.name);
    },
    getAge() {
        console.log(this.age);
    }
};
choi.getName();
choi.getAge();













