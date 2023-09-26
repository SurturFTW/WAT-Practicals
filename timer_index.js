const timer = require('./timer');
timer.startTimer();
// Using setTimeout to stop the timer after 10 iterations
setTimeout(timer.stopTimer, 110000);
