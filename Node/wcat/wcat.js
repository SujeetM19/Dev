//1) node wcat.js filepath -> displays the contents of a file in a terminal
// input sirf node se le skte hai


let input = process.argv;
//console.log(input);
let files = input.slice(2, );
//console.log(files);
//hum slice isliye bhi kar rahe hai bcz humne extra likha hai input mei : node wcat f1.txt, ismei node wcat extra hai joki index 1 aur index 2 faltu use kr raha hai
let options = [];
given_files = [];
for (let file in files){
    if(files[file][0] == "-"){
        options.push(files[file]);
    }
    else{
        given_files.push(files[file]);
    }
}

// console.log(files);
// console.log(given_files);
// console.log(options);


const  fs = require("fs");

// for(let file in given_files){
//     console.log(given_files[file]);
// }


//checking if all the given files exists or not
for(let file in given_files){
    let doesExist = fs.existsSync(given_files[file]);
    if(!doesExist){
        console.log("One or more File(s) does not exist");
        return; 
    }
}


let content = "";

// console.log(options.length);

// console.log("entered");

for(let file in given_files){
        let data = fs.readFileSync(given_files[file], 'utf-8');
        // console.log(data);
        content += data + "\n";
        //console.log(files[file]);
}
// console.log(content);
if(options.length==0){
    console.log(content);
    return;
}
//console.log(content + "");

// console.log(content);
// console.log(options.length);

// for(var i=2; i<input.length; i++){
//     let data = fs.readFileSync(input[i], "utf-8");
//     console.log(data);
//     // console.log(input[i]);
// }

//console.log(contentArr); 


var finalContent = "";

let contentArr = content.split("\n");
// console.log(contentArr); 



//-n ka kaam h ye harr line ke aage numbering karna

var n = function(){
    console.log('entered in n');
    for(var i=0; i<contentArr.length; i++){
        //console.log(i+1 + "). " + contentArr[i]);
        contentArr[i] = `${i+1}). ${contentArr[i]}`;
    }

    // console.log(contentArr);
    //return contentArr;

}

//-b numebring only on non empty lines

var b = function(){

    let count = 1;
    
    for(var i=0; i<contentArr.length; i++){
        // console.log(contentArr);
        if(contentArr[i]!= '\r'){
            //console.log(count + "). " + contentArr[i]);
            contentArr[i] = `${count}). ${contentArr[i]}`
            count++;
        }
        else{
            //console.log(contentArr[i]);
            contentArr[i] = contentArr[i];
        }
        
    }
//    console.log(contentArr);

}


// -s :- clear all the white space leave only one blannk line

let s = function(){

    for(i=1; i<contentArr.length; i++){
        if(contentArr[i]=="\r" && (contentArr[i-1]=="\r" || contentArr[i-1] == null)){
            contentArr[i] = null;
        }
    }
    
    //console.table(contentArr);
    
    let tempArr = [];
    
    for(i=0; i<contentArr.length;i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    // console.log(tempArr);
    //console.log(contentArr);
    contentArr = tempArr;
    // console.log(contentArr);

}



for(j=0; j<options.length;j++){
    // console.log("entered");
    switch(options[j]){
        case '-s':
            s();
            break;
        case '-n':
            //console.log("entered in n");
            n();
            break;
        case '-b':
            b();
            break;
        default:
            console.log("Please give a valid command");
            return;
    }
    //console.log(j);
    if(j==options.length-1){
        // console.log(contentArr);
        for (element in contentArr){
            finalContent += contentArr[element] + "\n";
        }
        console.log(finalContent);
    }
}