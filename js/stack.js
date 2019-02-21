function Stack() {
		this.dataStor = [];
		this.top1 = 0;
		this.push1 = push1;
		this.pop1 = pop1;
		this.peek = peek;
		this.clear1 = clear1;
		this.length1 = length1;
		this.toStr = toStr;
	}
	function push1(element) {
		this.dataStor[this.top1++] = element;
	}
	function peek() {
		return this.dataStor[this.top1-1];
	}
	function pop1() {
		return this.dataStor[--this.top1];
	}
	function clear1() {
		this.top1 = 0;
	}
	function length1() {
		return this.top1;
	}
	function toStr() {
	var retSt = "";
		for (var i = 0; i < this.top1; ++i) {
			retSt += this.dataStor[i] + "\n";
		}
	return retSt;
	}
	var s = new Stack();
	function pus() {
		s.push1(prompt('enter_an_element_to_add'));
		document.getElementById("rei").value = "";
		document.getElementById("rei").innerHTML = s.toStr() + "\n";
	}
	function view() {
		document.getElementById("rei").value = "";
		document.getElementById("rei").innerHTML = s.toStr() + "\n";
	}
	function popu() {
		var popped = s.pop1();
		document.getElementById("rei").value = "";
		document.getElementById("rei").innerHTML = "The removed element is: " + popped + "\n\n" + "current stack elements: <br>" + s.toStr() + "\n";
	}
	function topa() {
		document.getElementById("rei").innerHTML = "Top of stack: " + s.peek() + "\n";
	}
	function leng() {
		document.getElementById("rei").innerHTML = "length: " + s.length1();
	}
	function empty() {
		s.clear1();
		document.getElementById("rei").value = "";
		document.getElementById("rei").innerHTML = s.toStr() + "\n";
	}
	
function stack() {
	document.getElementById('d2').innerHTML = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Stacks</h3><p class="text2">A stack is a basic data structure that can be logically thought as linear structure represented by a real physical stack or pile, a structure where insertion and deletion of items takes<img src="images/stack.png" class="stack1"></img> place at one end called top of the stack. The basic concept can be illustrated by thinking of your data set as a stack of plates or books where you can only take the top item off the stack in order to remove things from it. </p></div><div class="d42"><h3 class ="hed3">Pseudocode to Push</h3><img src="images/pseudo12.png" class="stack2"></img></div></div><div class = "d5"><div class="d51"><div id="d511"></div><div id="rei"></div></div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th></th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><th style="text-align:center;"> Search </th><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr><tr><th style="text-align:center;"> Insert </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(1) </td></tr><tr><th style="text-align:center;"> Delete </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(1) </td></tr><tr><th style="text-align:center;"> Access </th><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr></tbody></table></div></div>';
	
	document.getElementById('d511').innerHTML = '<br><br><input type="button" onclick=pus() value="Add element to stack" /><input type="button" onclick=popu() value="remove from stack" /><input type="button" onclick=topa() value="whats at the top" /><input type="button" onclick=leng() value="length of the stack?" /><input type="button" onclick=view() value="view elements currently on the stack" /><input type="button" onclick=empty() value="Empty the stack?" /><br><br>';
}