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
  for (let left = 0, right = str.length - 1; left < right; ) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str;
}
console.log(reverseStrInplace([90, 72, 99, 35]));

/**
 * * This runs O(n^2)
 * @param {} n
 * @returns
 */
function fibonachi(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return fibonachi(n - 1) + fibonachi(n - 2);
}

/**
 * * This runs O(n)
 * @param {* int} n
 * @param {* Array} cache
 * @returns
 */
function fibonachi2(n, cache) {
  if (n === 0) return 0;
  else if (n === 1) return 1;

  //return cache value if it already exists
  if (cache[n] != 0) return cache[n];
  cache[n] = fibonachi2(n - 1) + fibonachi2(n - 2);
  return cache[n];
}

console.log(fibonachi(8));

const isPalindrome = (x) => {
  // 8899 --> 9988
  let reversed = x.toString().split("").reverse().join("");
  return x === parseInt(reversed, 10);
};

/**
 * * Not using strings
 * @param { int} x
 */
const isPalindrome2 = (x) => {
  if (x < 0) return false;

  const logarithmAnswer = Math.log10(x);
  const totalDigits = Math.floor(logarithmAnswer) + 1;

  let mostSignificantExtractionMask = Math.pow(10, totalDigits - 1);

  for (let i = 0; i < totalDigits / 2; i++) {
    const mostSignificantDigit = Math.floor(x / mostSignificantExtractionMask);
    const onesPlaceDigit = x % 10;

    if (mostSignificantDigit !== onesPlaceDigit) return false;

    // Removing most significant digit: 999 % 100 = 99
    x %= mostSignificantExtractionMask;

    /*
     * Removing the ones place digit: 99 / 10 = 9.9 => 9
     */
    x = Math.floor(x / 10);

    // Remove 2 0's from the mask since we just lost 2 digits
    mostSignificantExtractionMask /= 100;
  }

  return true;
};
console.log(isPalindrome2(12321));


/**
 * * Looping thru integers without converting the to String
 */

const numbers = 12345687
const digits = []
while (numbers > 0) {
  digits.push(numbers % 10)
  numbers = Math.floor(numbers/10)
}
// digits --> 78654321
console.log(digits.reverse())

function realOne(left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    if(isSelfDividing(i)) res.push(i)
  }
  return res;
}
realOne(1, 22);

function isSelfDividing(n) {
  let num = n.toString();
  for (let digit of num) {
    if (n % digit !== 0 || digit === 0) return false;
    console.log(digit);
  }
  return true;
}
console.log(isSelfDividing(128));