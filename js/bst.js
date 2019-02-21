function treetraverse() {
		document.getElementById("treeshow").innerHTML = '<input type="button" onclick=treeinorder() value="Inorder traversal" />' + " " +'<input type="button" onclick=treepreorder() value="Preorder traversal" />' + " " + '<input type="button" onclick=treepostorder() value="Post order traversal" />';
	}
	function treesearch() {
		document.getElementById("treeshow").innerHTML = '<input type="button" onclick=treeminsearch() value="Minimum value" />' + " " + '<input type="button" onclick=treemaxsearch() value="Maximum value" />' + " " + '<input type="button" onclick=treespecificsearch() value="search specific item" />';
	}
	function treedelete() {
		document.getElementById("treeshow").innerHTML =  '<input type="text" id="deleteval" placeholder="value to delete" /><input type="button" onclick=deleteval() value="Delete" />';
	}

	
// main functions

	function Node(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
		this.show = show;
	}
	var array = new Array();
	
	function show() {
		array += this.data + " ";
		return array;
		
	}
	function Bstree() {
		this.root = null;
		this.insert = insert;
		this.inorder = inorder;
		this.preorder = preorder;
		this.postorder = postorder;
		this.getMin = getMin;
		this.getMax = getMax;
		this.removeNode = removeNode;
		this.find = find;
	}
	function insert(data) {
		var n = new Node(data, null, null);
		if (this.root == null) {
			this.root = n;
		}else {
			var current = this.root;
			var parent0;
			while (true) {
				parent0 = current;
				if (data < current.data) {
				current = current.left;
					if (current == null) {
						parent0.left = n;
						break;
					}
				}else {
					current = current.right;
					if (current == null) {
						parent0.right = n;
						break;
					}
				}
			}
		}
	}
	function inorder(that) {
		array = " ";
		inorder1(that);
	}
	function preorder(that) {
		array = " ";
		preorder1(that);
	}
	function postorder(that) {
		array = " ";
		postorder1(that);
	}
	function inorder1(node) {
		if (!(node == null)) {
			inorder1(node.left);
			document.getElementById("treepreview").innerHTML = node.show() + " ";
			inorder1(node.right);
		}
	}
	function preorder1(node) {
		if (!(node == null)) {
			document.getElementById("treepreview").innerHTML = node.show() + " ";
			preorder1(node.left);
			preorder1(node.right);
		}
	}
	function postorder1(node) {
		if (!(node == null)) {
			postorder1(node.left);
			postorder1(node.right);
			document.getElementById("treepreview").innerHTML = node.show() + " ";
		}
	}
	
	function getMin() {
		var current = this.root;
		while (!(current.left == null)) {
			current = current.left;
		}
		return current.data;
	}
	function getMax() {
		var current = this.root;
		while (!(current.right == null)) {
			current = current.right;
		}
		return current.data;
	}
	function find(data) {
		var current = this.root;
		while (current.data != data) {
				if (data < current.data) {
					current = current.left;
				}else {
					current = current.right;
				}
				if (current == null) {
					return null;
				}
			}
			return current.data;
	}
	function removeNode(node, data) {
		if (node == null) {
			return null;
		}
		if (data == node.data) {
			// node has no children
			if (node.left == null && node.right == null) {
				return null;
			}
			// node has no left child
			if (node.left == null) {
				return node.right;
			}
			// node has no right child 
			if (node.right == null) {
				return node.left;
			}
			// node has two children
			var tempNode = node.right;
			node.data = tempNode.data;
			node.right = removeNode(node.right, tempNode.data);
			return node;
		}
		else if (data < node.data) {
			node.left = removeNode(node.left, data);
			return node;
		}else {
			node.right = removeNode(node.right, data);
			return node;
		}
	}
	//end of main functions
	var ntree = new Bstree();
	//adding content
	for(i in linvar)
    ntree.insert(linvar[i]);
  
	function treeminsearch() {
		document.getElementById("treepreview").innerHTML = "<span style='color:red;background:yellow;'>"+ "minimum value in tree is " + ntree.getMin() +"</span>";
	}
	function treemaxsearch() {
		document.getElementById("treepreview").innerHTML = "<span style='color:red;background:yellow;'>"+ "maximum value in tree is " + ntree.getMax() +"</span>";
	}
	function treespecificsearch() {
		document.getElementById("treeshow").innerHTML = '<input type="button" onclick=treeminsearch() value="Minimum value" />' + " " + '<input type="button" onclick=treemaxsearch() value="Maximum value" />' + " " + '<input type="button" onclick=treespecificsearch() value="search specific item" /><input type="text" id="specval" placeholder="value to search" /><input type="button" onclick=process() value="GO" />';
	}
	function process() {
			var val = document.getElementById('specval').value;
			var current = ntree.find(val); 
			if (current == null || current != val) {
				document.getElementById("treepreview").innerHTML = "<span style='color:red;background:yellow;'>"+ val +" is not in the tree</span>";
			}else {
				document.getElementById("treepreview").innerHTML = "<span style='color:red;background:yellow;'>"+ val +" found in the Search tree</span>";
			}
			
		}
	function deleteval() {
		var val = document.getElementById('deleteval').value;
		var current = ntree.find(val); 
			if (current == null || current != val) {
				document.getElementById("treepreview").innerHTML = "<span style='color:red;background:yellow;'>"+ val +" is not in the tree</span>";
			}else {
				root = removeNode(ntree.root, val);
				document.getElementById("treepreview").innerHTML = val + " has been deleted from the tree <br /><br />";
				}
		}
	function treeinorder() {
		ntree.inorder(ntree.root);
	}
	function treepreorder() {
		ntree.preorder(ntree.root);
	}
	function treepostorder() {
		ntree.postorder(ntree.root);
	}
	function treeinsert() {
		var tins = prompt("Enter value to add: ");
		ntree.insert(tins); 
		document.getElementById("treepreview").innerHTML = "\n\n" + tins + " has been added to the tree ";
	}
function tree() {
	document.getElementById('d2').innerHTML = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Binary search tree</h3><p class="text2">A binary search tree is a rooted binary tree, whose internal nodes each store a key (and optionally, an associated value) and each have two distinguished sub-trees, commonly denoted left and right. The tree additionally satisfies the binary search tree property, which states that the key in each node must be greater than all keys stored in the left sub-tree, and smaller than all keys in right sub-tree .</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo8.png" class="binary1"></img></div></div><div class = "d5"><div class="d51"><div id="d511"></div><div id="treeshow"  style="width: 98%; margin: 0.5%;"></div><div id="treepreview" style="width: 98%; margin: 0.5%;"></div></div><div class="d52"><table class="table" width="480px"	height= "120px" border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr></tbody></table></div></div>';
	
	document.getElementById('d511').innerHTML = '<br> <input type="button" onclick=treeinsert() value="Add node to tree" />' + '<input type="button" onclick=treetraverse() value="Display tree nodes" />' + '<input type="button" onclick=treesearch() value="Search a value in a tree" />' + '<input type="button" onclick=treedelete() value="Remove a node" />';
}