const events = require('events');
const someEventHandler = x => console.log('event', x, 'occurred');
const emitter = new events.EventEmitter();

console.log("Add event handler for someEvent by calling emitter.on('someEvent', someEventHandler)");
emitter.on('someEvent', someEventHandler);
console.log("\nEmitter eventNames() is =", emitter.eventNames());
console.log('\nEmit someEvent with someValue by calling emitter.emit("someEvent", "someValue")');
emitter.emit('someEvent', 'someValue');
console.log("\nEmitter listenerCount('someEvent') is =", 
emitter.listenerCount('someEvent'));
console.log("\nRemove event handler by calling emitter.removeListener('someEvent', someEventHandler)");
emitter.removeListener('someEvent', someEventHandler);
console.log("\nEmitter listenerCount('someEvent') after removing event handler is =", 
emitter.listenerCount('someEvent'));