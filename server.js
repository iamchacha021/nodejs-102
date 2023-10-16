// core modules
const os = require('os');
const path = require('path');
const { add, multiply, subtract, divide } = require('./math');
const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { } = require('./logEvents');




// // logEvents code
// class MyEmitter extends EventEmitter {};
// // initialize the object
// const myEmitter = new Emitter();
// // add listener on the log event
// myEmitter.on('log', (msg) => logEvents(msg));

// setTimeout(() => {
//     // emit the event
//     myEmitter.emit('log', 'Log event has been emitted');
// }, 3000);

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
})

server.listen(PORT, () => console.log('connected'))







// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename)); /* this will get all of the above in an object */

console.log(add(2, 7));
console.log(multiply(2, 7));
console.log(subtract(2, 7));
console.log(divide(2, 7));


