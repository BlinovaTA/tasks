function filterArray(mixedArray, isEven) {
  let filteredArray = [];

  for (let i = 0; i < mixedArray.length; i++) {
    if (isEven(mixedArray[i])) {
      filteredArray.push(mixedArray[i]);
    }
  }

  return filteredArray;
}

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => num % 2 === 0 ;
console.log(filterArray(mixedArray, isEven));