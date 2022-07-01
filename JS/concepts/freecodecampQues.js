//ques 1 :- commenting inline and multiline

//hi this is inline comment

/* this is multiline comment
*/


//QUes 2 :- Declare JavaScript Variables

var myName;

//Ques 3:-
//Storing Values with the Assignment Operator

var a;
a = 7;

//Ques 4 :- //Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b=a;

//Ques 5 :- Initializing Variables with the Assignment Operator

var a = 9;

//Ques 6 :- Declare String Variables

var myFirstName = "Sujeet";
var myLastName = "Kumar";

//Ques 6:- Understanding Uninitialized Variables

// Only change code below this line
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";
// Only change code above this line
 
a = a + 1;
b = b + 5;
c = c + " String!";


//Ques 7 :- Understanding Case Sensitivity in Variables camelCase

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Ques 8 :- Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

//Ques 9:-Declare a Read-Only Variable with the const Keyword


const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line


//Ques 10:- Add Two Numbers with JavaScript

const sum = 10 + 10;


//Ques 11:- Subtract One Number from Another with JavaScript

const difference = 45 - 33;


//Ques 12:- Multiply Two Numbers with JavaScript

const produc = 8 * 10;

//Ques 13 :- Divide One Number by Another with JavaScript

const quotien = 66 / 33;


//Ques 14:- Increment a Number with JavaScript

let myVar = 87;

// Only change code below this line
myVar = myVar + 1;
myVar++;

//Ques 14:- Increment a Number with JavaScript

//let myVar = 87;

// Only change code below this line
myVar++;


//QUes 15 ::- Decrement a Number with JavaScript
//let myVar = 11;

// Only change code below this line
myVar--;



//QUes  16:- Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 5.7;


//QUes 17 :- Multiply Two Decimals with JavaScript

const product = 2.0 * 2.5;


//Ques 18 :- Divide One Decimal by Another with JavaScript

const quotient = 4.4 / 2.0; // Change this line


//Ques 19:- Finding a Remainder in JavaScript


const remainder = 11%3;


//Ques 20:- Compound Assignment With Augmented Addition

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;


//Ques11: Compound Assignment With Augmented Subtraction


let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;


//Ques21: Compound Assignment With Augmented Subtraction


let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;


// Ques 22:- Compound Assignment With Augmented Multiplication

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;


//Ques 23:- Compound Assignment With Augmented Division


let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /=12;
b /=4;
c /=11;

//Ques 24:- Escaping Literal Quotes in Strings

const myStr = "I am a \"double quoted\" string insile \"double quotes\""; // Change this line

//Ques 25:- Quoting Strings with Single Quotes

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';



// Ques 26 :- Escape Sequences in Strings

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line



// Ques 27 :- Concatenating Strings with Plus Operator

const myStr ="This is the start. " + "This is the end."; // Change this line



// Ques 28 :- Concatenating Strings with the Plus Equals Operator

let myStr;
myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";


// Ques 29:- Constructing Strings with Variables

// Only change code below this line
const myName = "Sujeet Kumar";
const myStr = "My name is " + myName + " and I am well!";



// Ques 30:- Appending Variables to Strings

// Change code below this line
const someAdjective = "really fun";
let myStr = "Learning to code is ";
myStr += someAdjective;



// // Setup
// Ques 31:-  Find the Length of a String

let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


// Setup
// Ques 32:- Use Bracket Notation to Find the First Character in a String


let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

// Change this line



// // Setup
// Ques 33:- Important :- Understand String Immutability



let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line



// Setup
// Ques 34:- Use Bracket Notation to Find the Nth Character in a String


const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


// // Setup
// Ques 35:- Use Bracket Notation to Find the Last Character in a String


const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line




// // Setup
// Ques 36:- Use Bracket Notation to Find the Nth-to-Last Character in a String

const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line



// Ques 37:- Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line




// Only change code below this line
//QUes 38:- Store Multiple Values in one Variable using JavaScript Arrays

const myArray = ["Sujeet", 22];



// Only change code below this line
// Ques 39 :- Nest one Array within Another Array


const myArray = [["sujeet", "Kumar", "mishra"],[1,2,3]];



// Ques 40:- Access Array Data with Indexes 

const myArray = [50, 60, 70];
var myData = myArray[0];



// Setup

// Ques 41:- Modify Array Data With Indexes

const myArray = [18, 64, 99];

myArray[0] = 45;

// Only change code below this line




// QUes 43:- Access Multi-Dimensional Arrays With Indexes


const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][2];



  // // Setup
// QUes 44:- Manipulate Arrays With push()


const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Only change code below this line




// Setup

// Ques 45: Manipulate Arrays With pop()


const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();



// // Setup
// Ques 46:- Manipulate Arrays With shift()
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();



// Setup
// Ques 47:- Manipulate Arrays With unshift()


const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

myArray.unshift(["Paul", 35]);



// Ques 48:-  Shopping List


const myList = [];
myList.push(["maggie", 14]);
myList.push(["pasta", 28]);
myList.push(["samosa", 10]);
myList.push(["kurkure", 5]);
myList.push(["Noodles", 30]);




// Ques 49 :- Write Reusable JavaScript with Functions

function reusableFunction(){
    console.log('Hi World');
  }
  
  reusableFunction();


  // Ques 50  :-  Passing Values to Functions with Arguments

function functionWithArgs(num1, num2){
    console.log(num1+num2);
  }
  
  functionWithArgs(3,7);



  // Ques 51:- Return a Value from a Function with Return

function timesFive(num){
    return num*5;
}



// Ques 52:- Global Scope and Functions


// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}




// Ques 53:- Local Scope and Functions

function myLocalScope() {
    // Only change code below this line
    let myVar = 10
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);



  // Ques 54 :- Global vs. Local Scope in Functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();



// // Setup
// Ques 55:- Understanding Undefined Value returned from a Function



let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum+5;
}

// Only change code above this line

addThree();
addFive();




//Ques 56:- Assignment with a Returned Value


// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);





// a


function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift()
    
    return item;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));




  // Ques 58:- Understanding Boolean Values


function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
  

// Ques 59 :- Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){
      return "Yes, that was true";
    }
    return "No, that was false";
    // Only change code above this line
  }




  // Ques 60:- Comparison with the Equality Operator



// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);



  
// Ques 61:- Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  





