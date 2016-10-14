<?php
	// header('Content-Type:text/html;charset=utf-8');
  	$usename = $_GET['username'];
  	if($usename === 'kevin'){
      	$ret = array('sex'=>'男', 'age'=>23);
  	}else if($usename === 'david'){
      	$ret = array('sex'=>'男', 'age'=>30);
  	}else{
      	$ret = array('sex'=>'女', 'age'=>18);
  	}
  	echo json_encode($ret);