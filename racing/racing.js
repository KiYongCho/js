const start = document.querySelector('#start');
const result = document.querySelector('#result');
const horse1 = document.querySelector('#horse1');
const horse2 = document.querySelector('#horse2');
const horse3 = document.querySelector('#horse3');
const horse4 = document.querySelector('#horse4');
const level = document.querySelector('#level');

let interval1 = null;
let interval2 = null;
let interval3 = null;
let interval4 = null;

let speedRate = 1.0;

const rate = [];

window.onload = function() {
    horse1.style.left = '0px';
    horse2.style.left = '0px';
    horse3.style.left = '0px';
    horse4.style.left = '0px';
}

start.addEventListener('click', e => {
    start.disabled = true;
    level.disabled = true;
    result.textContent = "STARTED! PRESS SPACE KEY OR B KEY!";
    comStart();
});

const run = function(horse, speedRate=1.0) {
    const currLeft = parseInt(
        horse.style.left.substring(0, horse.style.left.length-2)
    );
    if (currLeft > 1080) {
        if (horse.getAttribute("id")=="horse1") {
            clearInterval(interval1);
            rate.push(1);
        }
        if (horse.getAttribute("id")=="horse2") {
            clearInterval(interval2);
            rate.push(2);
        }
        if (horse.getAttribute("id")=="horse3") {
            clearInterval(interval3);
            rate.push(3);
        }
    }
    horse.style.left = (currLeft + 
        Math.ceil(Math.random() * speedRate * 17) + 8) + 'px';
    printResult();
};

const comStart = () => {
    interval1 = setInterval(run, Math.ceil(Math.random()*50) + 100, 
        horse1, speedRate);
    interval2 = setInterval(run, Math.ceil(Math.random()*50) + 100, 
        horse2, speedRate);
    interval3 = setInterval(run, Math.ceil(Math.random()*50) + 100, 
        horse3, speedRate);
};

level.addEventListener('change', e => {
    switch (e.target.value) {
        case "medium":
            speedRate = 1.2;
            break;
        case "hard":
            speedRate = 1.5;
    }
});

document.addEventListener('keyup', e => {
    const horse4Left = parseInt(
        horse4.style.left.substring(0, horse4.style.left.length-2));
    if (horse4Left < 1080) {
        if (e.code === 'Space') {
            horse4.style.left = (horse4Left + 18)+ 'px';
        }
        if (e.code === 'KeyB') {
            horse4.style.left = (horse4Left + 36)+ 'px';
        }
    } else {
        if (rate.length!=4) {
            if (rate.indexOf(4)==-1) rate.push(4);
        }
        printResult();
    }
});

const printResult = () => {
    if (rate.length==4) {
        let printStr = "";
        for (let i=0; i<rate.length; i++) {
            printStr += (i+1) + "등 : " + rate[i] + "레인&nbsp;&nbsp;&nbsp;"
        }
        result.innerHTML = printStr;
    }
};
