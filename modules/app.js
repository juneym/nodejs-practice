const logger = require('./logger')
const logger2 = require('./logger2')


console.log('Logger Example')
logger.log('This is a sample log')
logger2('This is another log using logger2')


logger.log(`__filename is ${__filename}`)
logger.log(`__dirname is ${__dirname}`)