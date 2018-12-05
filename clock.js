// create a timer that only goes up to 30 seconds
var milliSeconds = 0
var seconds = 0; // set the timer counter to zero
var minutes = 0;
var hours = 0;
var ampmCounter = 2;
var clockType = prompt("Please select a 12-Hour or 24-Hour clock. (12/24)");

var interval = null; // create a variable to put the interval into

//set the interval
interval = setInterval( function(){
    milliSeconds++; // increment the counter

    if (clockType == "12") {
        var ampm = ampmCounter % 2 == 0 ? 'am' : 'pm';
        document.querySelector("#iclock").textContent = ( `Time: ${hours}:${minutes}:${seconds}:${milliSeconds} ${ampm}`);
    } else {
        document.querySelector("#iclock").textContent = `Time: ${hours}:${minutes}:${seconds}:${milliSeconds}`;
    }

    document.querySelector("#second").style.transform = "rotate(" + seconds*6 + "deg)";
    document.querySelector("#minute").style.transform = "rotate(" + minutes*6 + "deg)";
    document.querySelector("#hour").style.transform = "rotate(" + hours*30 + "deg)";
    if (milliSeconds == 1000) {
        milliSeconds = 0;
        seconds++;

        if( seconds == 60 ){
          seconds = 0;
          minutes++;

          if (minutes == 60) {
            minutes = 0;
            hours++;

            if (hours == parseInt(clockType)) {
                seconds = 0;
                minutes = 0;
                hours = 0;
                ampmCounter++;
            }
          }
        }
    }

}, 1);


