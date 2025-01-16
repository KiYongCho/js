// document.querySelector('button').addEventListener('click', e => {

//     const table = document.createElement('table');

//     const tr0 = document.createElement('tr');
//     const th00 = document.createElement('th');
//     th00.textContent = '번호';
//     const th01 = document.createElement('th');
//     th01.textContent = '성명';    
//     const th02 = document.createElement('th');
//     th02.textContent = '나이';
//     const th03 = document.createElement('th');
//     th03.textContent = '키';

//     tr0.appendChild(th00);
//     tr0.appendChild(th01);
//     tr0.appendChild(th02);
//     tr0.appendChild(th03);

//     const tr1 = document.createElement('tr');
//     const td10 = document.createElement('td');
//     td10.textContent = '1';
//     const td11 = document.createElement('td');
//     td11.textContent = '홍길동';
//     const td12 = document.createElement('td');
//     td12.textContent = '20';
//     const td13 = document.createElement('td');
//     td13.textContent = '170';

//     tr1.appendChild(td10);
//     tr1.appendChild(td11);
//     tr1.appendChild(td12);
//     tr1.appendChild(td13);

//     const tr2 = document.createElement('tr');
//     const td20 = document.createElement('td');
//     td20.textContent = '2';
//     const td21 = document.createElement('td');
//     td21.textContent = '강감찬';
//     const td22 = document.createElement('td');
//     td22.textContent = '30';
//     const td23 = document.createElement('td');
//     td23.textContent = '150';

//     tr2.appendChild(td20);
//     tr2.appendChild(td21);
//     tr2.appendChild(td22);
//     tr2.appendChild(td23);

//     table.appendChild(tr0);
//     table.appendChild(tr1);
//     table.appendChild(tr2);

//     document.body.appendChild(table);

// });

document.querySelector('button').addEventListener('click', e => {
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>번호</th><th>성명</th><th>나이</th><th>키</th>
        </tr>
        <tr>
            <td>1</td><td>홍길동</td><td>20</td><td>170</td>
        </tr>
        <tr>
            <td>2</td><td>강감찬</td><td>30</td><td>150</td>
        </tr>
    `;
    document.body.appendChild(table);
});    