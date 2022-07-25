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

    // 1) to check if sourcepath is correct or not
    if(srcPath == undefined){

        srcPath = process.cwd();

    }
    //console.log(srcPath);



    //2) to create a directory organised_files
    //making organised files folder  
    let organisedFiles = path.join(srcPath, "organised_files");
    if(!fs.existsSync(organisedFiles)){
        fs.mkdirSync(organisedFiles);
    }
    // console.log(organisedFiles);


    //3. scan the given path folder i.e downloads folder in this case 
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);
    // console.log(typeof allFiles);

    // fs.readdirSync basically reads the names of files present in the directory


    for(file in allFiles){

        //**************alag se karne ki zarurat nahi hai extensions ko extract, it should be like, ek file aayi, uska extension extract kr liya ki wo kis file type ki hai aur thikane laga diya */

        //file 0 1 2 3 4... hai
        // console.log(file);

        // allFIles files ke naam ko store kr rahi hai basically jaise object mei arrays ko implement kiya ho
        // console.log(allFiles);


        //path of existing file
        let pathOfExistingFile = path.join(srcPath, allFiles[file]);
        // console.log(pathOfExistingFile);

        isFile = fs.lstatSync(pathOfExistingFile).isFile();
        // console.log(isFile);

        if(isFile){
            //agar wo file hai to aisa aisa karde
            let ext = path.extname(allFiles[file]).split(".")[1];
            // console.log(ext);

            //check the folder to which it belongs
            let folderType = folderName(ext);
            // console.log(folderType);
            //return mei folder name aa gaya hai say images, document etc... jo types mei hai

            copyFilesTo(srcPath, pathOfExistingFile, folderType, allFiles[file]);

        }

    }

    function folderName(ext) {
        for(let type in types){
            if(types[type].includes(ext)){
                return type;
            }
        }
s
    }

    function copyFilesTo(srcPath, nameOfExistingFile, folderName, fileName){
        coppiedFolderName = path.join(srcPath, "organised_files", folderName);
        

        if(!fs.existsSync(coppiedFolderName)){
            fs.mkdirSync(coppiedFolderName);
        }

        coppiedFileName = path.join(coppiedFolderName, fileName);

        fs.copyFileSync(nameOfExistingFile, coppiedFileName);

    }



}

srcPath = "C:\\Users\\sujee\\Desktop\\dev\\node\\fileOrganiser\\downloads";
organise(srcPath);
