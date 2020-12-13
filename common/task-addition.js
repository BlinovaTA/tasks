const filterArray = (mixedArray, isEven) => {
  let filteredArray = [];
  
  mixedArray.forEach(item => {
    if (isEven(item)) {
      filteredArray.push(item);
    }
  });


  return filteredArray;
}

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => num % 2 === 0;
console.log(filterArray(mixedArray, isEven));