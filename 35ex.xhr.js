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

const xhr = new XMLHttpRequest();

const xhrUtil = {
    // httpMethod : 요청방식
    // url : 요청URL
    // payload : 요청시 전송할 데이터
    init: (httpMethod, url, payload) => {

       // GET방식 요청이라면
       if (httpMethod.toUpperCase()=='GET') {
           // payload가 있으면 url뒤에 데이터를 붙임
           url = url + (payload ? payload : '');
       }

       // 요청 초기화
       xhr.open(httpMethod, url);

       // POST 또는 PUT 또는 PATCH 방식 요청이라면
       if (httpMethod.toUpperCase()=='POST' ||
           httpMethod.toUpperCase()=='PUT' ||
           httpMethod.toUpperCase()=='PATCH'
          ) {
        // POST, PUT, PATCH 요청시에는 요청헤더를 설정
        // 서버에 요청데이터가 JSON형식임을 알려줌        
        xhr.setRequestHeader('content-type', 'application/json');
       }

       // 요청 전송
       xhr.send(payload);
    }
};

xhr.onreadystatechange = () => {
    if (xhr.readyState!==4) return false;
    if (xhr.status==200 || xhr.status==201) {
        console.log(xhr.response);
    } else {
        console.error('에러 발생!', xhr.status, xhr.statusText);
    }
}

// list : 전체 조회
// xhrUtil.init('GET', 'https://jsonplaceholder.typicode.com/photos');

// get : 한건 조회
// xhrUtil.init('GET', 'https://jsonplaceholder.typicode.com/photos', '?id=1');

// post : 한건 등록
// xhrUtil.init('POST', 'https://jsonplaceholder.typicode.com/photos', 
//    '{"albumId":101, "id":5001, "title":"title5001", "url":"url5001", "thumbnailUrl":"thumbnailUrl5001"}');

// put : 한건 전체 수정
//xhrUtil.init('PUT', 'https://jsonplaceholder.typicode.com/photos/1', 
//    '{"albumId":1, "id":1, "title":"mod_title1", "url":"mod_url1", "thumbnailUrl":"mod_thumbnailUrl1"}');

// patch : 한건 부분 수정
//xhrUtil.init('PATCH', 'https://jsonplaceholder.typicode.com/photos/1', 
//    '{"title":"pardmod_title1"}');  
    
// delete : 한건 삭제
//xhrUtil.init('DELETE', 'https://jsonplaceholder.typicode.com/photos/1');        
    







































