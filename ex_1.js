// Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer.
// The most significant digit is at the front of the array and each element in the array contains only one digit.
// Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

// examples
// Input: [2,3,4]
// Output: [2,3,5]

// Input: [2,9,9]
// Output: [3,0,0]

const plusOne = (list) => {
    var i=list.length-1;
    
            while(i>=0){
                if(list[i]<9){
                    list[i]++; 
                    break; 
                }
                else{
                    list[i]=0
                    i--;
                    if(i==0&&list[i]==9) {
                        list[i]=0;
                        list.splice(0, 0, 1);
                        break;
                        }
                    }
            }
    return list;
};
