 //functions are treattedas first citizens in JS
 //functions can be returned
//  functions can be passed as parameters/arguments


//There are three types of funvctions
// 1) 

function calc(str, a , b ){
    if(str == "add"){
        return function add(){
            console.log(a+b);
        }

    }

}

let returnedFunc = calc("add", 2, 4);
returnedFunc();
//6

console.log(""+returnedFunc);
//complete fucntion returned











//2.


//fucntion expression : jo functon variabble function m hai usko invoke karne ke liye hum variable() lagate hai

// function expression

// name of the variable is used to invoke the function

// let var_name = function(){
//     //do something
// }

// then to invoke this function we do:

// var_name();


// example

let sayHi = function abcd(){
    console.log("Hii everyone");
}

sayHi();

//abcd()  -> error abcd not defined

// sara function sayHi naam ke variabble mei chala gaya, agar uski jagah normal function
// likhte like :-

// function abcd(){
//  abcd...
// }
// to iska matlab sara function abcd naam ke variable mei stored which can be called using abcd()


// function invoke krne ke liye : var_name();

// function definition show krne ke liye : -  console.log(""+var_name);


// ques :=


// 3.


// IIFE : immedietly invoke function expression

// As per my understanding i think that these functions might be  working best with non parametric functions

let addIIFE = (function add(a,b){
    return a+b;
})(20,30);


console.log(addIIFE)