// You are given two strings, A and B. Return whether A can be shifted some number of times to get B.
// Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B.
//  A = abc and B= acb should return false.

// const isShifted = (a, b) => {};


const isShifted = (a, b) => {

    if (!a || !b || a.length !== b.length)
        return false;


    if (a === b)
        return true;

    let combos = [];
    for (let i = 0; i < a.length; i++) {
        let c = a.slice(i) + a.slice(0, i);
        combos.push(c);
    }

    return combos.some(s => s === b);
}
console.log(isShifted('abcde', 'cdeab'));
console.log(isShifted('abc', 'acb'));