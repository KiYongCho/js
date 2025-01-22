// timer function
// setTimeout(콜백함수, 밀리세컨드) : 밀리세컨드 후 콜백함수 호출
// setInterval(콜백함수, 밀리세컨드) : 밀리세컨드 마다 콜백함수 호출

const span = document.querySelector('span');

// setTimeout(()=>{
//     span.textContent = '1000밀리초 후 나타남!';
// }, 1000);

let count = 0;
const interval = setInterval(arg => {
    span.textContent = arg + count++;
}, 1000, "time : ");

const stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', e => {
    clearInterval(interval);
});