//taking input that too leaving first two using CLI
let input = process.argv.slice(2);

// using require function to import the files for each command
let helpFunc = require("./commands/help")
let organiseFunc = require("./commands/organise")
let treeFunc = require("./commands/tree")


//if the number of input variables given are not as per required number of parameters
if(input.length == 0 || input.length >2 ){
    console.log("Please select a valid Parameters for command. use 'help' command to know more!")
    return;
}

//storing variable for command type and path
command = input[0];
path = input[1];

switch(command.toLowerCase()){
    case "help":
        helpFunc.help();
        break;

    case "tree":
        treeFunc.tree(path);
        break;

    case "organise"||"organize":
        organiseFunc.organise(path);
        break;

    default:
        console.log("Command not found!");

}