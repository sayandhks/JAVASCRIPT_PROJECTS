let secondselapsed=0;
let interval=null;
const time=document.getElementById("time");

function pad(value){
    return String(value).padStart(2,"0");
}

function setTime(){
    const minutes = Math.floor(secondselapsed/60);
    const seconds = secondselapsed % 60;
    time.innerHTML=`${pad(minutes)}:${pad(seconds)}`;
    
}

function timer(){
    
    secondselapsed++;
    setTime()
}

function start(){
    if(interval){
        stop();
        
    }
    interval=setInterval(timer,1000);

}


function stop(){
    clearInterval(interval)


}

function reset(){
    stop()
    secondselapsed=0;
    setTime()

}