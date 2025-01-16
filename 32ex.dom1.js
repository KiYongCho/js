/* 
    32ex.dom1.html 32ex.dom2.js

    [DOM실습 1]
    추가 버튼을 누르면 리스트에 아이템을 추가
    제거 버튼을 누르면 리스트에서 아이템 제거
    초기화 버튼을 누르면 리스트 모든 아이템 제거
*/

const list = document.getElementById('list');
let count = 1;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {
        switch (e.target.textContent) {
            case '추가':
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(`item ${count++}`));
                list.appendChild(li);
            break;
            case '제거':
                if (list.lastChild) {
                    list.removeChild(list.lastChild);
                    count--;
                }
            break;
            case '초기화':
                list.textContent = '';
                count = 1;                
        }
     });
});

