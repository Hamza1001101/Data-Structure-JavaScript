

function isStr(str) {
    /**
     * * The instanceof is handling some edge cases. 
     */
    return typeof str === 'string' || str instanceof String
}

const arr = [3, 3, 5, 3,]
const st = 'somalian'
const boo = true

console.log(isStr(boo))

function unCap(str) {
    let capitalized = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        
        if (str[i - 1] === ' ') {
            capitalized += str[i].toUpperCase()
        }
        else capitalized+= str[i]
    }
    return capitalized
}

console.log(unCap('the quick brown fox'))

let somevar = new String('hello')

console.log(typeof somevar)


/**
 * * Destructuring and Rest operators
 */

const game = {};

game["weapons"] = [
  {
    type: "lasers",
    location: "lab",
  },
  {
    type: "angry cats",
    location: "libray",
  },
];

console.log(game.weapons);

const [{ location: loc1 }, { location: loc2 }] = game.weapons;

console.log(loc1 + " and " + loc2);

const arr = ["somalia", "spain", "sri lanka", "sudan", "south africa"];

const [c1, c2, c3, ...rest] = arr;

console.log(c1, c2, c3);

console.log(rest);

console.log(`object`, arr);   

/**
 * * Objects
 */

//Check if rgb is an instance of Array objects. 
let rgb = ['red', 'green', 'blue']
console.log(rgb instanceof Array)


/**
 * * Primitive and Reference Data types
 */

let person = { age: 299 };
let person1 = person;
person1.age = 43;
console.log(person);

let user = {
  name: "Hamza",
  age: 30,
  email: "dado.org@hotmail.com",
  location: "berlin",
  blog: ["why mac and cheese", "10things to make marmite"],
};

let user1 = user;
console.log(user1.age);
user.age = 32;
console.log(user.age);

console.log(user1.age);

const arr = [2, 4];
const arr1 = [...arr];

console.log(arr1);

arr.push("somalia");

console.log(arr1);

/**
 * * Be aware with boolean statements when dealing with reference datatypes
 * ! (Objects & Arrays)
 * 
 * * This is going to yeild false, since these are two totally different
 * * Objects. 
 */

const person1 = { age: 30 };
const person2 = { age: 30 };

console.log(person1 === person2);