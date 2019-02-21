function binSearch(arr, data) {
		var upperBound = arr.length-1;
		var lowerBound = 0;
		while (lowerBound <= upperBound) {
			var mid = Math.floor((upperBound + lowerBound) / 2);
			if (arr[mid] < data) {
				lowerBound = mid + 1;
			}else if (arr[mid] > data) {
				upperBound = mid - 1;
			}else {
				return mid;
			}
		}
		return -1;
	}
	// count number of occurences of a searched value
	function count(arr, data1) {
		var count = 0;
		var position1 = binSearch(arr, data1);
		if (position1 > -1) {
			++count;
			for (var i = position1-1; i > 0; --i) {
				if (arr[i] == data1) {
					++count;
				}else {
					break;
				}
			}
			for (var i = position1+1; i < arr.length; ++i) {
				if (arr[i] == data1) {
					++count;
				}else {
					break;
				}
			}
		}
		return count;
	}// end of count
	// function to delete element from list
	function bindelete() {
		
	}
	// function to insert element in the list
	function bininsert() {
		
	}
	insertionSort(linvar);
	function binsearching() {
	var val = document.getElementById('searc').value;
	var ret = count(linvar, val);
	var start = new Date().getTime();
	var retVal = binSearch(linvar, val);
	var stop1 = new Date().getTime();
	var elapsed = stop1 - start;
		if (retVal >= 0) {
			document.getElementById('bin').innerHTML = "<br />Binary search took " + elapsed + " milliseconds <br /> Found " + val + " at position " + retVal + "<br />" + val + " occurs " + ret + " time(s)<br />";
		}else {
			document.getElementById('bin').innerHTML = "<br />Binary search took " + elapsed + " milliseconds <br />" + val + " is not in array.";
		}
	}
function binary() {
	document.getElementById('d2').innerHTML = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Binary search</h3><p class="text2">The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array. If the target value is equal to the middle element&#39;s value, then the position is returned and the search is finished. If the target value is less than the middle element&#39;s value, then the search continues on the lower half of the array; or if the target value is greater than the middle element&#39;s value, then the search continues on the upper half of the array.</p></div><div class="d42"><h3 class ="hed3">Recursive Pseudocode</h3><img src="images/pseudo7.png" class="binary1"></img></div></div><div class = "d5"><div class="d51"><div id="bin"></div><div id="d511"></div></div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(1) </td><td style="text-align:center;"> O(log n) </td><td style="text-align:center;"> O(log n) </td></tr></tbody></table></div></div>'
	
	document.getElementById('d511').innerHTML = "<br />Enter a value to search for in the list :" + "<br />" + "<input type='text' id='searc' />" + "<button onclick='binsearching();' >SEARCH</button><br />" + linvar;
}
$(function(){ /* to make sure the script runs after page load */

	$('.item').each(function(event){ /* select all divs with the item class */
	
		var max_length = 150; /* set the max content length before a read more link will be added */
		
		if($(this).html().length > max_length){ /* check for content length */
			
			var short_content 	= $(this).html().substr(0,max_length); /* split the content in two parts */
			var long_content	= $(this).html().substr(max_length);
			
			$(this).html(short_content+
						 '<a href="#" class="read_more"><br/>Read More</a>'+
						 '<span class="more_text" style="display:none;">'+long_content+'</span>'); /* Alter the html to allow the read more functionality */
						 
			$(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
 
				event.preventDefault(); /* prevent the a from changing the url */
				$(this).hide(); /* hide the read more button */
				$(this).parents('.item').find('.more_text').show(); /* show the .more_text span */
		 
			});
			
		}
		
	});
 
 
});