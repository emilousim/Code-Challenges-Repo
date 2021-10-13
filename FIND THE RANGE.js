var arr = [1, 4, 11, 2, 37, -4];

var max = arr[0];
var min = arr[0]

for(var i = 0; i < arr.length; i++){
  if (arr[i] >= max) {
    max = arr[i];
  }
  if (arr[i] <= min) {
    min = arr[i];
  }
}

console.log(max);
console.log(min);