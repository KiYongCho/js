// https://jsonplaceholder.typicode.com/users
/*
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
*/

const xhr = new XMLHttpRequest();
let response = null;

const xhrUtil = {
    init: (httpMethod, url, payload) => {
       if (httpMethod.toUpperCase()=='GET') {
           url = url + (payload ? payload : '');
       }
       xhr.open(httpMethod, url);
       if (httpMethod.toUpperCase()=='POST' ||
           httpMethod.toUpperCase()=='PUT' ||
           httpMethod.toUpperCase()=='PATCH'
          ) {
        xhr.setRequestHeader('content-type', 'application/json');
       }
       xhr.send(payload);
    }
};

xhr.onreadystatechange = () => {
    if (xhr.readyState!==4) return false;
    if (xhr.status==200 || xhr.status==201) {
        response = xhr.response;
    } else {
        console.error('에러 발생!', xhr.status, xhr.statusText);
    }
}

const url = 'https://jsonplaceholder.typicode.com/users';

document.querySelector('#getAllUsers').addEventListener('click', e => {
    xhrUtil.init('GET', url);
    setRow(response);
});

document.querySelector('#getUser').addEventListener('click', e => {
    xhrUtil.init('GET', url, '?id='+document.querySelector('#userId').value);
    setRow(response);
});

document.querySelector('#asc').addEventListener('click', e => {
    xhrUtil.init('GET', url);
    setRow(response, 'asc');
});

document.querySelector('#desc').addEventListener('click', e => {
    xhrUtil.init('GET', url);
    setRow(response, 'desc');
});

const setRow = (response, sort) => {
    
    const arr = JSON.parse(response);

    if (sort==='asc') arr.sort((a, b) => a.id-b.id);
    if (sort==='desc') arr.sort((a, b) => b.id-a.id);

    document.querySelector('tbody').textContent = '';

    if (arr!=null) {
        for (let obj of arr) {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${obj.id}</td><td>${obj.name}</td>
                <td>${obj.username}</td><td>${obj.email}</td>
                <td>${obj.address.suite} ${obj.address.street} ${obj.address.city}
                </td>
                <td>${obj.phone}</td>
                <td>${obj.website}</td><td>${obj.company.name}</td>
            `;
            document.querySelector('tbody').appendChild(tr);            
        }
    }

};





















































































