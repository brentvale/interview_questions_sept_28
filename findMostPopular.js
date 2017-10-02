// 2. given an array of people, find the famous person.  A famous person is one that
// does not follow anyone else.  You have the method follow that when given two people,
// returns true is a follows b => function follows(a,b)

//additional information given:
//there is only one famous person - there is guaranteed to be a famouse person
// as soon as person X follows someone else break from the loop of determining 

//O(n^2) time complexity (worst case), best case => everyone in this universe follows many other people
//so iterating through the loop takes one comparison for each person except for the popular person
//that requires one full iteration through the loop

function findFamousPerson(array){
	
	for(let i = 0; i < array.length; i++){
		let followsNoone = true;
		for(let j = 0; j < array.length; j++){
			
			if(j !== i){
				if(follows(array[i], array[j])){
					followsNoone = false;
					break;
				}
			}
		}
		if(followsNoone){
			return array[i];
		}
	}
}

function follows(personA, personB){
	if(personA === "a" && personB === "b"){
		return true;
	}
	if(personA === "a" && personB === "p"){
		return true;
	}
	if(personA === "b" && personB === "a"){
		return true;
	}
	if(personA === "b" && personB === "p"){
		return true;
	}
	if(personA === "p" && personB === "a"){
		return false;
	}
	if(personA === "p" && personB === "b"){
		return false;
	}
}

console.log(findFamousPerson(["a", "b", "p"]));