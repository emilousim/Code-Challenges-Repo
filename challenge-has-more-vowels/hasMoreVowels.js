const hasMoreVowels = expr =>{
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let numOfVowels = 0
    let exprSplit = expr.toLowerCase().split('')
    let vowelsNeeded = expr.length /2

    for (let i = 0; i < exprSplit.length; i++){
        let letter = exprSplit[i]

        if (vowels.includes(letter)){
            numOfVowels++
        }
        if (numOfVowels > vowelsNeeded){
        return true}
    }
    return false
}

console.log(hasMoreVowels('ham'))

console.log(hasMoreVowels('tea'))

console.log(hasMoreVowels('portable'))
