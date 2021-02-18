
var hour=0,min=0,sec=0;
var time ;


 var startbutton  = document.getElementById("startButton");
 var pausebutton =  document.getElementById("pauseButton");
 var stopButton =  document.getElementById("stopButton");

 var stopwatch = document.getElementById("stopwatch");


function myTimer(){
     var h,m,s;
     sec ++;
     if(sec == 60){
          min += 1;
          sec = 0;
     }
     if(min == 60){
          hour += 1;
          min = 0;
     }

     s = sec <= 9 ? "0"+sec : sec;
     m = min <= 9 ? "0"+min : min;
     h = hour<= 9 ? "0"+hour : hour;
    
   
    stopwatch.innerHTML = `${h}:${m}:${s}`;
}



function startTimer(){
     
     startbutton.disabled = true;
     pausebutton.disabled = false;
     stopButton.disabled = false;

     time = setInterval(myTimer, 1000);
        
}

function pauseTimer(){
    
     if (pauseButton.innerHTML == "pause") {
        clearInterval(time);
        pauseButton.innerHTML = "continue";
    } else {
        pauseButton.innerHTML = "pause";
        time = setInterval(myTimer, 1000);
    }
      
   
}
function stopTimer(){
   clearInterval(time);

    hour = 0;
    min = 0;
    sec = 0;
    
    stopwatch.innerHTML = `00:00:00` ;
     
     startbutton.disabled = false;
     pausebutton.disabled = true;
     stopButton.disabled = true;

     pausebutton.innerHTML = "pause";
}