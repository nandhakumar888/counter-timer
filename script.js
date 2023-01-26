'use strict';

var seconds = 0;
var minutes = 1;
function Start() {
    interval = setInterval(function () {
        seconds++;
        document.getElementById('seconds_h1').innerHTML = seconds;
        if (seconds === 60) {
            document.getElementById('minutes_h1').innerHTML = minutes++;
            seconds = 0;
        }
    }, 1000);
}
function Stop() {
    clearInterval(interval);
}
function Reset() {
    seconds = 0;
    minutes = 0;
    document.getElementById('seconds_h1').innerHTML = seconds;
    document.getElementById('minutes_h1').innerHTML = minutes;
}