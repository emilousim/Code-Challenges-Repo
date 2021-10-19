 // EMILY S AND MICHAEL B

// Starting array



let arr = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below

 function numbers(arr, num) {
  let obj = {}
  let diff

  for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i]

    if (obj[diff]) {
      return true
    } else {
      obj[arr[i]] = true
    }
  }
  return false
}

let numbersResult = numbers(arr, 0)

console.log(numbersResult)

