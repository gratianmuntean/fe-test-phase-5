// You are given two strings, A and B. Return whether A can be shifted some number of times to get B.
// Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B.
//  A = abc and B= acb should return false.


const isShifted = (a, b) => {
    var yes = false;
 
    for(var i=0; i<a.length; i++){
        var tocheck = shiftOne(a,i);
        if(tocheck===b) {
            yes=true; 
            break;
        }
    }
    return yes;
};

const shiftOne = (str, n) =>
{
    var ans = str.substring(n, str.length) +
              str.substring(0, n);
    return ans;
};




