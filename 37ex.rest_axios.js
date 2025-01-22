/*
    [REST API 실습 (axios버젼)]
    1. JSON서버 구동
    2. 기능
      (1) 데이터가져오기버튼 누르면 테이블에 전체 데이터 표시
          > GET, /persons
      (2) id, name, age 입력하고 등록버튼 클릭하면 테이블에 데이터 추가
          > POST, /persons
      (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후
          데이터 수정
          > PUT, /persons/아이디
      (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제
          > DELETE, /persons/아이디
*/

const listPerson = document.querySelector('#listPerson');
const getPerson = document.querySelector('#getPerson');
const pid = document.querySelector('#pid');
const pname = document.querySelector('#pname');
const page = document.querySelector('#page');
const registPerson = document.querySelector('#registPerson');
const tbody = document.querySelector('tbody');
const sel = document.querySelector('#sel');
const asc = document.querySelector('#asc');
const desc = document.querySelector('#desc');

let responseArr = null;

listPerson.addEventListener('click', e => {
    axios.get('http://localhost:7777/persons')
    .then(res => {
        responseArr = res.data;
        printList(responseArr);
    });
});

getPerson.addEventListener('click', e => {
    const sid = document.querySelector('#sid');
    if (!sid.value) {
        alert('검색하실 아이디를 입력해 주시랑께요!');
        sid.focus();
        return;
    }
    axios.get(`http://localhost:7777/persons/${sid.value}`)
    .then(res => {
        tbody.textContent = '';
        const person = res.data;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${person.id}</td>
            <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
            <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${person.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr); 
    });
});

registPerson.addEventListener('click', e => {
    axios.post('http://localhost:7777/persons', 
        {"id": pid.value, "name": pname.value, "age": page.value})
    .then(() => printList(responseArr));
});

asc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'ASC')
});

desc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'DESC')
});

const printList = (responseArr, selValue, sort) => {
    if (selValue) {
        if (typeof selValue === 'number') {
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {
                    return obj1[selValue] - obj2[selValue];
                } else if (sort==='DESC') {
                    return obj2[selValue] - obj1[selValue];
                }
            });
        } else {
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {
                    return obj1[selValue].localeCompare(obj2[selValue]);
                } else if (sort==='DESC') {
                    return obj2[selValue].localeCompare(obj1[selValue]);
                }
            });
        }
    }
    tbody.textContent = '';    
    for (let obj of responseArr) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${obj.id}</td>
            <td><input id="name${obj.id}" type="text" value="${obj.name}" class="pname"></td>
            <td><input id="age${obj.id}" type="text" value="${obj.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${obj.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${obj.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr);
    }    
};

const modifyPerson = pid => {
    const confirm = window.confirm('수정하시겠습니까?');
    if (!confirm) return;
    const pname = document.querySelector('#name'+pid).value;
    const page = document.querySelector('#age'+pid).value;
    axios.put(`http://localhost:7777/persons/${pid}`,
        {"id":pid, "name":pname, "age":page})
    .then(() => printList(responseArr));
}

const deletePerson = pid => {
    const confirm = window.confirm('삭제하시겠습니까?');
    if (!confirm) return;
    axios.delete(`http://localhost:7777/persons/${pid}`)
    .then(() => printList(responseArr));
}

listPerson.click();