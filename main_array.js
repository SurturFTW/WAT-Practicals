const ArrayOperations = require('./array_operation');
const arrayOps = new ArrayOperations();

// Register event listeners
arrayOps.on('sorted', (sortedArray) => {
    console.log('Sorted Array:', sortedArray);
});

arrayOps.on('reversed', (reversedArray) => {
    console.log('Reversed Array:', reversedArray);
});

arrayOps.on('searched', ({ target, index }) => {
    if (index !== -1) {
        console.log(`${target} found at index ${index}`);
    } else {
        console.log(`${target} not found in the array`);
    }
});

// Sample array
const myArray = [5, 2, 8, 1, 9, 4, 3, 7, 6];

// Trigger the functions using events
arrayOps.sortArray(myArray);
arrayOps.reverseArray(myArray);
arrayOps.searchArray(myArray, 4);
arrayOps.searchArray(myArray, 10);