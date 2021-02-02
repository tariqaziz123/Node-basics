var url='http://mylogger.io/log';

function log(message){
    //Send an HTTP request
    console.log(message);
}

//module.exports.log=log;

// changing The name  for outside of the module
//module.exports.endPoint=url;

//For calling all function instead of module
module.exports=log;