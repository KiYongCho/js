// Promise

const promiseGet = url => {
    // Promise를 리턴
    // Promise는 성공시에 수행할 resolve함수와
    // 실패시에 수행할 reject함수를 인자로 하는 콜백함수를 인자로 받음
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status===200) {
                // 요청에 대한 응답 성공시 resolve를 호출
                resolve(JSON.parse(xhr.response));
            } else {
                // 요청에 대한 응답 실패시 reject를 호출
                reject(new Error(xhr.status));
            }
        };
    });
};

promiseGet('https://jsonplaceholder.typicode.com/posts/1') // 프라미스를 리턴받음
.then(res => console.log(res)) // 프라미스 성공시 res=JSON.parse(xhr.response)
.catch(err => console.log(err)) // 프라미스 실패시 err=new Error(xhr.status)
.finally(() => console.log('성공/실패 여부와 상관없이 수행!'))

const promisePost = (url, payload) => {
    // Promise를 리턴
    // Promise는 성공시에 수행할 resolve함수와
    // 실패시에 수행할 reject함수를 인자로 하는 콜백함수를 인자로 받음
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(payload);
        xhr.onload = () => {
            if (xhr.status===200 || xhr.status===201) {
                // 요청에 대한 응답 성공시 resolve를 호출
                resolve(JSON.parse(xhr.response));
            } else {
                // 요청에 대한 응답 실패시 reject를 호출
                reject(new Error(xhr.status));
            }
        };
    });
};

promisePost(
    'https://jsonplaceholder.typicode.com/posts',
    '{"userId":11, "id":101, "title":"title", "body":"body"}'
)
.then(res => console.log(res)) // 프라미스 성공시 res=JSON.parse(xhr.response)
.catch(err => console.log(err)) // 프라미스 실패시 err=new Error(xhr.status)
.finally(() => console.log('성공/실패 여부와 상관없이 수행!'))

// 실습 1
// https://jsonplaceholder.typicode.com/posts
// Promise를 이용해서 id가 20인 게시물의 title을 'modified title'로 수정
new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/20');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send('{"title":"modified title"}');
    xhr.onload = () => {
        if (xhr.status===200 || xhr.status===201) {
            resolve(JSON.parse(xhr.response));
        } else {
            reject(new Error(xhr.status));
        }
    };
}).then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log('성공/실패 여부와 상관없이 수행!'))

// 실습 2
// https://jsonplaceholder.typicode.com/comments
// Promise를 이용해서 postId가 3인 모든 댓글을 조회
new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status===200) {
            resolve(
                JSON.parse(xhr.response)
                .filter(comment=>comment.postId=="3")
            );
        } else {
            reject(new Error(xhr.status));
        }
    };
}).then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log('성공/실패 여부와 상관없이 수행!'))

// 프라미스 체이닝
const url = 'https://jsonplaceholder.typicode.com';

























































