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
