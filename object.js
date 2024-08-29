
var car = {
    make: "tata",
    model: "tata nexon",
    year: 2020
};

// console.log(car.make, car.year);


// modify object
car.model = "Camry";
car.color = "blue";

// console.log(car)


// for in loop iterate 
for(let key in car) {
    console.log(`${key}: ${car[key]}`)
}



// Nested objects
var person  = {
    firstName: "anmol",
    lastName: "tomar",
    address: {
        street: "gali no 6",
        city: "gwalior",
        zipCode: 474001
    }
};

// access city of the address
console.log(person.address.city);


// Array of Objects:
var students = [
    {
        name: "anmol",
        grade: "A+"
    },
    {
        name: "palak",
        grade: "A"
    },
    {
        name: "kallo",
        grade: "A"
    }
    ,
    {
        name: "rahul",
        grade: "B"
    }

];

students.forEach(student=>{
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
});


// Destructuring:

const car2 = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};

const { make, model } = car2;

// console.log(make);
// console.log(model);


const fruits2 = ["apple", "banana", "cherry", "date"];

const [firstFruit, secondFruit] = fruits2;
// console.log(firstFruit); 
// console.log(secondFruit);



// Merge Objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);


