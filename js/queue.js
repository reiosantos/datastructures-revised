function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back1 = back1;
	this.toString1 = toString1;
	this.empty = empty;
}
function enqueue(element) {
	this.dataStore.push(element);
}
function dequeue() {
	return this.dataStore.shift();
}
function front() {
	return this.dataStore[0];
}
function back1() {
	return this.dataStore[this.dataStore.length-1];
}
function toString1() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
return retStr;
}
function empty() {
	if (this.dataStore.length == 0) {
		return true;
	}else {
		return false;
	}
}
/* start new queue*///////////////////////////////////////////
var q = new Queue();

function thist() {
	q.enqueue(prompt('enter_an_element'));
	document.getElementById("reio").innerHTML = q.toString1() + "\n";
}
function to() {
	document.getElementById("reio").innerHTML = q.toString1() + "\n";
}
function deq() {
	q.dequeue();
	document.getElementById("reio").innerHTML = q.toString1() + "\n";
}
function fro() {
	document.getElementById("reio").innerHTML = "\n Front of queue: " + q.front() + "\n";
}
function bac() {
	document.getElementById("reio").innerHTML = "\n Back of queue: " + q.back1() + "\n";
}
function queue() {
	document.getElementById('d2').innerHTML = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Queues</h3><p class="text2">It&#39;s a collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear <img src="images/Data_Queue.svg" class="queue1"></img>terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure.</p></div><div class="d42"><h3 class ="hed3">Pseudocode for Enqueue</h3><img src="images/pseudo11.png" class="queue2"></img></div></div><div class = "d5"><div class="d51"><div id="d511" ></div><div id="reio"></div></div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th></th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><th style="text-align:center;"> Search </th><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr><tr><th style="text-align:center;"> Insert </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(1) </td></tr><tr><th style="text-align:center;"> Delete </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(1) </td></tr><tr><th style="text-align:center;"> Access </th><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr></tbody></table></div></div>';
	
	document.getElementById('d511').innerHTML = '<br><input type="button" onclick=thist() value="Enqueue element" /><input type="button" onclick=deq() value="Dequeue element" /><input type="button" onclick=fro() value="whats at the front" /><input type="button" onclick=bac() value="whats last on the queue" /><input type="button" onclick=to() value="view elements currently on the queue" /><br><br>';
}