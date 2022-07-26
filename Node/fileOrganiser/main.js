//entry point of command line

//taking input that too leaving first two

let input = process.argv.slice(2);

let helpFunc = require("./commands/help")
let organiseFunc = require("./commands/organise")
//input mein node main.js ke baad sara input as array aa jayega

//console.log(input);
// console.log(typeof input); object type ka hai

command = input[0];
path = input[1];

switch(command.toLowerCase()){
    case "help":
        helpFunc.help();
        //console.log("Help function executed");
        break;

    case "tree":
        //tree();
        console.log("tree function executed");
        break;

    case "organise"||"organize":
        organiseFunc.organise(path);
        console.log("organise function executed");
        break;

    default:
        console.log("Command not found!");

}