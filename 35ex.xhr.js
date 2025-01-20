/*
    https://jsonplaceholder.typicode.com/photos

    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }
*/

// XHR 객체 생성
const xhr = new XMLHttpRequest();

// 요청 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos');
// 요청 전송
// GET방식 : 데이터를 요청URL 뒤에 붙여서 보냄
// POST방식 : 데이터를 send메소드의 인자로 넣어서 보냄
xhr.send();

xhr.onreadystatechange = () => {
    // console.log('요청상태코드값 : ' + xhr.readyState);
    // 요청을 잘 보내고 응답을 잘 받으면
    if (xhr.readyState===4 && xhr.status==200) {
        console.log(xhr.response);
    } else {
        console.error('에러 발생!', xhr.status, xhr.statusText);
    }
};








































