const person = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};

// 객체를 JSON문자열로 변환
const json = JSON.stringify(person);
console.log(typeof json, json);

// 객체를 JSON문자열로 변환 (들여쓰기)
const prettyJson = JSON.stringify(person, null, 2);
console.log(typeof prettyJson, prettyJson);

// 객체를 JSON문자열로 변환 (replacer, 들여쓰기)
const filteredJson = JSON.stringify(
    // 변환할 객체
    person, 
    // replacer 함수 : 변환시에 필터링하는 함수, 원하는 프라퍼티만 변환하기 위해서
    (key, value) => {
        return typeof value==='number' ? undefined : value;
    },
    // 들여쓰기
    2
);
console.log(typeof filteredJson, filteredJson);


// XMLHttpRequest (XHR)
// Web API에 정의된 비동기 통신을 위한 객체

// XHR 객체 생성
const xhr = new XMLHttpRequest();

// 요청 초기화
// open(HTTP요청메소드, 요청URL)
// HTTP요청메소드 : GET, POST, PUT, PATCH, DELETE
//                GET : 요청헤더만 전송, 데이터 조회
//                POST : 요청헤더와 요청바디를 전송, 데이터 등록
//                PUT : 요청헤더와 요청바디를 전송, 데이터 전체 수정
//                PATCH : 요청헤더와 요청바디를 전송, 데이터 부분 수정
//                DELETE : 요청헤더만 전송, 데이터 삭제
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// 요청 전송
xhr.send();

// onreadystatechange : readyState 프라퍼티의 값이 변경될때마다 실행될 함수를 저장하는 프라퍼티
//                      readyState가 0 > 1 > 2 > 3 > 4 변경될때마다 실행
xhr.onreadystatechange = () => {
    // 요청완료시에만 처리
    if (xhr.readyState !==4) return false;
    // 서버 응답이 정상완료되면
    if (xhr.status === 200) {
        // 서버에서 보낸 응답body를 객체로 변환해서 출력
        console.log(typeof xhr.response, xhr.response);
        // 응답body JSON문자열을 객체로 변환
        const todo = JSON.parse(xhr.response);
        // 객체의 프라퍼티들을 출력
        console.log(todo.userId, todo.id, todo.title, todo.completed);
    } else {
        // 에러 발생하면 응답코드값과 응답코드문자열을 출력
        console.error('에러발생!', xhr.status, xhr.statusText);
    }
};

































