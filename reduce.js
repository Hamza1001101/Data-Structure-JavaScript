/**
 * * Reduce function
 */

const data = [14, 3, 21];

const reducer = function (acc, item) {
  return acc + item;
};

let initialValue = 0;
let total = data.reduce(reducer, initialValue);
console.log(`The sum is ${total}`);

/**
 * * Reduce an Array into a Single Object
 * * It's always better to use the reduce when iterating
 * * large amount of data
 */
const votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "ember",
  "react",
  "vanilla",
];
const myObject = {};
const voteReducer = function (tally, vote) {
  tally[vote] = tally[vote] + 1 || 1;
  return tally;
};

const result2 = votes.reduce(voteReducer, myObject);
console.log(result2);

/**
 * * Two pointers (reverseString in place)
 */

function reverseStrInplace(str) {
  
  for (let left = 0, right = str.length - 1; left < right;) {

    [str[left], str[right]] = [str[right], str[left]]
    left++
    right--
  }
  return str
}
console.log(reverseStrInplace([90, 72, 99, 35]));

function fibonachi(n) {
  if (n === 0) return 0
  else if (n === 1) return 1
  return fibonachi(n-1) + fibonachi(n-2)
}