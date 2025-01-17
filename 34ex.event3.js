// event실습 3 : 입력필드 검증 (validation)

// 전송버튼을 클릭하면...
// 1. 아이디, 비밀번호는 12자 이하
// 2. 성별은 필수체크
// 3. 취미는 2개 이상 선택
// 조건을 모두 만족하면 '폼이 전송되었습니다!' 앨럿
// 그렇지 않으면 해당 폼에 포커스

const writeForm = document.querySelector('form[name="writeForm"]');

document.getElementById("submit").addEventListener('click', e => {

    const uid = document.querySelector('input[name="uid"]');
    if (uid.value.length>12) {
        alert('아이디는 12자 이내로 작성해 주세요!');
        uid.focus();
    }

    const upass = document.querySelector('input[name="upass"]');
    if (upass.value.length>12) {
        alert('비밀번호는 12자 이내로 작성해 주세요!');
        upass.focus();
    }
    
    const gender = document.querySelector('input[type="radio"]:checked');
    if (!gender) {
        alert('성별을 선택해 주세요!');
        return false;
    }
    
    const hobbys = document.querySelectorAll('input[type="checkbox"]');
    let checkCount = 0;
    hobbys.forEach(hobby => {
        if (hobby.checked) checkCount++;
    });
    if (checkCount<2) {
        alert('취미를 2개 이상 선택해 주세요!');
        return false;
    }

    alert('폼이 전송되었습니다!');

});


