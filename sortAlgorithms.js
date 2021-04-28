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
