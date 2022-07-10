function outer(){
    inner();
    function inner(){
        console.log(b);
    }
}

var b = 10;
outer();
console.log(b);


/// 10 10 using memory diagram

//Lexical scope , Lexical environment chaining
//jo local execution contexts hote hai wo apnne saath apne parents ki bhi lexical environment lekr chalte hai

console.log("previous commits");
console.log("previous commits");
console.log("previous commits");
console.log("previous commits");
console.log("previous commits");
console.log("previous commits");