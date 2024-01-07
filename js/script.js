let start = document.getElementById("start");
let reset = document.getElementById("reset");
let stop = document.getElementById("stop");

let wm = document.getElementById("w_minutes");
let ws = document.getElementById("w_seconds");

let bm = document.getElementById("b_minutes");
let bs = document.getElementById("b_seconds");

// store a reference to a timer variable

let startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already runnning");
  }
});

reset.addEventListener("click", function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText = 0;
    stopInterval();
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval();
    startTimer = undefined;
})

function timer() {
  // Work timer Countdown
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }

  // Break Timer Countdown
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText++;
  }
}


// Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}