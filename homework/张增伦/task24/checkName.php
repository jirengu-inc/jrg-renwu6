<?php
  $o = array();
  if($_GET['username']!='hunger'){
	$o['status'] = 0; 
  }else{
	$o['status'] = 1; 
  }
  echo json_encode($o);