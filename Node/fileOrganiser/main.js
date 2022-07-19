//entry point of command line

//taking input that too leaving first two

let input = process.argv.slice(2);

//input mein node main.js ke baad sara input as array aa jayega

console.log(input);
// console.log(typeof input); object type ka hai

command = input[0];

switch(command.toLowerCase()){
    case "help":
        //help();
        break;

    case "tree":
        //tree();
        break;

    case "organise"||"organize":
        //organise();
        break 

    default:
        console.log("Command not found!")

}