
// Create and Access First and last Element: 
const fruits = ["Apple","Banana","Mango"];

console.log(fruits[0]);   // first element
console.log(fruits[fruits.length-1]);  // last elem.



// Modify Array Elements:
fruits[1] = "Orange";     // replace Banana with Orange
// console.log(fruits);

fruits.push("Pineapple");   // add element in the end off the array

fruits.shift();      // remove first element from the array
// console.log(fruits);


///////////////////// Sort and Reverse: //////////////////////////
// let sortedArray = fruits.sort();      // sort in alphabetival order
// console.log(sortedArray)

// let reverseArray = fruits.reverse();    // reverse array
// console.log(reverseArray);




////////////////////////// Find and Index: ///////////////////////////////

let mangoIndex =  fruits.indexOf("Mango");    // find index value
// console.log(mangoIndex);


let fruitStartsWithG = fruits.find(fruit=> fruit.includes("g"));    // fruit that contains g
// console.log(fruitStartsWithG);





// ///////////////////////////////////// Array Transformation with map and filter: //////////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squaredNumber =  numbers.map(num=> num*num);  // square number 
// console.log(squaredNumber);


let evenNumArray = numbers.filter(num => num%2 === 0);
// console.log(evenNumArray);   // filter even number from array



////////////////////////////////////////// Aggregate Data with reduce: ////////////////////////////////

const expenses = [
    { amount: 50, category: 'Groceries' },
    { amount: 20, category: 'Transportation' },
    { amount: 100, category: 'Entertainment' },
    { amount: 80, category: 'Groceries' },
    { amount: 30, category: 'Transportation' }
];
 
const totalAmountSpent = expenses.reduce((total, expense) => total + expense.amount, 0);

// console.log("Total Amount Spent:", totalAmountSpent);

// Function to group expenses by category and calculate totals
function groupExpensesByCategory(expenses) {
    return expenses.reduce((acc, expense) => {
        const { category, amount } = expense;
        if (!acc[category]) {
            acc[category] = 0;
        }
        acc[category] += amount;
        return acc;
    }, {});
}

const expensesByCategory = groupExpensesByCategory(expenses);

console.log("Expenses by Category:", expensesByCategory);


/////////////////////////// Array Flatteing //////////////////

const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];

function flattenArray(arr) {
    return arr.reduce((acc, value) => {
        return acc.concat(Array.isArray(value) ? flattenArray(value) : value);
    }, []);
}

const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);

const flattenedArrayFlat = nestedArray.flat(Infinity);
// console.log("Flattened Array (flat()):", flattenedArrayFlat);










 






