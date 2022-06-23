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





