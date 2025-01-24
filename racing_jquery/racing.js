let interval1 = null;
let interval2 = null;
let interval3 = null;
let interval4 = null;

let started = false;
let speedRate = 1.0;

const rate = [];

$(function() {
    $('#horse1').css('left', '0px');
    $('#horse2').css('left', '0px');
    $('#horse3').css('left', '0px');
    $('#horse4').css('left', '0px');
});

$('#start').click(e => {
    $('#start').prop("disabled", true);
    $('#level').prop("disabled", true);
    $('#result').text("STARTED! PRESS SPACE KEY OR B KEY!");
    $('#countdown').css("display", "block");
    setTimeout(()=>{
        $('#countdown img').attr("src", "3.png");    
    },1000);
    setTimeout(()=>{
        $('#countdown img').attr("src", "2.png");    
    },1000);
    setTimeout(()=>{
        $('#countdown img').attr("src", "1.png");    
    },2000);
    setTimeout(()=> {
        $('#countdown').css("display", "none");
        comStart();
    }, 3000);
});

const run = function(horse, speedRate=1.0) {
    const horseId = horse.getAttribute("id");
    const currLeft = parseInt(
        horse.style.left.substring(0, horse.style.left.length-2)
    );
    if (currLeft > 1080) {
        if (horseId=="horse1") {
            clearInterval(interval1);
            rate.push(1);
        }
        if (horseId=="horse2") {
            clearInterval(interval2);
            rate.push(2);
        }
        if (horseId=="horse3") {
            clearInterval(interval3);
            rate.push(3);
        }
    }
    horse.style.left = (currLeft + Math.ceil(Math.random()*speedRate*17) + 8) + 'px';
    printResult();
};

const comStart = () => {
    interval1 = setInterval(run, Math.ceil(Math.random()*50) + 100, 
        horse1, speedRate);
    interval2 = setInterval(run, Math.ceil(Math.random()*50) + 100, 
        horse2, speedRate);
    interval3 = setInterval(run, Math.ceil(Math.random()*50) + 100, 
        horse3, speedRate);
    started = true;
};

$("#level").change(e => {
    switch (e.target.value) {
        case "medium":
            speedRate = 1.2;
            break;
        case "hard":
            speedRate = 1.5;
    }
});

$(document).keyup(e => {
    if (started) {
        const horse4Left 
            = parseInt($("#horse4").css("left")
            .substring(0, $("#horse4").css("left").length-2));
        if (horse4Left < 1080) {
            if (e.originalEvent.code === 'Space') {
                $('#horse4').css("left", (horse4Left + 18)+'px');
            }
            if (e.originalEvent.code === 'KeyB') {
                $('#horse4').css("left", (horse4Left + 36)+'px');
            }
        } else {
            if (rate.length!=4) {
                if (rate.indexOf(4)==-1) rate.push(4);
            }
            printResult();
        }
    }
});

const printResult = () => {
    if (rate.length==4) {
        let printStr = "";
        for (let i=0; i<rate.length; i++) {
            printStr += (i+1) + "등 : " + rate[i] + "레인&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        $('#result').html(printStr);
    }
};