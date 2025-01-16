// testButton이라는 아이디를 가진 요소에 click이벤트에 대한
// 이벤트리스너(이벤트핸들러)를 추가
// => testButton이라는 아이디를 가진 요소에 click이 발생하면
//    이벤트리스너에서 정의한 콜백함수를 실행
document.getElementById('testButton').addEventListener('click',() => {

    const parent = document.getElementById("parent");
    console.log("부모 노드 : ", parent);

    const childNodes = parent.childNodes;
    console.log("모든 자식 노드들 : ", childNodes);

    const children = parent.children;
    console.log("요소인 자식 노드들 : ", children);    

    console.log("첫번째 자식 : ", parent.firstChild);
    console.log("마지막 자식 : ", parent.lastChild);

    console.log("요소인 첫번째 자식 : ", parent.firstElementChild);
    console.log("요소인 마지막 자식 : ", parent.lastElementChild);
    
    const firstElementChild = parent.firstElementChild;
    console.log("요소인 첫번째 자식의 다음 형제 노드 : ",
        firstElementChild.nextSibling
     );
    console.log("요소인 첫번째 자식의 요소인 다음 형제 노드 : ",
        firstElementChild.nextElementSibling
     );

     const byTagName = document.getElementsByTagName("p");
     console.log("태그명이 p인 요소들 : ", byTagName);

     const byClassName = document.getElementsByClassName('child');
     console.log("클래스명이 child인 요소들 : ", byClassName);

     const querySingle = document.querySelector('#parent .child');
     console.log("아이디가 parent인 요소의 자손 요소중 클래스가 child인 요소 하나 : ", querySingle);

     const queryAll = document.querySelectorAll('#parent .child');
     console.log("아이디가 parent인 요소의 자손 요소 중 클래스가 child인 모든 요소 : ", queryAll);

     // 실습 1. id가 parent인 요소의 세번째 자식 요소
     console.log(parent.firstChild.nextSibling.nextSibling);
     console.log(parent.firstElementChild.nextSibling);
     console.log(parent.childNodes[2]);

     // 실습 2. class가 child인 요소 중 두번째 요소
     console.log(document.querySelectorAll('.child')[1]);

     // 실습 3. class가 child인 요소 중 세번째 요소의 형
     console.log(document.querySelectorAll('.child')[2].previousSibling);

});








