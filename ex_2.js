// Given an array of integers, create a new list build from duplicates.
// If there are no duplicates in the given array return -1.

// examples
// Input: arr = [7, 3, 5, 5, 4, 3, 5, 4, 8, 8];
// Output: [5, 3, 8, 4];

// Input: arr = [1,2,3,4];
// Output: -1;

const getDuplicates = (list) => {

    let n =list.length;
    let ifExist = false;
    let newList = new Array();

    for (let i=0; i < n-1; i++){
        for (let j = i+1; j<n;j++){
            if (list[i] == list[j]){
                if(newList.includes(list[i])){
                    break;
                }

                else{
                    newList.push(list[i]);
                    ifExist = true;
                }
            }
        }
    }

    if(ifExist == true){
        console.log(newList);
    }
    else {
        console.log("-1");
    }

}

console.log(getDuplicates([7, 3, 5, 5, 4, 3, 5, 4, 8, 8]));
console.log(getDuplicates([1,2,3,4]));

