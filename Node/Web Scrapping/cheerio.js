const cheerio = require("cheerio");

let html = `<ul id="fruits">
    <li class="apple"> Apple</li>
    <li class="orange"> Orange</li>
    <li class="pear"> Pears</li>
    </ul>`;

let content = cheerio.load(html);
// console.log(content);

//selecting the type of content weather it is a class (.) or an ID (#)
let selectClass = content('#fruits');
// console.log(selectClass);

//type is obbject 
// cheerio stores data  in form of object

console.log(selectClass.text());

console.log(typeof selectClass);
// of object type  but already selector applied


// console.log(content.text());

