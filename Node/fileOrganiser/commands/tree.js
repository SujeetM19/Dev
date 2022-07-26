
const fs = require("fs");
const path = require("path");


function tree(srcPath){

    //if the enterend url is not defined
    if(srcPath == undefined){

        console.log("Please enter a valid path");
        return;
    }

    if(!fs.existsSync(srcPath)){
        console.log("The entered path is invalid.")
    }

    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);

    //iterating over all the files in the array
    for (let file in allFiles){

        pathOfExistingFile = path.join(srcPath, allFiles[file]);
        
        let isFile = fs.lstatSync(pathOfExistingFile).isFile();
        
        // if(isFile)
        if(isFile){
            console.log(pathOfExistingFile);
        }
        
        //if a folder
        else if(!isFile){
            tree(pathOfExistingFile);
        }
    }

}


module.exports = {
    tree : tree,
}



