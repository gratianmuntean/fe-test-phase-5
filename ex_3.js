// You are given two strings, A and B. Return whether A can be shifted some number of times to get B.
// Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B.
//  A = abc and B= acb should return false.

const isShifted = (a, b) => {

    var n = a.length;
    var isMatch = false;

    for (let i=0; i<n; i++){
        var shiftedString = shiftOne(a);
        if (shiftedString === b)
        {
            isMatch = true;
            break;
        }
        a = shiftedString;
    }

    return isMatch;

};


const shiftOne = (str) =>
{   
    var n = str.length;
    var ans = str.substring(n-1,n) + str.substring(0, n-1);
    return ans;
};

//console.log(shiftOne("abcd"));

console.log(isShifted('abcde', 'cdeab'));
console.log(isShifted('abc', 'acb'));
