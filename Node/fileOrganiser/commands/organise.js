const fs = require("fs");
const path = require("path");

let types = {
    media : ["mp4", "mkv", "mp3"],
    archives : ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents : ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf",
    "txt", "ps", "tex"],
    app : ["exe", "dmg", "pkg", "deb"],
    images : ["jpg", "jpeg", "png"]
}


function organise(srcPath){

    // to check if sourcepath is provided and is readable or not
    if(srcPath == undefined){
        srcPath = process.cwd();
    }



    //to create a directory organised_files 
    let organisedFiles = path.join(srcPath, "organised_files");
    if(!fs.existsSync(organisedFiles)){
        fs.mkdirSync(organisedFiles);
    }

    //scan the given path folder i.e downloads folder in this case  and store all the files in it in an array
    let allFiles = fs.readdirSync(srcPath);

    //iterating over all the files in the folder
    for(file in allFiles){

        //path of existing file in loop
        let pathOfExistingFile = path.join(srcPath, allFiles[file]);

        //checking if the current element is a file or a folder
        isFile = fs.lstatSync(pathOfExistingFile).isFile();

        //if the current element is a file
        if(isFile){

            //checking the extension name
            let ext = path.extname(allFiles[file]).split(".")[1];

            //check the folder to which it belongs using a function folderName
            let folderType = folderName(ext);
            //it will return folder name say images, document etc... according to the object "types"

            //copying files from sourcepath to our destination folder
            copyFilesTo(srcPath, pathOfExistingFile, folderType, allFiles[file]);

        }

    }

    //function which returns type of the file using object "types"
    function folderName(ext) {
        for(let type in types){
            if(types[type].includes(ext)){
                return type;
            }
        }
        //return miscellaneous if the extension is not listed in types object
        return "miscellaneous";
    }


    function copyFilesTo(srcPath, nameOfExistingFile, folderName, fileName){
        //making the folder path to which file have to be coppied
        coppiedFolderName = path.join(srcPath, "organised_files", folderName);
        
        
        //if we would not have extracted fileName as an argument then we had to do path.basename(pathOfFile) ..... isse path ka last wala part i.e actually file name gets stored in the variable 
        //creating the folder if it doesnt exists
        if(!fs.existsSync(coppiedFolderName)){
            fs.mkdirSync(coppiedFolderName);
        }

        // including the filename in the path 
        coppiedFileName = path.join(coppiedFolderName, fileName);

        // coppying the file 
        fs.copyFileSync(nameOfExistingFile, coppiedFileName);
        
    }

}


//exporting the function
module.exports = {
    organise : organise
}