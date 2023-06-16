function letterCombinations(input) {
  //Complete the function

	let table = {
    "2" : "abc",
    "3" : "def",
    "4" : "ghi",
    "5" : "jkl",
    "6" : "mno",
    "7" : "pqrs",
    "8" : "tuv",
    "9" : "wxyz"
}

let solutions = [] ;

function solve(currentIndex, calculatedString) {
    if(input.length <= currentIndex){
        solutions.push(calculatedString);
        return;
    }
    // currentIndex = 2, calculatedString = "dm"
    let currentChar = input[currentIndex] // "3"
    // table["3"] = "def"
    for(let i = 0 ; i < table[currentChar].length; i++) {
        // "def" 
        solve(currentIndex + 1, calculatedString + table[currentChar][i] )
        // solve(0 + 1, "" + "d")
    }
}

solve(0, "")

console.log(solutions);
}

module.exports = letterCombinations;
