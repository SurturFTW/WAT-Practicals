let count = 0;
let interval;
function timerFunction() {
    console.log("This is message number " + (count + 1) + " Printed after 10 seconds");
    count++;
}

module.exports = {
    startTimer: function() {
        interval = setInterval(timerFunction, 10000);
    },
    
    stopTimer: function() {
        clearInterval(interval);
        console.log("Timer stopped after 10 Iterations");
    }
};
