//variable declaraion
// var a;

// a=10;   //variable initialisation
// console.log(a);

// console.log(typeof a); //typeof operator

// a="sujeet";
// console.log(typeof a);

// a = null;
// console.log(a);
// console.log(typeof a);


var str = 'am i doing well!';
//also can be done in " ", ``;

//--new line thing

var str = " Hey print this \n t0 the new line"

var num = 200;

console.log(`Half of ${num} is ${num/2}`);
console.log("SUjeet");



//******Grabbed points*********8

// 1) redeclaration is allowed but we dont want  to redeclare it  becuase it will overwrite the previos value

//to remove this issue we might use let.... let se hum dobara declare nahi kr skte


// **************************** We can reinitialise a va

let r = 100;
console.log(r);


// let r = 200;
// console.log(r)
// ye galat hoga because dobara declare nahi kar skate

//although we can reinitialise it like:-

r = 200;
console.log(r)

const c = 10;
console.log(c);

// c = 14;
// console.log(c)
//**************const re declare ya re initialise bhi nahi krne deta */

//Loops and conditional
for(var i=0; i<10; i++){
    if(i%2==0){
        console.log(`The number ${i} is an even number`);
    }
}



///Var is function or global scoped 
///while let is block scoped...

// let sirf braces kke andar hi lie karega like agar 4

//for (let i=0)
//to i isnt accessible beyond for

//while var is globally declared.