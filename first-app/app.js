/*function sayHello(name){
    console.log('Hello ' + name);
}

//sayHello('Tariq');
console.log(window);

var message='';
console.log(global.message);

console.log(module);*/

var logger = require('./logger');
//console.log(logger);
//logger.log('message');

//In case of calling only function
logger('message');