// You are given two sorted arrays that both only contain integers. 
// Your task is to find a way to merge them into a single one, 
// sorted in asc order. Complete the function mergeArrays(arr1, arr2), 
// where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 
// must be arrays with 0 or more Integers. If both arr1 and arr2 are 
// empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 
// and arr2 may have same integers. Remove duplicated in the returned result.


function mergeArrays(arr1, arr2) {
  let conC = arr1.concat(arr2)
  let resultSorted = conC.sort(function(a, b) {
    return a-b
  })
  
 
    var uniqueArray = [];
    
    // Loop through array values
    for(var value of resultSorted){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
  

  
}

let arr1 = [1,3,5,7,9]
let arr2 = [10,8,6,4,2]

// let conC = arr1.concat(arr2)
// let resultSorted = conC.sort()
// console.log(resultSorted)

// function getUnique(array){
//   var uniqueArray = [];
  
//   // Loop through array values
//   for(var value of array){
//       if(uniqueArray.indexOf(value) === -1){
//           uniqueArray.push(value);
//       }
//   }
//   return uniqueArray;
// } 

console.log(mergeArrays(arr1, arr2))