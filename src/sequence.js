const fs = require('fs');

process.on('beforeExit', () => {
    console.log('Print 5th')
});

setTimeout(() => console.log('Print Third'), 0);

process.nextTick(() => console.log('Print 2nd'));

console.log('Print 1st')

fs.readFile(__filename, () => {
    setImmediate(() => console.log('Print 4th'))
});
