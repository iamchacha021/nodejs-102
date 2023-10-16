const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunck) => {
//     ws.write('\n\n----NEW INCOMING DATA----\n\n');
//     ws.write(dataChunck);
// });

// easier way is to pipe
rs.pipe(ws);