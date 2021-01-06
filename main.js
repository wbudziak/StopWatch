const btn = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
const btnSave = document.querySelector(".save");


let minutes = document.querySelector(".minutes");
let sec = document.querySelector(".sec");
let mSec =document.querySelector(".mSec");
let timer = document.querySelector(".timer");
let flag = 1;

let number = 1;
timeMin = 0;
timeSec = 0;
timeMSec =0;
let time;
let clicked = 0;



const divScore = document.querySelector('.score');
const divDelete = document.querySelector('.delete');

const newDivScore = document.createElement('div');
const newDivDelete = document.createElement('div');

const span = document.createElement('span');
const spanik = document.createElement('span');

span.style.color = "gray";
spanik.style.color = "gray";

divDelete.appendChild(newDivDelete);
divScore.appendChild(newDivScore);
newDivScore.appendChild(span);
newDivScore.appendChild(spanik);


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
            span.textContent = `Round ${number}`;
            spanik.innerText = `${("0" + timeMin).slice(-2)}:${("0" + timeSec).slice(-2)},${("0" + timeMSec).slice(-2)}`;
        }, 10);    
        
        
    }
    btn.innerText = "Start";    
    btnStop.addEventListener("click",()=>{
        flag =1;
        clearInterval(time);
        btn.innerText = "continue";
        
    })

    
    btnReset.addEventListener("click",()=>{
        spanik.innerHTML = `${("0" + "0").slice(-2)}:${("0" + "0").slice(-2)},${("0" + "0").slice(-2)}`;

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
            
    const newDivScore = document.createElement('div');
    const newDivDelete = document.createElement('div');

    const span = document.createElement('span');
    const spanik = document.createElement('span');
    const delSpan = document.createElement('span');
    delSpan.textContent = "X";
    newDivDelete.appendChild(delSpan);
    
    divDelete.appendChild(newDivDelete);
    divScore.appendChild(newDivScore);
    newDivScore.appendChild(span);
    newDivScore.appendChild(spanik);

    span.textContent = `Round ${number++}`;
    spanik.innerText = `${("0" + timeMin).slice(-2)}:${("0" + timeSec).slice(-2)},${("0" + timeMSec).slice(-2)}`;

    delSpan.addEventListener("click",function(){
        delSpan.style.transform = "rotate(360deg)";
        setTimeout(function(){
             divDelete.removeChild(newDivDelete);
             divScore.removeChild(newDivScore);
            }, 300);
    })
    setTimeout(() => {
        span.classList.add("spanOn");
        spanik.classList.add("spanOn");
    }, 100);
    setTimeout(() => {
        span.classList.remove("spanOn");
        spanik.classList.remove("spanOn");
    }, 1250);
})
btn.addEventListener("click", function(){
    btn.classList.add("buttonActive");
    setTimeout(function(){ 
    btn.classList.remove("buttonActive");
}, 100);
})
btnStop.addEventListener("click", function(){
    btnStop.classList.add("buttonActive");
    setTimeout(function(){ 
    btnStop.classList.remove("buttonActive");
}, 100);
})
btnReset.addEventListener("click", function(){
    btnReset.classList.add("buttonActive");
    setTimeout(function(){ 
    btnReset.classList.remove("buttonActive");
}, 100);
})
btnSave.addEventListener("click", function(){
    btnSave.classList.add("buttonActive");
    setTimeout(function(){ 
    btnSave.classList.remove("buttonActive");
}, 100);
})


btn.addEventListener("mousedown",()=>{
    btn.style.transform = "scale(.95)";
})
btn.addEventListener("mouseup",()=>{
    btn.style.transform = "scale(1)";
})

btnStop.addEventListener("mousedown",()=>{
    btnStop.style.transform = "scale(.95)";
})
btnStop.addEventListener("mouseup",()=>{
    btnStop.style.transform = "scale(1)";
})

btnReset.addEventListener("mousedown",()=>{
    btnReset.style.transform = "scale(.95)";
})
btnReset.addEventListener("mouseup",()=>{
    btnReset.style.transform = "scale(1)";
})

btnSave.addEventListener("mousedown",()=>{
    btnSave.style.transform = "scale(.95)";
})
btnSave.addEventListener("mouseup",()=>{
    btnSave.style.transform = "scale(1)";
})

