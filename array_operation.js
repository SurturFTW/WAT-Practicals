const EventEmitter = require('events');
class ArrayOperations extends EventEmitter {
    constructor() {
    super();
    }
    // Function to sort an array
    sortArray(arr) {
        const sortedArray = arr.slice().sort((a, b) => a - b);
        this.emit('sorted', sortedArray);
    }

    // Function to reverse an array
    reverseArray(arr) {
        const reversedArray = arr.slice().reverse();
        this.emit('reversed', reversedArray);
    }
    // Function to search for an element in an array
    searchArray(arr, target) {
        const index = arr.indexOf(target);
        this.emit('searched', { target, index });
    }
}
module.exports = ArrayOperations;
