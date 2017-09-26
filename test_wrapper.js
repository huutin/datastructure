const _ = require('lodash');
const countOdd = (arr, i = 0) => {
  if (arr[i] === undefined) {
    return 0
  }
  return (arr[i] % 2) + countOdd(arr, ++i)
}
const countEven = (arr) => {
  return arr.length - countOdd(arr)
}
console.log(countEven([1, 4, 5, 9, 0, 5]))