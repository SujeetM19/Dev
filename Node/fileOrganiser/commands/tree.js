
const fs = require("fs");
const path = require("path");


function tree(srcPath){

    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);

    for (let file in allFiles){

        pathOfExistingFile = path.join(srcPath, allFiles[file]);
        
        let isFile = fs.lstatSync(pathOfExistingFile).isFile();
        
        // if(isFile)
        if(isFile){
            console.log(pathOfExistingFile);
        }
        
        if(!isFile){
            tree(pathOfExistingFile);
        }
    }

}

srcPath = "C:\\Users\\sujee\\Desktop\\dev\\node\\fileOrganiser\\downloads";

tree(srcPath);

