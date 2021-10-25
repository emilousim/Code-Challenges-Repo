// Write your code below
// PAIRED W/CODY DUPUIS

function hasUniqueChars(string){
    let array = string.split("");

    let result = {};

    for (let i = 0; i < array.length; i++){
        if (result[array[i]]){
            return false;
        }else{
            result[array[i]] = true;
            }
    }
    return true
}

console.log(hasUniqueChars("moonlight"))
console.log(hasUniqueChars("Bob"))