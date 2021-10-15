// Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer.
// The most significant digit is at the front of the array and each element in the array contains only one digit.
// Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

// examples
// Input: [2,3,4]
// Output: [2,3,5]

// Input: [2,9,9]
// Output: [3,0,0]

// const plusOne = (list) => {};

const plusOne = (list) => {
    var i = list.length - 1;
    var val = 0;
    var t = 1;
    while (i >= 0 && t) {
        val = list[i] + t;
        t = Math.floor(val / 10);
        list[i] = val % 10;
        i--;
    }
    if (t) list.unshift(t);
    return list;
};
console.log(plusOne([2, 3, 4]));
console.log(plusOne([2, 9, 9]));