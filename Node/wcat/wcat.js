//1) node wcat.js filepath -> displays the contents of a file in a terminal
// input sirf node se le skte hai



let input = process.argv;
//console.log(input);
let files = input.slice(2, );
//console.log(files);
//hum slice isliye bhi kar rahe hai bcz humne extra likha hai input mei : node wcat f1.txt, ismei node wcat extra hai joki index 1 aur index 2 faltu use kr raha hai




const  fs = require("fs");


//checking if all the given files exists or not
for(let file in files){
    let doesExist = fs.existsSync(files[file]);
    if(!doesExist){
        console.log("One or more File(s) does not exist");
        return; 
    }
}


let content = "";

for(let file in files){
    let data = fs.readFileSync(files[file], 'utf-8');
    // console.log(data);
    content += data + "\n";
    //console.log(files[file]);
}

//console.log(content);

// for(var i=2; i<input.length; i++){
//     let data = fs.readFileSync(input[i], "utf-8");
//     console.log(data);
//     // console.log(input[i]);
// }


let contentArr = content.split("\n");
//console.log(contentArr); 

for(var i=0; i<contentArr.length; i++){
    console.log(i+1 + "). " + contentArr[i]);
}