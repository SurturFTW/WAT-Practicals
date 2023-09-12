const os = require('os'); 
// Get the operating system platform 
console.log('Operating System Platform:', os.platform()); 
// Get the operating system type 
console.log('Operating System Type:', os.type()); 
// Get the operating system release version 
console.log('Operating System Release Version:', os.release()); 
// Get the CPU architecture 
console.log('CPU Architecture:', os.arch()); 
// Get the total system memory (RAM) in bytes 
console.log('Total System Memory (RAM):', os.totalmem(), 'bytes');