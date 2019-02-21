<!--bubble sort-->
<?php
$bub = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Bubble-sort</h3><p class="text2">Bubble sort is a simple sorting algorithm. The algorithm starts at the beginning of the data set. It compares the first two elements, and if the first is greater than the second,<img src="images/Bubble-sort-example-300px.gif" class="bubble1"></img> it swaps them. It continues doing this for each pair of adjacent elements to the end of the data set. It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo1.png" class="bubble2"></img></div></div><div class = "d5"><div class="d51"><b>YOU ARE USING BUBBLE SORT</b><br /><br /><b style=" color:green; ">time taken to execute bubble sort is '.$stop.' seconds </b><br><b style="color:darkblue;">to sort '.count($out).' elements</b><br>'.$oo.'</div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n<sup>2</sup>) </td><td style="text-align:center;"> O(n<sup>2</sup>) </td></tr></tbody></table></div></div>';?> 
<script type="text/javascript">
function bubble() {
var bubb = '<?php echo $bub ?>' ;
document.getElementById('d2').innerHTML = bubb;
}
</script>
<!--isertion sort-->
<?php
$bub1 = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Insertion-sort</h3><p class="text2"> It works by taking elements from the list one by one and inserting them in their correct position into a new sorted list.<img src="images/Insertion-sort-example-300px.gif" class="insert1"></img> In arrays, the new list and the remaining elements can share the arrays space, but insertion is expensive, requiring shifting all following elements over by one.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo2.png" class="insert2"></img></div></div><div class = "d5"><div class="d51"><b>YOU ARE USING INSERTION SORT</b><br /><br /><b style=" color:green; ">time taken to execute insertion sort is '.$stop1.' seconds</b><br><b style="color:darkblue;">to sort '.count($out).' elements</b><br>'.$oo1.'</div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n) </td><td style="text-align:center;"> O(n<sup>2</sup>) </td><td style="text-align:center;"> O(n<sup>2</sup>) </td></tr></tbody></table></div></div>';?>
<script type="text/javascript">
function insertion() {
var bubb = '<?php echo $bub1 ?>' ;
document.getElementById('d2').innerHTML = bubb;
}
</script>
<!--selection sort-->
<?php
$bub2 = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Selection-sort</h3><p class="text2">Selection sort is an in-place comparison sort. Selection sort is noted for its simplicity, and also has performance advantages over more complicated algorithms in certain situations.<img src="images/Selection-Sort-Animation.gif" class="select1"></img>The algorithm finds the minimum value, swaps it with the value in the first position, and repeats these steps for the remainder of the list. It does no more than n swaps, and thus is useful where swapping is very expensive.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo3.png" class="select2"></img></div></div><div class = "d5"><div class="d51"><b>YOU ARE USING SELECTION SORT</b><br /><br /><b style=" color:green; ">time taken to execute selection sort is '.$stop2.' seconds</b><br><b style="color:darkblue;">to sort '.count($out).' elements</b><br>'.$oo2.'</div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n&sup2) </td><td style="text-align:center;"> O(n<sup>2</sup>) </td><td style="text-align:center;"> O(n<sup>2</sup>) </td></tr></tbody></table></div></div>';?> 
<script type="text/javascript">
function selection() {
var bubb = '<?php echo $bub2 ?>' ;
document.getElementById('d2').innerHTML = bubb;
}
</script>
<!--merge sort-->
<?php
$bub3 = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Merge-sort</h3><p class="text2">Merge sort starts by comparing every two elements (i.e., 1 with 2, then 3 with 4...) and swapping them if the first should come after the second.<img src="images/Merge-sort-example-300px.gif" class="merge1"></img> It then merges each of the resulting lists of two into lists of four, then merges those lists of four, and so on; until at last two lists are merged into the final sorted list.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo4.png" class="merge2"></img></div></div><div class = "d5"><div class="d51"><b>YOU ARE USING MERGE SORT</b><br /><br /><b style=" color:green; ">time taken to execute merge sort is '.$stop3.' seconds</b><br><b style="color:darkblue;">to sort '.count($out).' elements</b><br>'.$oo3.'</div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n log n) </td><td style="text-align:center;"> O(n log n) </td><td style="text-align:center;"> O(n log n) </td></tr></tbody></table></div></div>';?> 
<script type="text/javascript">
function merge() {
var bubb = '<?php echo $bub3 ?>' ;
document.getElementById('d2').innerHTML = bubb;
}
</script>
<!--quick sort-->
<?php
$bub4 = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Quick-sort</h3><p class="text2">Quicksort is a divide and conquer algorithm which relies on a partition operation: to partition an array an element called a pivot is selected.<img src="images/Sorting_quicksort_anim.gif" class="quick1"></img> All elements smaller than the pivot are moved before it and all greater elements are moved after it. The lesser and greater sublists are then recursively sorted.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo5.png" class="quick2"></img></div></div><div class = "d5"><div class="d51"><b>YOU ARE USING QUICK SORT</b><br /><br /><b style=" color:green; ">time taken to execute quick sort is '.$stop4.' seconds</b><br><b style="color:darkblue;">to sort '.count($out).' elements</b><br>'.$oo4.'</div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n log n) </td><td style="text-align:center;"> O(n log n) </td><td style="text-align:center;"> O(n<sup>2</sup>) </td></tr></tbody></table></div></div>';?> 
<script type="text/javascript">
function quick() {
var bubb = '<?php echo $bub4 ?>' ;
document.getElementById('d2').innerHTML = bubb;
}
</script>
<!--heap sort-->
<?php
$array5 = "";
if(is_array($out)) {
	$array5 = implode(",", $out);
}
$bub5 = '<div class = "d4"><div class = "d41"><h3 class ="hed3">Welcome To Heap-sort</h3><p class="text2">This uses a data structure called a heap, a special type of a binary tree. Once the data list has been made into a heap, the root node is guaranteed to be the largest (or smallest) element.<img src="images/Sorting_heapsort_anim.gif" class="heap1"></img> When it is removed and placed at the end of the list, the heap is rearranged so the largest element remaining moves to the root.</p></div><div class="d42"><h3 class ="hed3">Pseudocode</h3><img src="images/pseudo6.png" class="heap2"></img></div></div><div class = "d5"><div class="d51"><b>YOU ARE USING HEAP SORT</b><br /><br /><b style=" color:green; ">time taken to execute heap sort is '.$stop5.' seconds</b><br><b style="color:darkblue;">to sort '.count($out).' elements</b><br>';
$bub51 = '</div><div class="d52"><table class="table" width="480px"	height= "120px"	border="2px"><caption style="color:white; background:purple; border-radius:8px 8px 0px 0px;"><h4> Complexity table</h4></caption><thead><tr style="background:lightblue"><th> best </th><th> average </th><th> worst </th></tr></thead><tbody style="background:lightgreen;"><tr><td style="text-align:center;"> O(n log n) </td><td style="text-align:center;"> O(n log n) </td><td style="text-align:center;"> O(n log n) </td></tr></tbody></table></div></div>';?> 
<script type="text/javascript">
function heap() {
	/**********************************************************************************************************/
	var num = '<?php echo $array5; ?>'.split(",");
	var bubb = '<?php echo $bub5 ?>' ;
	var bubb1 = '<?php echo $bub51 ?>' ;
	var arrayLength;

function buildHeap(input) {
    arrayLength = input.length;

    for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
        heapify(input, i);
    }
}

function heapify(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;

    if (left < arrayLength && input[left] > input[largest]) {
        largest = left;
    }

    if (right < arrayLength && input[right] > input[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(input, i, largest);
        heapify(input, largest);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    buildHeap(input);

    for (var i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        arrayLength--;
        heapify(input, 0);
    }
}
heapSort(num);

/*
document.write('<br>' + num); // -10,1,2,4,5,7,8,10,15,24,40,50*/

document.getElementById('d2').innerHTML = bubb + num + bubb1;
/**************************************************************************************************************/
}
</script>
