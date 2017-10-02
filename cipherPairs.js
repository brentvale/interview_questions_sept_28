// given an array return the total number of cipher pairs:
// 	["abba",
// 	"cddc",
// 	"gdd",
// 	"mll"] => total of 2 pairs


//additional information received:
//a-z uppercase and lowercase

//time complexity worst case O(n^2) (comparison of string to each other string if all strings in the 
//input array are the same length)
//O(n) additional space for hash creation for each string

function cipherPairs(array){
	let cipherPairsCount = 0;
	for(let i = 0; i < array.length; i ++){
		let cipherHash = createCipherHash(array[i]);
		for(let j = i+1; j < array.length; j ++){
			if(array[j].length === array[i].length){
				if(compareStringToCipherHash(array[j], cipherHash)){
					cipherPairsCount += 1;
				}
			}
		}
	}
	return cipherPairsCount;
}

function createCipherHash(string){
	let characterHash = {};
	for(let i = 0; i < string.length; i ++){
		let targetChar = string.charAt(i);
		characterHash[i] = new Array();
		for(let j = 0; j < string.length; j ++){
			if(string.charAt(i) === string.charAt(j)){
				characterHash[i].push(j);
			}
		}
	}
	return characterHash;
}

function compareStringToCipherHash(string, cipherHash){
	for(let i in cipherHash){
		let targetChar = string.charAt(cipherHash[i][0]);
		for(let j = 0; j < cipherHash[i].length; j ++){
			if(string.charAt(cipherHash[i][j]) !== targetChar){
				return false;
			}
		}
	}
	return true;
}

console.log(cipherPairs(["abba", "cddc", "gdd", "nll", "rttr"])); //4