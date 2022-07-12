//function along with its lexical scope is known as closures.

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();


function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
var z = outer();
console.log(z);



