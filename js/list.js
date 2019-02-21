function AddlistInput(){
	document.getElementById("listsInput").innerHTML='<form role="form" name="listeditor" ><div class="form-group"><label for="name" class="col-sm-6 control-label">enter postition to insert in the element</label><div class="col-sm-2"><input type="text" class="form-control" id="position" placeholder="numeric" style="width:100px;"></div></div><div class="form-group"><label for="name" class="col-sm-6 control-label">enter element to insert in the list</label><div class="col-sm-2"><input type="text" class="form-control" id="element" placeholder="" style="width:100px;"></div><div><button type="button" name="editLinkedList" class="btn btn-default pull-right" onclick="editList();" style="background:#428bca; color:white; margin-top:10px;"><span class="glyphicon glyphicon-send pull-right"> MANIPULATE</button></span></div></div></form>';
	document.getElementById("listsInput").style.marginBottom="110px";
}
function removelistInput(){
	document.getElementById("listsInput").innerHTML='<form name="listeditor" role="form"><div class="form-group"><label for="name" class="col-sm-6 control-label">enter postition of element to remove</label><div class="col-sm-2"><input type="text" class="form-control" id="position" placeholder="Nummeric" style="width:100px;"><br/></div></div><div><button type="button" name="editLinkedList" class="btn btn-default pull-right" onclick="editList1();" style="background:#428bca; color:white; margin-top:10px;"><span class="glyphicon glyphicon-send pull-right"> MANIPULATE</button></span></div></div></form>';
	document.getElementById("listsInput").style.marginBottom="35px";
}
function traverselist(){
	document.getElementById("listsInput").innerHTML='<form name="listeditor" role="form"><div class="form-group"><label for="name" class="col-sm-6 control-label">enter element to traverse to</label><div class="col-sm-2"><input type="text" class="form-control" id="eleToreach" placeholder=" " style="width:100px;"><br/></div></div><div><button type="button" name="editLinkedList" class="btn btn-default pull-right" onclick="editList2();" style="background:#428bca; color:white; margin-top:10px;"><span class="glyphicon glyphicon-send pull-right"> MANIPULATE</button></span></div></div></form>';
	document.getElementById("listsInput").style.marginBottom="35px";
}

var LinkedList=function(){ this._length=0;this._head=null;}

LinkedList.prototype={
Add:function(index,data)
		{	//allocate memory and assign data to new node
			var i=0,node={
			data:data,
			next:null
			},
			current=this._head,previous;
	 if(index > -1 && index < this._length){		
			if(index==0){
				this._head=node;
				node.next=current;
				}
			else{
				//traverse the list
				/*while(current.next){
				current=current.next;
				}
				current.next=node; */
				
			while(i++ < index ){
			previous=current;
			current=current.next;
			}
			previous.next=node;//add node in between 
		    node.next=current;
				}
				
			this._length++;	
	}
		},
		add:function(data)
		{	//allocate memory and assign data to new node
			var node={
			data:data,
			next:null
			},
			current;
			if(this._head==null)//if linked list is empty
				this._head=node;
			else{
				current=this._head;//traverse the list
				while(current.next){
				current=current.next;
				}
				current.next=node;
				}
				
			this._length++;	
		},
remove:function(index){
     if(index > -1 && index < this._length)
	 {
	 var current=this._head,previous,i=0;
		 if(index===0)
		 this._head=current.next;
		 else{
			while(i++ < index){
			previous=current;
			current=current.next;
			}
			previous.next=current.next;//skip over the node to remove
			}
			this._length--;
	 }
	 
	},
traverse:function(){
var hold='', current=this._head;//traverse the linked list
				while(current){
				hold+=current.data+" " + "<span style='color:red;'> >>> </span>";
				current=current.next;
				
				}
				return hold+"null";
},
traverseTo:function(item){
var hold='', i=1,current=this._head;//traverse the linked list
				while(current){
				hold+=current.data+ " " + "<span style='color:red;'> >>> </span>";
				if(item ==current.data){
				return "<span style='color:red;background:yellow;'>"+item+" found at "+i+"<sup>th</sup> position</span>"+hold+" <b>...</b>";
				break;
				}
				i++;
				current=current.next;
				}
				if(i== 1)
				return "<span style='color:red;background:yellow;'>"+item+" found at "+i+"<sup>st</sup> position</span>"+hold+" <b>...</b>";
				else if(i== 2)
				return "<span style='color:red;background:yellow;'>"+item+" found at "+i+"<sup>nd</sup> position</span>"+hold+" <b>...</b>";
				else if(i== 3)
				return "<span style='color:red;background:yellow;'>"+item+" found at "+i+"<sup>rd</sup> position</span>"+hold+" <b>...</b>";
                else
				return "<span style='color:red;background:yellow;'>"+item+" not found !!! </span>"+"</b>";
				
}
}; 
var mylist;
var i;
 mylist= new LinkedList();
for(i in linvar)
    mylist.add(linvar[i]);
    
    function editList(){
		var index=parseInt(document.getElementById('position').value);
		var data=document.getElementById('element').value;
		mylist.Add(index,data);
		document.getElementById("previewSection").innerHTML=mylist.traverse();
	}
	function editList1(){
		var index=parseInt(document.getElementById('position').value);
		mylist.remove(index);
		document.getElementById("previewSection").innerHTML=mylist.traverse();
	}
	function editList2(){
		var ele=document.getElementById('eleToreach').value;
		document.getElementById("previewSection").innerHTML=mylist.traverseTo(ele);
	}
	function totraverse() {
		document.getElementById("previewSection").innerHTML=mylist.traverse();
	}
function list() {
	document.getElementById('d2').innerHTML = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To linked lists</h3><p class="text2">A linked list is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference <img src="images/linked_list.gif" class="list1"></img> (in other words, a link) to the next node in the sequence; more complex variants add additional links. This structure allows for efficient insertion or removal of elements from any position in the sequence.</p></div><div class="d42"><h3 class ="hed3">Pseudocode for traversal</h3><img src="images/pseudo9.png" class="list2"></img></div></div><div class = "d5"><div class="d51"><div id="d511"></div><div id="listsInput" ></div><div id="previewSection"></div></div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th></th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><th style="text-align:center;"> Search </th><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr><tr><th style="text-align:center;"> Insert </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(1) </td></tr><tr><th style="text-align:center;"> Delete </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(1) </td></tr><tr><th style="text-align:center;"> Access </th><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr></tbody></table></div></div>';
	
	document.getElementById('d511').innerHTML = '<br><input type="button" name="addlist" onclick=AddlistInput() value="Insert New node" /><input type="button" name="removelist" onclick=removelistInput() value="Remove node" /><input type="button" name="searchlist" onclick=traverselist() value="Search for a node" /><input type="button" onclick=totraverse() value="Display all node values" /><br /><br />';
}