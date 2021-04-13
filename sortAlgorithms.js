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
console.log(quickSort(arr));