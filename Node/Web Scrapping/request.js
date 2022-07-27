// Web scrapping is a process by which we can extract data from websites
//like comparing prices of mobile phones from different websites 
//like comparing pricee of iphone on amazon, flipkart, croma




// -> to extract Data
// -> to use data for analysis
// -> to display data from different websites
// -> simply we can scape data from different websites
const fs = require("fs");

const request = require("request");
request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body){
    // console.log(res);
    fs.appendFileSync("file1.txt", body);
}



