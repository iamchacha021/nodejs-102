const fsPromises = require('fs').promises;
const path = require('path');

// logevents dependencies
const { logEvents } = require('./logEvents');
const EventEmitter = require('events');

// redaing files
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// writing files
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('writing completed');
//     // appending files
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n yes it is', (err) => {
//         if (err) throw err;
//         console.log('appending completed');

//         // renaming files
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'oldReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('rename completed');
//         });
//     });
// });

// writing the above code in a cleaner way
// this code is cleaner since we don't have to nest functions inside other functions
// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
//         console.log(data);
//         await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')); /* this one deletes */
//         await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
//         await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNow we have appended new data');
//         await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'renamedPromiseWrite.txt'));
//         const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'renamedPromiseWrite.txt'), 'utf-8');
//         console.log(newData);

//     } catch (err) {
//         console.error(err);
//     };
// };

// fileOps();




const { } = require('./logEvents');




// logEvents code
class MyEmitter extends EventEmitter {};
// initialize the object
const myEmitter = new MyEmitter();
// add listener on the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // emit the event
    myEmitter.emit('log', 'Log event has been emitted');
}, 3000);


// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(err);
    process.exit(1);
});