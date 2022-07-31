let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");

request(url, cb);

function cb(err, res, body){
    if(err){
        console.log("Internet not connected");
    }
    else{
        handleHTML(body);
    }

}


function handleHTML(html){
    let selecTool = cheerio.load(html);

    let allMatches = selecTool('a[class = "ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]');

    console.log(allMatches.text());
    // console.log(selecTool.html());

}



