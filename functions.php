<?php
function bubble($rt) {
//********************************************************code*/
if(!empty($rt) && is_array($rt)) {
	$n =count($rt);
	for($i=0;$i<$n;$i++) {
		for($j=0;$j<$n;$j++) {
			if($rt[$j] > $rt[$i]) {
				$tmp=$rt[$i];
				$rt[$i]=$rt[$j];
				$rt[$j]=$tmp;
			}
		}
	}
	return $rt;
}
//********************************************************code*/
}
function insertion($rt) {
	//********************************************************code*/
	if(!empty($rt) && is_array($rt)) {
	$count=count($rt);
	for($i=0;$i < $count;$i++) {
		$j=$i-1;
		$element=$rt[$i];
		while($j >=0 && $rt[$j] > $element) {
			$rt[$j+1]=$rt[$j];
			$rt[$j]=$element;
			$j=$j-1;
		}
	}
	return $rt;
	}
	//********************************************************code*/
}
function selection($rt) {
	//********************************************************code*/
	if(!empty($rt) && is_array($rt)) {
	$length=count($rt);
	for($i=0;$i < $length; $i++) {
		$min=$i;
		for($j=$i+1;$j < $length;$j++) {
			if($rt[$j] < $rt[$min]) {
				$min=$j;
			}			
		}
		$tmp=$rt[$min];
		$rt[$min]=$rt[$i];
		$rt[$i]=$tmp;
	}
	return $rt;
	}
	//********************************************************code*/
}
function merge($rt) {
	//********************************************************code*/
	if(!empty($rt) && is_array($rt)) {
	if(count($rt)<=1) {
		return $rt;
	}
	$left=merge(array_splice($rt,floor(count($rt)/2)));
	$right=merge($rt);
	$result=array();
	while(count($left) > 0 && count($right) > 0) {
		if($left[0] <= $right[0]) {
			array_push($result, array_shift($left));
		}else {
			array_push($result, array_shift($right));
		}
	}
	while(count($left) > 0) {
		array_push($result, array_shift($left));
	}
	while(count($right) > 0) {
		array_push($result, array_shift($right));
	}
	return $result;
	}
	//********************************************************code*/
}
function quick($rt) {
	//********************************************************code*/
	if(is_array($rt)) {
	if(count($rt)==0) {
		return $rt;
	}
	$pivot=$rt[0];
	$left=$right=array();
	for($i=1;$i < count($rt);$i++) {
		if($rt[$i] < $pivot) {
			$left[]=$rt[$i];
		}else {
			$right[]=$rt[$i];
		}
	}
	return array_merge(quick($left),array($pivot),quick($right));
	}
	//********************************************************code*/
}
	function heapsort($rt) {
		$array = implode(",", $rt);
?>
<script type="text/javascript">
/**********************************************************************************************************/
	var num = '<?php echo $array; ?>'.split(",");
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
document.write('<br>' + num); // -10,1,2,4,5,7,8,10,15,24,40,50
/**************************************************************************************************************/
</script>
<?php	
	}
 ?>