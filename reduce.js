console.log("hei");

const leastMissingPositive = (arr) => {
  arr = arr.filter((val) => val > 0).sort((a, b) => a - b);
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (j === arr[i]) j++;
    else return j;
  }
  return j;
};

console.log(leastMissingPositive([1, 2, 3, 0]));
console.log(leastMissingPositive([0, 3, -1, -2, 1]));
console.log(leastMissingPositive([5, 6, 7, 8, 9]));
console.log(leastMissingPositive([3, 5, -1, 1])); //-1,1,3,5

/**
 * * this uses hashMap
 * * O(n) time complexity
 */

const majorityElement = (arr) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] + 1 || 1;
  }
  let counter = 1;
  let item;
  for (let num in map) {
    if (counter < map[num]) {
      counter = map[num];
      item = num;
    }
  }

  console.log(map);
  return item;
};

console.log(majorityElement([1, 4, 2, 4, 4, 3, 4]));
console.log(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]));

/**
 * * Another way of doing it
 * * O * (log n)
 */

const majorityElement2 = (arr) => {
  arr = arr.sort((a, b) => a - b);
  return arr[Math.floor(arr.length / 2)];
};
console.log(majorityElement2([1, 4, 2, 4, 4, 3, 4]));
console.log(majorityElement2([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]));
