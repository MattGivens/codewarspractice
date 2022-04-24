// Write a method, that will get an integer array as parameter and will process 
//every number from this array.

//Return a new array with processing every number of the input-array like this:

//If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  let newArr = []
      for (let i = 0; i < array.length; i++){
      let numSR = Math.sqrt(array[i]) 
      let rounded = Math.floor(numSR)
      if (numSR === rounded){
        newArr.push(numSR)
      }
      else newArr.push(array[i] * array[i])
    }
    return newArr;  
  }

 