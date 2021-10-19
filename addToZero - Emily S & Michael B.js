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


// --------------------------------------------------------- separating diff ways to solve
// function takes anumber between 1-10, and returns an array of unique numbers


function luckyNumbers(n){
  let array = [];
  
  for (let i = 0; i < n; i++){
    array.push(Math.floor(Math.random() * 10) +1);
  }
  return array;
}
console.log(luckyNumbers(4))

// Math.random() will pull a random number between 0-1; * 10 makes it indexes 0-9; + 1 makes its 1-10


function luckyNum(n){
  luckyArr = []
  let i = 0

  while(i < n){

    let x = Math.floor((Math.random() * 10)+1)

    if(!luckyArr.includes(x)){
      luckyArr.push(x)
      i++

    }

  }
  return luckyArr

}

console.log(luckyNum(4));