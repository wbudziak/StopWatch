const btn = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
const btnSave = document.querySelector(".save");
const scores  = document.querySelector(".scores")
let minutes = document.querySelector(".minutes");
let sec = document.querySelector(".sec");
let mSec =document.querySelector(".mSec");
let timer = document.querySelector(".timer");
let flag = 1;
// minutes.innerText = "00";
// sec.innerText = "00";
// timer.innerText = "00";
let number = 0;
timeMin = 0;
timeSec = 0;
timeMSec =0;
let time;
btn.addEventListener("click",function(){
    flag+=1;
    if(flag === 2){
         time = setInterval(() => {
            timeMSec++;
            if(timeMSec === 100){
                timeMSec = 0;
                timeSec++;
                if(timeSec === 60){
                    timeSec = 0;
                    timeMin++;
                }
            }
            timer.innerText = `${("0" + timeMin).slice(-2)}:${("0" + timeSec).slice(-2)},${("0" + timeMSec).slice(-2)}`;
            
        }, 10);    
    }
    btn.innerText = "Start";    
    btnStop.addEventListener("click",()=>{
        flag =1;
        clearInterval(time);
        btn.innerText = "continue";
    })
    btnReset.addEventListener("click",()=>{
        clearInterval(time);
        flag = 1;
        timeMSec = 0;
        timeSec =0;
        timeMin = 0;
        timer.innerText = `00:00,00`;
        time.stop();
    })
  
    
})
btnSave.addEventListener("click",()=>{
    const ScoreBox = document.createElement('div');
    scores.appendChild(ScoreBox);

    number++;
    const span = document.createElement('span');
    span.textContent = `Round ${number}`;
    ScoreBox.appendChild(span);

    const spanik = document.createElement('span');
    spanik.textContent = `${("0" + timeMin).slice(-2)}:${("0" + timeSec).slice(-2)},${("0" + timeMSec).slice(-2)}`;
    ScoreBox.appendChild(spanik);

    setTimeout(() => {
        span.classList.add("spanOn");
        spanik.classList.add("spanOn");
    }, 100);
    setTimeout(() => {
        span.classList.remove("spanOn");
        spanik.classList.remove("spanOn");
    }, 1250);


})