// 에러 처리

// 에러발생 가능한 코드들이 위치하는 블럭
try {
    v = 10;
    let v;
}
// 에러처리하는 코드들이 위치하는 블럭
// 발생한 에러객체가 전달
catch (err) {
    console.error('에러메세지 : ' + err.message);
    console.log('발생한 에러를 처리함!');
}
// 에러 발생유무와 상관없이 실행할 코드들이 위치하는 블럭
finally {
    console.log('에러발생 여부와 상관없이 수행됨!');
}


// 에러의 종류
// 3***3 // SyntaxError, 문법에러
// func(); // ReferenceError, 참조에러
// null.func(); // TypeError, 타입에러
// new Array(-1); // RangeError, 범위에러
// decodeURIComponent('%'); // URIError, URI에러


// 사용자 정의 에러

// 사용자 정의 에러객체 생성
const myerror = new Error('내가 만든 에러');

try {
    // 사용자 정의 에러 발생시킴
    throw myerror;
} catch (err) {
    console.error(err.message);
}


// 에러 전파
// thirdFunc에서 발생한 에러가 secondFunc를 호출한
// firstFunc에서 처리됨
const firstFunc = function() {
    // firstFunc에서 처리
    try {
        secondFunc();
    } catch(err) {
        console.log('firstFunc에서 에러 처리');
    }
};
const secondFunc = function() {
    thirdFunc();
    // secondFunc에서 처리
    // try {
    //     thirdFunc();
    // } catch(err) {
    //     console.log('secondFunc에서 에러 처리');
    // }
};
const thirdFunc = function() {
    v = 10;
    let v;
    // thirdFunc에서 직접 에러 처리
    // try {
    //     v = 10;
    //     let v;
    // } catch(err) {
    //     console.log('thirdFunc에서 에러 처리');
    // }
};
firstFunc();


























