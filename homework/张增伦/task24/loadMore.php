<?php
  sleep(0.5);
 $cur = $_GET['cur'];
 $len = $_GET['len'];
 //echo $cur.'-'.$len;
 $arr = array();
 for ($i=0;$i<$len;$i++){
 	$arr[$i] = '内容'.($cur+$i+1);
 }
 //echo count($arr);
 echo json_encode($arr);
 
