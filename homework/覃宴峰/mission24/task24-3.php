<?php 
	header('content-type:text/html;charset="utf-8"');
	$usName=$_GET["usInfo"];
	if($usName=="hunger"){
		echo 0;
	}else{
		echo 1;
	}
 ?>