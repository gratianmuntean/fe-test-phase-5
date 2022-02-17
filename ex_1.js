// Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer.
// The most significant digit is at the front of the array and each element in the array contains only one digit.
// Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

// examples
// Input: [2,3,4]
// Output: [2,3,5]

// Input: [2,9,9]
// Output: [3,0,0]

const plusOne = (list) => {

let number = 0;
let n = list.length;
let odds = 10;
let newList = Array();

for (let i=0; i<n; i++){

    number =(number * odds ) + list[i];
   // console.log(number);
}

number++;
//console.log(number);

newList = Array.from(String(number), myFunc);

console.log(newList);

};

let myFunc = num => Number(num);

console.log(plusOne([2,3,4]));
console.log(plusOne([2,9,9]));