//fs -> file system module   >- it helps us to make file, append data, select data from anyfilein our system
const fs = require("fs");
// requre method goes to the file that is needed to be required, executes that file
//jab bhi koi module required hota hai to aise hum usko require kr lete h

const temp = require("../JS/concepts/temp");




let res = fs.appendFileSync("file1.txt", "Hello I am F1 file");

                //file path      //data to be appended
fs. appendFileSync("file1.txt", "\nI am Stuying NodeJS.");

console.log(res);
//res undefined print karega... appendFileSync kuch return nahi krta hai

//Sab Sync mei write hoga, pehle first line fir second line


let data = fs.readFileSync("file1.txt");
console.log(typeof data);
console.log(data);
console.log(data+"");
//can also ve done usingg typecasting like this +""

//type object hai because wo encoded format mei return kr dega


// to hume kuch waha readFileSync mei add krna chahiye "utf-8"

let data_in_utf = fs.readFileSync("file1.txt", "utf-8");
console.log(data_in_utf);


//agar utf se ya kisi tarike se string mei change nahi karenge to buffer print ho jayega joki encoded hoga

