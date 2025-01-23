// 개별 import
// import { name, getName } from './module.mjs';
// console.log(name, getName());

// 일괄 import
// import * as m from './module.mjs';
// console.log(m.name, m.getName());

// export default한 것의 이름을 add로 지정
import add, { name, getName } from './module.mjs';
console.log(add(1, 2));
console.log(name, getName());