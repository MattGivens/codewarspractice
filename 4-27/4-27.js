// You get an array of numbers, return the sum of 
// all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  arr.push(0)
  let posNums = arr.filter(num => num >= 0)
  return posNums.reduce((acc, c) => acc + c)
}

let testArr = []
console.log(positiveSum(testArr))