function isEven(num: number): boolean {
    return num % 2 === 0;
}
let numberToCheck: number = 6;
if (isEven(numberToCheck)) {
    console.log(numberToCheck + " is even.");
} else {
    console.log(numberToCheck + " is odd.");
}
