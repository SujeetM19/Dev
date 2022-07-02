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