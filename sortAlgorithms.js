console.log("helo");

animals = [
  {
    type: "Dog",
    mammal: true,
  },
  {
    type: "Snake",
    mammal: false,
  },
  {
    type: "Cheetah",
    mammal: true,
  },
];

const mammals = animals.filter((animal) => animal.mammal);

console.log(mammals);
/**
 * * MergeSort O(n log n)
 */

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  let results = [...sorted, ...left, ...right];
  return results;
};
const arr = [3, 52, 1, 432, 1, 32, -4, 2];

console.log(mergeSort(arr));

/**
 * * Quick sort  O(n log n)
 */

const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i in arr) {
    if (i !== pivotIndex) {
      arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log("*************");



const detectSubstring = (str, subStr) => {
  let idxOfStart = 0;
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[j]) {
      j++;
      if (j === subStr.length) {
        return i - (subStr.length - 1);
      }
    } else {
      i -= j;
      j = 0;
    }
  }
  return -1;
};

/**
 * * All possible permutaions in strings
 */

const permutaions = (str) => {
  let results = [];

  if (str.length == 1) {
    return [str];
  }

  for (let i = 0; i < str.length; i++) {
    const first = str[i];
    const charsRemaining = str.substring(0, i) + str.substring(i + 1);
    const remainingPerms = permutations(charsRemaining);
    for (let j = 0; j < remainingPerms.length; j++) {
      results.push(first + remainingPerms[j]);
    }
  }
  return results;
};

let buffer = new ArrayBuffer(4);

console.log(buffer.byteLength);