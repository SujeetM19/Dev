//Block  scoped, How  scope gets vanished and gets poped out of the call stack after the block is closed


// {
//     var a = 10;

//     let b = 20;

//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// console.log(a);
// console.log(b);
// console.log(c);



// var  a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c =  30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);


let  b = 10;
{
    var a = 10;
    let b = 20;
    const c =  30;

    console.log(a);
    console.log(b);
    console.log(c); 
}

console.log(b);





