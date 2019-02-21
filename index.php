<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html>
<head>
<title>Data structures revised</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="content-type" content="application/xhtml+xml; charset=UTF-8">
<meta http-equiv="content-style-type" content="text/css">
<meta http-equiv="expires" content="0">
<link href="css/datastructures.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="js/jquery-1.3.2.js" ></script>
<script type="text/javascript">
//This function will be called when the form is submited
function sendmess() {
	var nn = document.getElementById('name').value;
	var em = document.getElementById('email').value;
	var comm = document.getElementById('comment').value;
	if (nn == "" || em == "" || comm == "" || nn == null || em == null || comm == null) {
		alert("please fill all the fields");
	}else {
	$.post("js/phpfeedback.php",
  {
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
	 comment:document.getElementById('comment').value
  },
  function(data,status){
   document.getElementById("feedb").innerHTML= data;
  });
  }
	/*
	var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("feedb").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","js/phpfeedback.php",true);
xmlhttp.send();*/
}

function insertionSort(arra) {
		var temp, inner;
		for (var outer = 1; outer <= arra.length-1; ++outer) {
			temp = arra[outer];
			inner = outer;
			while (inner > 0 && (arra[inner-1] >= temp)) {
				arra[inner] = arra[inner-1];
				--inner;
			}
			arra[inner] = temp;
		}
	}
</script>
</head>
<body>

<div class="page">

<div class="d1" id="d1">
<div class="d11" id="d11">
<img src="images/images.jpeg" height= "75" class="imagelogo" id="imagelogo" width= "100"/>
<h1 id="h11" class="h11">Data Structures Revised | blog</h1>
</div>
<div class="d12" id="d12">
<nav class="n11" id="n11">
<ul class="nav-bar">
  <li class="nav-home"><a href="index.php" onclick=Home()>Home</a></li>
  <li class="nav-sort"><a href="#news" >sorting</a>
  		<ul>
          <li class="li1"><a href="#" onclick= bubble()>Bubble-sort</a></li>
          <li><a href="#" onclick= insertion() >Insertion-sort</a></li>
          <li><a href="#" onclick= selection() >Selection-sort</a></li>
          <li><a href="#" onclick= merge() >Merge-sort</a></li>
          <li><a href="#" onclick= quick() >Quick-sort</a></li>
          <li><a href="#" onclick= heap() >Heap-sort</a></li>
      </ul>
  </li>
  <li class="nav-search"><a href="#contact">searching</a>
  		<ul>
          <li class="li1"><a href="#" onclick= binary() >Binary search</a></li>
			<li><a href="#" onclick=linear() id="linear" >linear search</a></li>
      </ul>
  </li>
  <li class="nav-upload"><a href="#about">Trees</a>
  		<ul>
			<li class="li1"><a href="#" onclick= tree() >Binary search tree</a></li>
      </ul>
  </li>
  <li class="nav-upload"><a href="#about">data-structures</a>
  		<ul>
          <li class="li1"><a href="#" onclick= list() >List</a></li>
          <li><a href="#" onclick= queue() >Queue</a></li>
          <li><a href="#" onclick= stack() >Stack</a></li>
      </ul>
  </li>
  <li class="nav-upload"><a href="#about" onclick= hashing() >Hashing</a></li>
 <!---- <li class="nav-upload"><a href="#about">upload</a></li>------>
</ul>
</nav>
</div>
</div>

<div class="d2" id="d2">
<img src="images/datapic.jpg"  class="datapic" id="datapic" /><br>
<hr class="vertical"/>
<div class="d3" id="d3">
	<b>YOU MUST UPLOAD A FILE BEFORE YOU CAN USE THE REST OF THE MENU</b><br>
	<p class="upload">file upload</p>
	<b style="color: #8B0000; font-size: smaller; font-style: italic;" >ALLOWED FILE FORMATS are "txt" and "csv"</b><br /><br />
			 <form method="post" enctype="multipart/form-data">
			 <label for="file">Filename:</label><input type="file" name="file" id="file" required="required" /><br />
			 <input type="submit" name="submit" value="CONTINUE"/><br />
			 </form>
			 <?php
			 $out="";
if(isset($_POST['submit']) && !empty($_POST)) {
	$allowedExts = array("txt", "csv");
	$temp = explode(".", $_FILES["file"]["name"]);
	$extension = end($temp);
	if(!empty($_FILES["file"]["name"])) {
		if (($_FILES["file"]["size"] < 2000000) && in_array($extension, $allowedExts)) {
  				if ($_FILES["file"]["error"] > 0) {
    				echo "Error: " . $_FILES["file"]["error"] . "<br>";
  				} else {
    				echo "Upload: " . $_FILES["file"]["name"] . "<br>";
    				echo "Type: " . $_FILES["file"]["type"] . "<br>";
    				echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
      			move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
      			echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
      			//*************************************************************************************************//
      			$files="upload/".$_FILES["file"]["name"];
      			$content=file_get_contents($files);
      			$s=preg_split("/\d+\)|\n| /", trim($content));
      			$GLOBALS['out']=array_filter($s);
      			//*************************************************************************************************//
    						}
	} else {
	?>
	<script type="text/javascript">
	alert("only .txt and .csv files allowed and should be less than 2mb");
	</script>
	<?php
}

		}else {
			?>
			<script type="text/javascript">
	alert("you have no file selected");
	</script>
	<?php
		}
	}
	if(is_array($out)) {
	include "functions.php";
	include "phpcalls.php";
	include "data.php";
	$ar1 = implode(",", $out);

?>
<script type="text/javascript">
		var linvar = '<?php echo $ar1 ?>'.split(",");
	</script>
<script type="text/javascript" src="js/linear.js" ></script>
<script type="text/javascript" src="js/binary.js" ></script>
<script type="text/javascript" src="js/bst.js" ></script>
<script type="text/javascript" src="js/hash.js" ></script>
<script type="text/javascript" src="js/queue.js" ></script>
<script type="text/javascript" src="js/list.js" ></script>
<script type="text/javascript" src="js/stack.js" ></script>
<?php
}
?>
</div>
<p class="text">Data Structure is a way of collecting and organising data in such a way
that we can perform operations on these data in an effective way. Data Structures is
about rendering data elements in terms of some relationship, for better organization
and storage.In simple language, Data Structures are structures programmed to store
ordered data, so that various operations can be performed on it easily.
</p>
<p class="text1">Algorithms are finite sets of instructions or logic, written in order,
to accomplish a certain predefined task. Algorithm is not the complete code or program,
it is just the core logic(solution) of a problem. An algorithm is said to be efficient
and fast, if it takes less time to execute and consumes less memory space. <em>Basically
in this blog we examine the different Data structures and Algorithms. </em><br><b>Welcome And Enjoy!!</b> </p>
</div>
<hr />
Feedback
<div id="feedb"></div>
Name: <input type="text" id="name" required="required" /> Email: <input type="text" id="email" required="required" /> Comment: <input type="text" id="comment" required="required" /><input type="button" onclick='sendmess();' value="Send message" />
<footer class="f1" id="f1">&copy BEAR programmers</footer>
</div>
</body>
</html>
