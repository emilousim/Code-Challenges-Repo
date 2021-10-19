// Write your code below this line. 
function randomUniqueNumbers(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
  
    return result;
  }

  let luckyNumbers = (randomUniqueNumbers(10,4))
 console.log(luckyNumbers)
