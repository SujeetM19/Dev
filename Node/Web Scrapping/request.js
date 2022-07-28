// Web scrapping is a process by which we can extract data from websites
//like comparing prices of mobile phones from different websites 
//like comparing pricee of iphone on amazon, flipkart, croma




// -> to extract Data
// -> to use data for analysis
// -> to display data from different websites
// -> simply we can scape data from different websites

const request = require("request");
const cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus/", cb);
console.log("Hello maybe running before response");

// isme jo cb function hai wo callbbackk function hai jab response aayega website se tab chalega callback function

function cb(err, res, body){
    if(err){
        console.log("error", err);
    }
    else{
        handleHTML(body);
    }
}

function handleHTML(html){
    let select = cheerio.load(html);
    let selectClass = select(".maincounter-number");
    console.log(selectClass.text());

}

console.log("This one maybe running after response");




