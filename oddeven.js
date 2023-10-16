function isEven(num) {
    return num % 2 === 0;
}
var numberToCheck = 6;
if (isEven(numberToCheck)) {
    console.log(numberToCheck + " is even.");
}
else {
    console.log(numberToCheck + " is odd.");
}
