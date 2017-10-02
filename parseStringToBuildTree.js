// 1. Create a tree from the input text:
// 	"<root>aaaa
// 		<node1>alssd</node1>
// 		<node2>bbbaf</node2>
// 	</root>"

//additional information: guaranteed to be in correct format (do not need to worry
//about missing closing node)
//there will always be a root

function TreeNode(options){
	this.name = options.name;
	this.value = options.value;
	this.children = [];
}

TreeNode.prototype = {
	addChild: function(node){
		this.children.push(node);
		return this;
	}
}

function parseString(s){
	let stack = [];
	
	let i = 0;
	while(i < s.length){
		//node start indication
		if(s.charAt(i) === "<" && s.charAt(i+1) !== "/"){
			let j = i+1;
			//find end of node start indication
			while(s.charAt(j) !== ">"){
				j ++;
			}
			//find value of node
			let k = j+1;
			while(s.charAt(k) !== "<"){
				k ++;
			}
			let value = s.slice(j+1, k);
			stack.push(new TreeNode({value: value, name: s.slice(i+1, j)}));
			i = k;
		}
		
		if(s.charAt(i) === "<" && s.charAt(i+1) === "/"){
			if(stack.length === 1){
				return stack[0];
			} else {
				let child = stack.pop();
				stack[stack.length-1].addChild(child);
				i += (child.name.length)+3;
			}
		}
	}
	return stack[0];
}


let string = "<root>aaaB<node1>alssd</node1><node2>bbbaf<node2a>2a2a</node2a><node2b>2b2b</node2b></node2></root>";

console.log(parseString(string));