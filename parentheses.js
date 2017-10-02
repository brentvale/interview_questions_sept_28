// 2. parentheses.  remove unbalanced parentheses
// 	"(((" => ""
// 	"(a))" => "(a)"

//The following continues the solution discussed with Lakhvinder

//This solution does not return all possible values of removing parentheses
//Example:
// "()())()" -> ["()()()", "(())()"]
// "(a)())()" -> ["(a)()()", "(a())()"]
// ")(" -> [""]


//Space complexity => an addition 2N space is used => O(n)
//Time complexity => two loops through the string, forward and backwards => ~2N => O(n)

function removeParens(string){
	
	let arrayBuffer = [];
	let count = 0;
	
	for(var i = 0; i < string.length; i ++){
		if(string.charAt(i) === "("){
			arrayBuffer.push(string.charAt(i));
			count += 1;
		}
		if(string.charAt(i) === ")"){
			if(count !== 0 ){
				arrayBuffer.push(string.charAt(i));
				count -= 1;
			} 
		}
		if(string.charAt(i) !== ")" && string.charAt(i) !== "("){
			arrayBuffer.push(string.charAt(i));
		}
	}
	
	let newString = arrayBuffer.join("");
	let newArrayBuffer = [];
	count = 0;
	
	for(var i = newString.length-1; i >= 0; i--){
		if(newString.charAt(i) === ")"){
			newArrayBuffer.unshift(newString.charAt(i));
			count+= 1;
		}
		
		if(string.charAt(i) === "("){
			if(count !== 0 ){
				newArrayBuffer.unshift(newString.charAt(i));
				count -= 1;
			}
		}
		
		if(newString.charAt(i) !== ")" && newString.charAt(i) !== "("){
			newArrayBuffer.unshift(newString.charAt(i));
		}
	}
	
	return newArrayBuffer.join("");
	
}

console.log(removeParens("hello(there(you))"));
console.log(removeParens("hello(there(you))))"));
console.log(removeParens("))))"));
console.log(removeParens("(((("));
console.log(removeParens("()((hi)there)("));