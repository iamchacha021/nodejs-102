const { format } = require('date-fns');
const { v4: uuid} = require('uuid'); /* this means import v4 as uuid */

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

exports.logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n\n`;
    console.log(logItem);
    try{
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs','eventLog.txt'), logItem);
    } catch (err) {
        console.error(err);
    }
};

// date formatter
console.log(format(new Date(), '\tyyyy-MM-dd\tHH:mm:ss'));

// uuid
console.log(uuid());
