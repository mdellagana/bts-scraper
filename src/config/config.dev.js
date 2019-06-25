const path = require('path');

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';

module.exports = config;