// Convert number to reversed array of digits
// Given a random non-negative number, you have to return 
// the digits of this number within an array in reverse order.

let n = 265416;


function digitize(n) {
  let myFunc = num => Number(num)
  let intArr = Array.from(String(n), myFunc)
  let reversed = intArr.reverse()
  return reversed
 }

console.log(digitize(n))