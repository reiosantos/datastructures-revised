<?php		
//bubble sort
					$start=microtime(true);
					$var=(bubble($out));
					$stop=microtime(true)-$start;
					$oo = "";
					if(is_array($var)) {
					foreach($var as $key => $value){
						if($key>0) {
							$oo .= " ".$value.",";;
						}
					}
					}
			//insertion sort
					$start1=microtime(true);
					$var1=(insertion($out));
					$stop1=microtime(true)-$start1;
					$oo1 = "";
					if(is_array($var1)) {
					foreach($var1 as $key1 => $value1){
						if($key1>0) {
							$oo1 .= " ".$value1.",";;
						}
					}
				}
			//selection sort	
					$start2=microtime(true);
					$var2=(selection($out));
					$stop2=microtime(true)-$start2;
					$oo2 = "";
					if(is_array($var2)) {
					foreach($var2 as $key2 => $value2){
						if($key2>0) {
							$oo2 .= " ".$value2.",";;
						}
					}
				}
				//merge sort	
					$start3=microtime(true);
					$var3=(merge($out));
					$stop3=microtime(true)-$start3;
					$oo3 = "";
					if(is_array($var3)) {
					foreach($var3 as $key3 => $value3){
						if($key3>0) {
							$oo3 .= " ".$value3.",";;
						}
					}
				}
				//quick sort	
					$start4=microtime(true);
					$var4=(quick($out));
					$stop4=microtime(true)-$start4;
					$oo4 = "";
					if(is_array($var4)) {
					foreach($var4 as $key4 => $value4){
						if($key4>0) {
							$oo4 .= " ".$value4.",";;
						}
					}
				}
				//heap sort	
					$var5 = "";
					$start5=microtime(true);
					if(is_array($out)) {
						$var5=(heapsort($out));
					}
					$stop5=microtime(true)-$start5;
					
				?>