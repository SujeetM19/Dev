const puppeteer = require("puppeteer");

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    // args: ["--start-maximized"]
});

//headless is true then without chromium open my work will be done and if it is false then 

browserOpenPromise
    .then(function(){
        console.log("browser is open");
    }
)

//exercise :- hackerrank

// code likhna hai -> hackerrank par signup karke sign in karke uske problems ko solve karenge sifr code se ... cursor use nahi karenge 
