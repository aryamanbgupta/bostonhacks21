var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var bull = document.getElementById("bull-image")
let response = document.getElementById("response").innerHTML

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }

    if (bull.src = "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-throw-up-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"){
        bull.src = bull.src.replace("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-throw-up-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png", "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-grinning-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png");

    }

    document.getElementById("response").innerHTML = "Keep up the good work!";
})

reset.addEventListener('click', function(){
    document.getElementById("response").innerHTML = "Ok Fine, Lets restart :)."
    bull.src = "https://icons8.com/icon/8oWNoINt7YLY/devil"
    wm.innerText = 0;
    ws.innerText = "00";

    bm.innerText = 0;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;

})

stop.addEventListener('click', function(){
    bull.src = bull.src.replace("https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-grinning-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png", "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-throw-up-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png");
    document.getElementById("response").innerHTML = "Why'd you stop? Ewww";
    stopInterval()
    console.log(bull.src)
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        document.getElementById("response").innerHTML = "Congrats!, Take a 5 minute break.";
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 0;
        bs.innerText = "00";

        bull.src = "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-devil-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png";
        document.getElementById("response").innerHTML = "Congrats!, Take a 5 minute break.";
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}


