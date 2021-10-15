// Given an array of integers, create a new list build from duplicates.
// If there are no duplicates in the given array return -1.

// examples
// Input: arr = [7, 3, 5, 5, 4, 3, 5, 4, 8, 8];
// Output: [5, 3, 8, 4];

// Input: arr = [1,2,3,4];
// Output: -1;

const getDuplicates = (list) => {
    var output = [];
    var size = list.length;

    for(var i=0; i<size; i++)
        for(var j=i+1; j<size; j++)
        {
            tocheck = list[i];
            if(tocheck==list[j]){ 
                if(!output.includes(tocheck))
                    output.push(tocheck);
            }
        }
    if(output.length==0) return -1
        else return output;


};
