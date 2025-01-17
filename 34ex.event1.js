// event실습 1 : 숫자 카운터
// 증가버튼 클릭시 1씩 증가
// 감소버튼 클릭시 1씩 감소

const counter = document.getElementById('counter');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', () => {
    counter.value = parseInt(counter.value) + 1;
});
decrease.addEventListener('click', () => {
    counter.value = parseInt(counter.value) - 1;
});

// 실습 1-1 : input에 값을 직접 입력 못하도록
// 힌트 : focus 이벤트 처리
counter.addEventListener('focus', () => {
    counter.blur();
    // 또는 return false;
});
