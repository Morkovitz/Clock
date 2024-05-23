let timeLeft;
let element = document.getElementById("some-div");
let rstbtn=document.getElementById("reset");
let timerId;
let stopped=false;
function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    element.innerHTML = parseInt(timeLeft/60) + ' minutes ' + timeLeft%60 + ' seconds remaining';
  }
}

function stop(){
  if(stopped){
    timerId = setInterval(countdown, 1000);
    document.getElementById("stop").innerHTML="STOP";
  }else{
    clearInterval(timerId);
    document.getElementById("stop").innerHTML="RESUME";
  }
  stopped=!stopped;
}


function reset(){
  timeLeft=1500;
  timeLeft++;
  countdown();
  timerId = setInterval(countdown, 1000);
  console.log("RESET INITIATED");
  rstbtn.innerHTML = "RESET";
}