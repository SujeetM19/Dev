// Hoisting definition :- Javascript hoisting refers to the process whereby the interpretter appears to move the declaration of functions, variables, or classes to th top  of their scope, prior to the execution of code.
// kehne ka matlab hai ki we can imagine ki jo variable hai hamara humne ek tarike se usko phle hi upar declare kr diya hai hoisting m 

///console.log(x);
///greet();
//var x = 10;
//function greet(){
   // console.log("Hello");
//}


//Use memory diagram to solve the problem of hoisting
//memory diagram agar aata hai to sab sahi hoga!!


//hoisting ki definition  jaisa koi code exist nahi krt, agar memory diagram aata hai to pata rahega ki aisa hi hona tha already. but hoisting ke according variables ek tarike se phle declare kr diye hai humne which is kind of not satisfactory.

//






// hoisting ki wajah se hinderence nahi banta, code chalta rehta hai. Hosting is a phenomenon jiski wajah se code hamare rukta nahi hai + hoisting mei ek tarike se upar declare ho jate hai variable declare ho jaate hai +  memory diagram ke hisaab se hi hota h sab


// Ques :- 

console.log(a); //undefined
greet();        // Hello guys
//rock();         //undefined (error aa raha hai)
var a = 10;

console.log(rock);



function greet(){
    console.log("Hello guys");
}

//function expression mei thoda alag hota  hai


var rock = function(){
    console.log("You guys rock");
}


//agar iske baar hello(); likhenge to run karega!

//memory creation ke time jagah assign nahi hoti hai. sirf memory allloacte hoti hai, variables assign nahi hote hai!


//function  expression ke case mei bhiundefined ko kaat kar poora function definition aa jata hai memory creating space mei.

 




