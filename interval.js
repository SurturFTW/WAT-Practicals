let count = 0;
const intervalId = setInterval(() => {
    console.log("Hello");
    count++;
    if(count == 10){
        clearInterval(intervalId);
    }
}, 500);
setTimeout(() => {
    clearInterval(intervalId);
},5500);