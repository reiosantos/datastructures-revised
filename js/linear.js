function seqSearch(arr, data1) {
			for (var i = 0; i < arr.length; ++i) {
				if (arr[i] == data1) {
					return i;
				}
			}
			return -1;
		}

		function findMin(arr) {
			return arr[0];
		}
		function findMax(arr) {
			return arr[arr.length-1];
		}
		function dispArr(arr) {
			document.write('<b>file contents are : </b><br />');
			for (var i = 0; i < arr.length; ++i) {
				document.write(arr[i] + ' ');
				if (i % 10 == 9) {
					document.write('\n');
				}
			}
			if (i % 10 != 0) { 
				document.write('\n');
			}
		}
		insertionSort(linvar);
		var min2 = findMin(linvar);
		var max2 = findMax(linvar);
		function searching() {
			var num = document.getElementById('sear').value;
			var start = new Date().getTime();
			var position1 = seqSearch(linvar, num);
			var stop1 = new Date().getTime();
			var elapsed = stop1 - start;
				if (position1 > -1) {
					document.getElementById('reis').innerHTML = '<br />Sequential search took ' + elapsed + ' milliseconds<br />' + num + ' is in the list at position ' + position1 + '<br />';
				}else {
					document.getElementById('reis').innerHTML = '<br />Sequential search took ' + elapsed + ' milliseconds<br />' + num + ' is not in the list.';
				}
		}
function linear() {
	
	document.getElementById('d2').innerHTML = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To linear search</h3><p class="text2">linear search find&#39s a particular value in a list by checking each element in sequence <img src="images/linear.jpg" class="linear1"></img>until the desired element is found or the list is exhausted. The list need not be ordered.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo8.png" class="linear2"></img></div></div><div class = "d5"><div class="d51" id="d51" ><div id="reis"></div><div id="d511"></div></div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n) </td></tr></tbody></table></div></div>';
			
	document.getElementById('d511').innerHTML = "<br />Enter a value to search for in the list :<br /><input type='text' id='sear' /><button onclick='searching();' >SEARCH</button><br /><br />" + linvar;
	
}