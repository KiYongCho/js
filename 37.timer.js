// timer function
// setTimeout(콜백함수, 밀리세컨드) : 밀리세컨드 후 콜백함수 호출
// setInterval(콜백함수, 밀리세컨드) : 밀리세컨드 마다 콜백함수 호출

const span = document.querySelector('span');

/// 1000밀리초 후에 콜백함수를 한번만 수행
// setTimeout(()=>{
//     span.textContent = '1000밀리초 후 나타남!';
// }, 1000);

let count = 0;
let interval = null;
// 시작상태변수 (flag변수 : 상태정보(on/off, true/false, 0/1) 저장)
let started = false;

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', e => {
    // pause버튼 활성화
    pauseBtn.disabled = false;
    // 시작상태가 아닐때만
    if (!started) {
        interval = setInterval(arg => {
            span.textContent = arg + count++;
        }, 1000, "time : ");
    }
});

const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    clearInterval(interval);
});

// clearInterval : setInterval 종료
const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    // 시작버튼, 포즈버튼 비활성화
    startBtn.disabled = true;
    pauseBtn.disabled = true;
    clearInterval(interval);
});






