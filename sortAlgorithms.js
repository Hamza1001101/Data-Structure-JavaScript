const maxProductOfThree = (array) => {
  let sortedArr = array.sort((a, b) => a - b),
    largestItem = array.length - 1,
    product1 = 1,
    product2 = 1;

  for (let x = largestItem; x > largestItem - 3; x--) {
    product1 = product1 * sortedArr[x];
  }
  product2 = sortedArr[0] * sortedArr[1] * sortedArr[largestItem];
  return product1 > product2 ? product1 : product2;
};

console.log(maxProductOfThree([-12, -7, -1, 11, 17]));
console.log(maxProductOfThree([0, 1, 2, 3]));


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
game["suspects"] = [];
game.suspects.push({
  name: "Rusty",
  color: "orange",
});
game.murderer = "??";

console.log(game.weapons.map(({ type, location }) => type));

console.log(game.suspects);

const [name1] = [game.suspects.map((name) => name.name)];
const object = { name: "Rusty", room: "Kitchen", weapon: "candlestick" };

const { weapon: hub, room, name } = object;

console.log(hub, room, name);

const games = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

const [{ color: firstColor }, { color: secondColor }] = games.suspects;

console.log(firstColor, secondColor);

let names = games.suspects.map(({ name, color }) => name);
console.log(names);

console.log(games["suspects"]);


