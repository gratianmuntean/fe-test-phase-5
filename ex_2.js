// Given an array of integers, create a new list build from duplicates.
// If there are no duplicates in the given array return -1.

// examples
// Input: arr = [7, 3, 5, 5, 4, 3, 5, 4, 8, 8];
// Output: [5, 3, 8, 4];

// Input: arr = [1,2,3,4];
// Output: -1;

// const getDuplicates = (list) => {};

const getDuplicates = (list) => {
    const count = {};
    const result = [];

    list.forEach(item => {
        if (count[item]) {
            count[item] += 1
            return
        }
        count[item] = 1
    })

    for (let prop in count) {
        if (count[prop] >= 2) {
            result.push(prop)
        }
        if (result == 0) {
            return -1;
        }
    }
    return result;
};



console.log(getDuplicates([7, 3, 5, 5, 4, 3, 5, 4, 8, 8]))
console.log(getDuplicates([1, 2, 3, 4]))