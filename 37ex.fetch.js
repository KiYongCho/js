// 37ex.fetch.js

// JSON server, persons.json 사용
// npx json-server --watch persons.json --port 7777 --static ../
// http://localhost:7777/37ex.fetch.html

// fetch함수를 활용하여 get,post,put,patch,delete 호출


// get
// fetch('http://localhost:7777/persons')
// .then(response => response.json())
// .then(res => console.log(res))

// post
// fetch('http://localhost:7777/persons', {
//     method: 'POST',
//     headers: {'content-type':'application/json'},
//     body: JSON.stringify({id:"3",name:"이순신",age:20})
// })
// .then(response => response.json())
// .then(res => console.log(res))

// put
// fetch('http://localhost:7777/persons/3', {
//     method: 'PUT',
//     headers: {'content-type':'application/json'},
//     body: JSON.stringify({id:3,name:"장보고",age:50})
// })
// .then(response => response.json())
// .then(res => console.log(res))

// patch
// fetch('http://localhost:7777/persons/3', {
//     method: 'PATCH',
//     headers: {'content-type':'application/json'},
//     body: JSON.stringify({name:"권율"})
// })
// .then(response => response.json())
// .then(res => console.log(res))

// delete
// fetch('http://localhost:7777/persons/3', {
//     method: 'DELETE'
// })
// .then(response => response.json())
// .then(res => console.log(res))
































