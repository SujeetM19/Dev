//fs -> file system module
const fs = require("fs");
//jab bhi koi module required hota hai to aise hum usko require kr lete h

let res = fs.appendFileSync("file1.txt", "Hello I am F1 file");

fs. appendFileSync("file1.txt", "\nI am Stuying NodeJS.");

console.log(res);
//res undefined print karega... appendFileSync kuch return nahi krta hai

//Sab Sync mei write hoga, pehle first line fir second line


let data = fs.readFileSync("file1.txt");
console.log(typeof data);
console.log(data);
console.log(data+"");

//type object hai because wo encoded format mei return kr dega


// to hume kuch waha readFileSync mei add krna chahiye "utf-8"

let data_in_utf = fs.readFileSync("file1.txt", "utf-8");
console.log(data_in_utf);

