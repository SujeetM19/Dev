//javascripts objects are always in key value pairs

/*There are two things 
1) properties 
2) functions

properties are accessed in two ways :- 

1) dot method ------ str.length
2) Square bracket method----- str["length"]



Methods hote hai... Objects ke andar jo bhi functions declared hote hai---  are used in a manner like str.toUpperCase();



*/





let obj = {};
//console.log(obj);


let person = {
    name : "sujeet",
    age  : 23,
    phone : 7707000000,
    gender : "male",
    height : "160cm"
}

console.log(`Hey  ${person.name}, Thank yiu for signing up!!` );

//also

console.log(person["name"]);


//example

let cap = {

    //key : value

    firstName : "Steve",
    lastName : "Rogers",
    friends : ["Bucky", "Tony Stark", "Bruce Banner"],
    age : 102,
    isAvenger : true,
    address : {
        state: "Manhattan",
        city : "New York",
        country : "USA",
    },

    sayHi: function(){
        console.log(`Hello my name is ${this.firstName}`);
    }
}


console.log(cap.friends); //Properties accessing
console.log(cap.friends[0]);


cap.sayHi(); //Method accessing


// JSmei har ccheej objects hai
//array bhi objects ki tarah implemented hai

//let arr = ["a", "b", "c"]
/* let arr = {
    0: "a",
    1:"b",
    2:"c",
}

*/
 

for(let key in cap){

    //Key name ke liye hum for loop chalayenge jisme key will store the variable key
    console.log(key);

    //using bracket notation we'll fetch the value for each key, dot notation se nahi hoga, wo usko variable ki tarah nahi leta h wo usko as it is le leta h
    //variable ke andar binded value thi usko access kiya
    console.log(cap[key]);


}



/*Imppppp 

Keys ko use krte hai accessing ke liye sirf

matter krti hai values jo uske andar stored h

*/




// *********************How the code in JS works drawn in notebook.

//learned the proper execution of JS


/////*************Imp */


