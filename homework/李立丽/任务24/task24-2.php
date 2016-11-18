<?php
  	 $startNum=$_GET['start'];
	 $addNum=$_GET['len'];
	 $oLi = array();
	 for ($i=0; $i <$addNum ; $i++) { 
	 	 $oLi[$i] = '内容'.($startNum+$i+1);
	 }

	echo json_encode($oLi);
?>