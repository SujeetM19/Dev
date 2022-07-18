//Strings :- Strings are the sequence of characters

var str = "Sujeet Kumar";
console.log(str);


console.log(str[1]);
console.log(str.length);

//methods of strings

// 1) Important :- Slicing

// slice(start, end) -> start index is inclusive, end index is exclusive;

var slicedStr = str.slice(7,12);
//index 2 se shuru hoga, index 8 tak kaatega

console.log(slicedStr);
console.log(str);

//It doesnt manipulate the original string, sirf hamar evariable mei value store ho jaati hai
//original source of information is not changed which is good


var slicedStr = str.slice(6);

console.log(slicedStr);
//starts from 6 annd ennds till last

var slicedStr = str.slice(6, -2);

//starts from 6 annd peeche ke 2 log chhod do
// (  2, (string.length) - 4)
console.log(slicedStr);





//Substring Methods 
let ans = str.substr(2,6);
console.log(ans);
//2 se start, aage ke 6 characters returned

///substr(start, length);

//start se start hhoga aur aage ke length characters print karega




//To Lower Case and to Upper case
var str =  "Sujeet";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

//******************information is intaact and has nnot  been contaminated */



//Concatenation method :- used to combine two strings to one and make them onne string

let firstStr = "Believe";
let SecondStr = " in Yourself";

let concatenatedStr = firstStr+ SecondStr;
console.log(concatenatedStr);

//also

let concatStr = firstStr.concat(SecondStr, " and me");



//Trim method :- removes all the whitespaced in the starting and in the end

let trimStr = "                      hello           how are you                      ";

console.log(trimStr);
console.log(trimStr.length);

console.log(trimStr.trim());
console.log(trimStr.trim().length);

//strings are immutable, charactres of the strings cant be changed

// HW :-  freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript
// (till counting cards)


var str = "Hello my name is Sujeet Kumar";
console.log(str);

var a = str.split("l");
// split divides the string on the basis of argument and puts them in an array
//jaha space aa gaya waha split ho jayega

/////impppp -> agar split("e") karu to 
//["h", "llo my nam", " is Suj", "t Kumar"]
// ban jayega

// jaise hi use parameter milega split karne ka wo split kardega
//aur banega bhi array hi

console.log(a);
//


//process.exit() can also be used to ends the process just like return 
//process.exit mei asynchronous oprations exit nahi honge

