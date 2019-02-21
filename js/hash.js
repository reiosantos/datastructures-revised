function Addhash(){
		document.getElementById("hassi").innerHTML= '<form >enter the element to hash : <br /><input type="text" id="position11" style="width:100px;"><br/><button onclick="addtohash();">PROCESS</button></form>';
	}
	function removehash(){
		document.getElementById("hassi").innerHTML='<form >enter element to remove : <br /><input type="text" id="position12" style="width:100px;"><br/><button onclick="takefromhash();">PROCESS</button></form>';
	}
	function searchhash(){
		document.getElementById("hassi").innerHTML='<form >enter the search element : <br /><input type="text" id="position13" style="width:100px;"><br/><button onclick="searhash();">PROCESS</button></form>';
	}
	function addtohash(){
		var data0=document.getElementById('position11').value;
		hashT.insert(data0,data0);
		document.getElementById("hasspreview").innerHTML = "<span style='color:red;background:yellow;'>" +'Added ' + data0 + ' in the table </span><br>' + hashT.retrieveAll();
	}
	function takefromhash(){
		var index = document.getElementById('position12').value;
	hashT.remove(index);
		document.getElementById("hasspreview").innerHTML= hashT.retrieveAll();
	}
	function searhash(){
		var ele =document.getElementById('position13').value;
		var ret = hashT.retrieve(ele);
		if (ret != null) {
			document.getElementById("hasspreview").innerHTML= "<span style='color:red;background:yellow;'>" +'found ' + ele + ' in the table in tuple number :' + ret + '</span><br>' + hashT.retrieveAll();
		}else {
			document.getElementById("hasspreview").innerHTML= "<span style='color:red;background:yellow;'>" +ele + ' not found in the table: </span><br><br>' + hashT.retrieveAll();
		}
	}
	
	function traversehash(){
		document.getElementById("hasspreview").innerHTML = hashT.retrieveAll();
	}

  var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}


HashTable.prototype.insert = function(key, value) {
  //create an index for our storage location by passing it through our hashing function
  var index = this.hashFunc(key, this._limit);
  //retrieve the bucket at this particular index in our storage, if one exists
  //[[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
  var bucket = this._storage[index]
    //does a bucket exist or do we get undefined when trying to retrieve said index?
  if (!bucket) {
    //create the bucket
    var bucket = [];
    //insert the bucket into our hashTable
    this._storage[index] = bucket;
  }

  var override = false;
  //now iterate through our bucket to see if there are any conflicting
  //key value pairs within our bucket. If there are any, override them.
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      //overide value stored at this key
      tuple[1] = value;
      override = true;
    }
  }

  if (!override) {
    //create a new tuple in our bucket
    //note that this could either be the new empty bucket we created above
    //or a bucket with other tupules with keys that are different than 
    //the key of the tuple we are inserting. These tupules are in the same
    //bucket because their keys all equate to the same numeric index when
    //passing through our hash function.
    bucket.push([index, value]);
    this._count++
      //now that we've added our new key/val pair to our storage
      //let's check to see if we need to resize our storage
      if (this._count > this._limit * 0.75) {
        this.resize(this._limit * 2);
      }
  }
  return this;
};
HashTable.prototype.remove = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];
  if (!bucket) {
    return null;
  }
  //iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    //check to see if key is inside bucket
    if (tuple[0] === key) {
      //if it is, get rid of this tuple
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
};



HashTable.prototype.retrieve = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === index) {
      return bucket[i][0];
    }
  }

  return null;
};


HashTable.prototype.hashFunc = function(string, max) {
  const H = 37;
var total = 0;
for (var i = 0; i < string.length; ++i) {
total += H * total + string.charCodeAt(i);
}
total = total % max;
return parseInt(total);
};


HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._count = 0;
  this._storage = [];

  oldStorage.forEach(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
  //console.log(this._limit);
};

/******************************TESTS*******************************/

var hashT = new HashTable();
for(i=0; i<linvar.length; i++){
   hashT.insert(linvar[i], linvar[i]);
   }
function hashing() {
	document.getElementById('d2').innerHTML = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Hashing</h3><p class="text2">This is used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of<img src="images/Hash_table.svg" class="hash1"></img> buckets or slots, from which the desired value can be found. Ideally, the hash function will assign each key to a unique bucket, but it is possible that two keys will generate an identical hash causing both keys to point to the same bucket.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo13.png" class="hash2"></img></div></div><div class = "d5"><div class="d51"><div class="d511" id="d511" ></div><div class="d512"><div id="hasspreview"></div></div></div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th></th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><th style="text-align:center;"> Search </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(n) </td></tr><tr><th style="text-align:center;"> Insert </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(n) </td></tr><tr><th style="text-align:center;"> Delete </th><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(n) </td></tr><tr><th style="text-align:center;"> Space </th><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr></tbody></table></div></div>';
	
	document.getElementById('d511').innerHTML = '<br><input type="button" name="addlist" onclick=Addhash() value="Add content to table" />' + '<input type="button" name="removelist" onclick=removehash() value="Remove content" />' + '<input type="button" name="searchlist" onclick=searchhash() value="Search for an element" />' + '<input type="button" onclick=traversehash() value="Display all contents" /><br /><br /><div id="hassi" ></div>';
}