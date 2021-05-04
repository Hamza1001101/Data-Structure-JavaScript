"use strict";

/**
 * * Data Structure and Modern Operators & Strings
 */
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavi1, Firenza, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Something else"],
  MainMenu: ["Pizza", "Pasta", "Risotto"],
};

//* destructuring Arrays

let [first, , third] = restaurant.categories;

console.log(`${first} and ${third} `); // Italian and Vageterian

/**
 * * Swapping
 */
// let temp = oscar
// oscar = nominee
// nominee = temp 

/**
 * * Swapping using destructuring
 */
let oscar = "La La Land";
let nominee = "Moonlight";
[oscar, nominee] = [nominee, oscar];

console.log(oscar + " and " + nominee); // --> moonlight and la la land

/**
 * * Nested Destructuring
 */
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

/**
 * * Default Values.
 * * This is useful when you for example get data from an API.
 */

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Complex Destructuring
const layeredArr = [3, 5, 2, [32, 4], [42, 8, 99], 100]; // 33, 42, 100

const [, , , [thirdyTwo], [, , nintyNine], houndrend] = layeredArr;

console.log(thirdyTwo, nintyNine, houndrend);
/**
 * * Destructuring Objects.
 */

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //open 24hrs
    close: 24,
  },
};

// --> use {} to destruct
/**
 * * Destructuring objects you need to pass the exact names of the object.
 */
const { fri } = openingHours; // We unpucking the fri-property value.
console.log(fri);

const { sat: satHours } = openingHours; // In case you want to set a new name to the object property you u can use this
console.log(satHours);

/**
 * * Nested Objects
 */
const {
  sat: { open, close },
} = openingHours; 

console.log(open, close);

/**
 * * Use Case
 */

restaurant.delivery = {
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
};

console.log(restaurant);

function readObj({ time, address, mainIndex, starterIndex }) {
  return console.log(
    `Order is ordered ${time} and the address is ${address}, 
    + If you want, the mainIndex is ${mainIndex}`
  );
}

readObj(restaurant.delivery);

/**
 * *The Spread Operator (Unpack array elements)
 * * Can be used all iterables.
 * ? The difference bte spread operator and destructuring is
 * ? The spread operator dont create a new element and it
 * ? takes out all the element from the array
 * * useful for Iterables (Arrays, strings, maps, sets)
 * ! Objects are not iterable
 */
const arr = [7, 8, 9];
const newArr = ["somaliland", "xamar", ...arr];
console.log(newArr);

const str = "Hamza";
const letters = [...str, "Mohamed"];
console.log(letters);

/**
 * *The rest patter.
 *  * It uses the same syntax as spread operator but
 *  * it functions the opposite way of spread operator
 */

const [a, b, ...rest] = [2, 6, "Somalia", "Somaliland", "Sweden"];
console.log(rest);

// XOR exclusive OR
const fan = (nums) => {
  return nums.reduce((prev, acc) => prev ^ acc, 0);
};
console.log(fan([4, 1, 2, 1, 2]));

/**
 * * this is called short-circuit evaluation.
 * * JS is just gonna return the value thats yeilds thruth.
 */
console.log(3 || "jonas");
console.log(undefined || null);

console.log("Hamza" && 5);

const items = ["cooking", "eating", "reading", "cooking"];

for (const iterator of items.entries()) {
  console.log(iterator);
}

let hamza = "La La Land";
let warsame = "Moonlight";
[hamza, warsame] = [warsame, hamza];

console.log("object", hamza);

function sumTwo(numbers, target) {
  for (let left = 0, right = numbers.length - 1; left < right; ) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [++left, ++right];
    else sum > target ? right-- : left++;
  }
}

/**
 * Strings
 *
 */

const filterOut = (arr) => {
  //*sort first
  arr = arr.sort((a, b) => a - b);
  return arr.filter(
    (item, i) => !(arr[i] === arr[i + 1] || arr[i] === arr[i - 1])
  );
};
 

const zigZagTraversal = (root) => {
  let result = [];
  let list = [];
  let dir = true;
  if (root) {
    list.push(root);
    while (list.length > 0) {
      let currentLevelSize = list.length;
      let currentLevel = [];
      for (let i = 0; i < currentLevelSize; i++) {
        let currentNode = list.shift();
        currentLevel.push(currentNode.val);
        if (currentNode.left) {
          list.push(currentNode.left);
        }
        if (currentNode.right) {
          list.push(currentNode.right);
        }
      }
      if (!dir) {
        currentLevel.reverse();
      }
      result.push(currentLevel);
      dir = !dir;
    }
  }
  return result;
};
