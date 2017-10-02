//Received as first question, mentioned to Lakhvinder that I had seen/done the problem recently
function validBinarySearchTree(rootNode){
	if(rootNode.right == null && rootNode.left == null){
		return true;
	}
	
	let nodes = [{node: rootNode, lowerBound: -Infinity, upperBound: Infinity}];
	
	while(nodes.length){
		let nodesAndBounds = nodes.pop();
		let node = nodesAndBounds.node,
				lowerBound = nodesAndBounds.lowerBound,
				upperBound = nodesAndBounds.upperBound;
		//check valid
		if(node.value <= lowerBound || node.value >= upperBound){
			return false;
		}
		
		if(node.left){
			nodes.push({node: node, lowerBound: lowerBound, upperBound: node.value});
		}
		if(node.right){
			nodes.push({node: node, lowerBound: node.value, upperBound: upperBound});
		}
		
	}
	return true;
}

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

let a = new BinaryTreeNode(8)
let b = a.insertLeft(4)
	let d = b.insertLeft(2)
	let e = b.insertRight(6)
	let f = d.insertLeft(1)
	let g = d.insertRight(3)
	let h = e.insertLeft(5)
	let i = e.insertRight(7)
let c = a.insertRight(12)
	let j = c.insertLeft(10)
	let k = c.insertRight(14)
	let l = j.insertLeft(9)
	let m = j.insertRight(11)
	let n = k.insertLeft(13)
	let o = k.insertRight(15)

console.log( validBinarySearchTree(a) ); //expect a => true

let aa = new BinaryTreeNode(8)
let bb = aa.insertLeft(10)
let cc = aa.insertRight(9)
	let jj = cc.insertLeft(10)
	let kk = cc.insertRight(11)
	let ll = jj.insertLeft(12)
	let mm = jj.insertRight(13)
	let nn = kk.insertLeft(14)
	let oo = kk.insertRight(15)

console.log(validBinarySearchTree(aa)); //expect a => false

let aaa = new BinaryTreeNode(8)
let bbb = aaa.insertLeft(4)
	let ddd = bbb.insertLeft(2)
	let eee = bbb.insertRight(6)
	let fff = ddd.insertLeft(1)
	let ggg = ddd.insertRight(3)
	let hhh = eee.insertLeft(5)
	let iii = eee.insertRight(9)
let ccc = aaa.insertRight(12)
	let jjj = ccc.insertLeft(10)
	let kkk = ccc.insertRight(14)
	let lll = jjj.insertLeft(9)
	let mmm = jjj.insertRight(11)
	let nnn = kkk.insertLeft(13)
	let ooo = kkk.insertRight(15)

console.log( validBinarySearchTree(aaa) ); //expect a => false
