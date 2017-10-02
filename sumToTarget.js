// 1. given an array and a target, return true if there is a subsequence that ads up to the target value

//Additional information given: no negative values

function sumToTarget(array, target){
	if(array.length === 0){
		return false;
	}
	
	for(let i = 0; i < array.length; i++){
		let sum = array[i];
		let j = i + 1;
		
		while(sum < target && j < array.length){
			sum += array[j];
			if(sum === target){
				return true;
			}
			j ++;
		}
		
		if(j === array.length && sum < target){
			return false;
		}
		
	}
	return false;
}


let array1 = [1,2,3,4,5,6];
let array2 = [1,3,5,7,9];

console.log(sumToTarget(array1, 11)); //true
console.log(sumToTarget(array1, 21)); //true
console.log(sumToTarget(array2, 6)); //false