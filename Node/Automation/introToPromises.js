const fs = require("fs");


//synchronous working

// let data = fs.readFileSync("f1.txt");

// console.log(data + "");

// console.log("after");








//Asynchronous working

// console.log("before");

// let data = fs.readFile("f1.txt", cb);
// function cb(err, data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data + "");
//     }
// }
// console.log("after");


// ****************** Promise 

// three stages :- pending , fulfilled , reject


// let promiseThatFileWillBeRead = fs.promises.readFile("f1.txt");
// console.log(promiseThatFileWillBeRead);

// promiseThatFileWillBeRead.then(printData);
// promiseThatFileWillBeRead.catch(printError);

// console.log("after");

// function printData(data){
//     console.log("promise is fulfilled");
//     console.log(data + "");
// }


// function printError(err){
//     console.log(err + "");
// }



