// CODE CHALLENGE 10/28/21 IMMANUEL M


const printNums = (num) =>{
    while (num) {
        let printedNum = num % 10
        console.log(printedNum)
        num = (num - printedNum) / 10
    }
}

printNums(355)