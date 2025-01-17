// DOM 요소
const button = document.getElementById('btn');
const clickOutput = document.getElementById('clickOutput');
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');
const mouseArea = document.getElementById('mouseArea');
const mouseOutput = document.getElementById('mouseOutput');
const eventInfoBtn = document.getElementById('eventInfoBtn');
const eventInfoOutput = document.getElementById('eventInfoOutput');
const alertBtn = document.getElementById('alertBtn');
const alertBtn2 = document.getElementById('alertBtn2');

// 1. 버튼 클릭 이벤트
button.addEventListener('click', () => {
    clickOutput.textContent = '버튼 상태 :  클릭됨';
});

// 2. 텍스트 입력 이벤트
textInput.addEventListener('input', event => {
    textOutput.textContent = `입력된 텍스트 : ${event.target.value}`;
});

// 3. 키보드 이벤트
keyInput.addEventListener('keydown', event => {
    keyOutput.textContent = `입력된 키 : ${event.key}`;
});

// 4. 마우스 이벤트
mouseArea.addEventListener('mousemove', event => {
    mouseOutput.textContent 
        = `마우스 위치 : (${event.clientX}, ${event.clientY})`;
});
mouseArea.addEventListener('mouseenter', () => {
    mouseOutput.textContent = '마우스가 영역에 들어왔습니다!'
});
mouseArea.addEventListener('mouseleave', () => {
    mouseOutput.textContent = '마우스가 영역에서 벗어났습니다!'
});

// 5. 이벤트 객체 정보
eventInfoBtn.addEventListener('click', event => {
    eventInfoOutput.innerHTML = `
        이벤트 객체 : ${event}<br>
        이벤트 타입 : ${event.type}<br>
        이벤트 타겟 : ${event.target}<br>
        이벤트 현재 타겟 : ${event.currentTarget}<br>
        이벤트 버블링 여부 : ${event.bubbles}<br>
        이벤트 취소가능 여부 : ${event.cancelable}<br>
        이벤트 단계 : ${event.eventPhase}
    `;
});

// 6. 이벤트 핸들러 제거
const handleClick = function () {
    alert('누르셨군요!');
}
alertBtn.addEventListener('click', handleClick);
// 클릭하면 alertBtn의 이벤트리스너를 제거
alertBtn2.addEventListener('click', () => {
    alertBtn.removeEventListener('click', handleClick);
});
























