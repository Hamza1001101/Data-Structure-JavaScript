/**
 * * fills the array whitever you passed
 *
 */
let scores = Array(10).fill(0);
console.log(scores);
/**
 * *READING AND WRITING
 */
// use the square baracket when you read or write arrays.
let arr1 = [1, 3, 5, 6, true, "array", { one: 43 }];
console.log(arr1[92]);
//assign to a new value.
arr1[5] = "HAMZA hayd";
console.log(arr1);

function fillArray(arr1) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = arr1[i] * 2;
    //this would be the same as
    arr.push(arr1[i] * 2);
  }
  return arr;
}

console.log(fillArray([2, 4, 6, 89, 3]));

/**
 * * Deleting Arrays
 * * using delete keyword would not effect of the array length. 
 */

let delArr = [1, 3, 46, 7, 4, 9, 7, 9]
delete delArr[2]
console.log(delArr.length)