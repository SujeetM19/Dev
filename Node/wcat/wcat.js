let input = process.argv;
//console.log(input);
let files = input.slice(2, );

let options = [];
given_files = [];

//differentiating the options and files in different arrays
for (let file in files){
    if(files[file][0] == "-"){
        options.push(files[file]);
    }
    else{
        given_files.push(files[file]);
    }
}

//importing all the methods and functions of the fs module
const  fs = require("fs");

//checking if all the given files exists or not
for(let file in given_files){
    let doesExist = fs.existsSync(given_files[file]);
    if(!doesExist){
        console.log("One or more File(s) does not exist");
        return; 
    }
}

//declaring the content variable to store all the lines of code
let content = "";

//reading the files and storing it in content variable as a string.
for(let file in given_files){
        let data = fs.readFileSync(given_files[file], 'utf-8');
        content += data + "\n";
}

//if there are no options given then simply print the content i.e read all the lines of code and return
if(options.length==0){
    console.log(content);
    return;
}

//declaring the variable to store the lines finally after letting it go through options
var finalContent = "";

//creating array of each line of code splitted by every new line
let contentArr = content.split("\n");


//-n function :-  ka kaam h ye harr line ke aage numbering karna
var n = function(){
    for(var i=0; i<contentArr.length; i++){
        contentArr[i] = `${i+1}). ${contentArr[i]}`;
    }
}



//-b function:- numbering only on non empty lines using a count variable
var b = function(){
    let count = 1;
    for(var i=0; i<contentArr.length; i++){
        if(contentArr[i]!= '\r'){ //in windows empty line is displayed as \r
            contentArr[i] = `${count}). ${contentArr[i]}`
            count++;
        }
        else{
            contentArr[i] = contentArr[i];
        }
        
    }
}

// -s :- clear white spaces, leave only one blank line if there more blank lines between 2 consecutive lines
let s = function(){
    for(i=1; i<contentArr.length; i++){
        if(contentArr[i]=="\r" && (contentArr[i-1]=="\r" || contentArr[i-1] == null)){
            contentArr[i] = null;
        }
    }

    let tempArr = []; 
    for(i=0; i<contentArr.length;i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}


//checkingg for all the options that are there and aplying a switch over it.
for(j=0; j<options.length;j++){
    switch(options[j]){
        case '-s':
            s();
            break;
        case '-n':
            n();
            break;
        case '-b':
            b();
            break;
        default:
            console.log("Please give a valid command");
            return;
    }
    if(j==options.length-1){
        for (element in contentArr){
            finalContent += contentArr[element] + "\n";
        }
        console.log(finalContent);
    }
}    