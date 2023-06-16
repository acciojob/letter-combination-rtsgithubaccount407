function letterCombinations(input) {
  //Complete the function

	let table ={
					"2":"abc";
					"3":"def";
					"4":"ghi";
					"5":"jkl";
					"6":"mno";
					"7":"pqrs";
					"8":"tuv";
					"9":"wxyz";
	}
let solution =[];

function solve(currentIndex, calculatedString){
	if(input.length<=currentindex){
		solution.push(calculatedString);
		return;
	}
	let currentChar = input[currentIndex]
	for(let i=0; i<table[currentChar].length; i++){
		solve(currentIndex+1, calculatedString + table[currentChar[i])
	}
	
}
solve(0,"")
retrun solution;
module.exports = letterCombinations;
