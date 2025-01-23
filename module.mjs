// 개별 export
// export const name = '홍길동';
// export const getName = function() {
//     return name;
// };

// 일괄 export
const name = '홍길동';
const getName = function() {
    return name;
};
export { name, getName }

// export default
// 하나의 값을 공개하고 import하는 쪽에서
// 이름을 정해서 사용할 수 있음
export default function (a,b) {
    return a + b;
};