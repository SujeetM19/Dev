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

    let organisedFiles = path.join(srcPath, "organised_files");
    // console.log(organisedFiles);


    //3. scan the given path folder i.e downloads folder in this case 
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);
    // console.log(typeof allFiles);

    // fs.readdirSync basically reads the names of files present in the directory


    let filesAndExt = [];


    for(file in allFiles){
        // ext = allFiles[file].split('.');
        // ext.push(allFiles[file]);
        // console.log(typeof ext);
        // console.log(ext);
        // console.log(ext[1]);

        // filesAndExt.push(ext);

        //Shortcut module for extension

        let ext = path.extname(allFiles[file]);
        filesAndExt.push([ext, allFiles[file]]);
    }

    // console.log(filesAndExt);





//making organised files folder

    if(!fs.existsSync(organisedFiles)){
        fs.mkdirSync(organisedFiles);
    }
    // else{
    //     console.log("Folder already exists");
    // }


    //making folders of images videos

    for (file in types){
        type = path.join(organisedFiles, file);
        if(!fs.existsSync(type)){
            fs.mkdirSync(type);
        }

        // console.log(types[file])
        
   
    }


    // for(var i=0; i<filesAndExt.length;i++){
    //     // console.log(filesAndExt[i][1]);
    //     console.log(types['media']);

        
    // }






}

srcPath = "C:\\Users\\sujee\\Desktop\\dev\\node\\fileOrganiser\\downloads";
organise(srcPath);