//Arrays -> is a collection of elements4

let cars = ['BMW', "Audi", 'MG', 1,2,3, true];

//in JS we can store differnet values of different datatypes in arrays

console.log(cars)

//accessing the elements in an array

console.log(cars[0]);
console.log(cars[3]);

//changing the elements

cars[3] = 'mahindra';
cars[10] = 'Maruti';

console.log(cars)
//will show some empty rows

console.log(typeof(cars[8]))
//undefined







//Methods in an array :-

// 1) pop method- this method removes the last elemet of the array

// e.g  
cars.pop();

console.log(cars);

// 2) Push method :- push an element at the starting of the array

cars.push("TATA");


console.log(cars);

//3) Shift method :- removes the first element 

cars.shift();


console.log(cars);

// 4) unshift : adds the element at the starting of the array 

cars.unshift("Mushtang");
cars.unshift("JLR");

console.log(cars);


//---------------------length of the array --------------------

console.log(cars.length);


//---------------------array 2D -------------------

let array2D = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(array2D);



//******************Visualising the table of the array

console.table(array2D);

//accessing the elements of the arrays

console.log(array2D[1][2]);

// 1D arrays vs 2D arrays vs 3D arrays

//        Memory Allocation:

//arrays are continious memory allocation

//not like var a = 10; var b=20;
//isme a aur b ke ka memory location different ho skta h but arrays ke elements contigious hote hai.



//Undefined :- data type jis bhi cheej ki koi value nahi hai.

//********************No. of rows in an array :- array.length
//*********************No. of columns in an array :- array[0].length








