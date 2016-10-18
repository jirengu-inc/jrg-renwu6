<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-18 22:00:52
 * @version $Id$
 */

	header("content-type: text/html; charset= 'UTF-8'");
	$start = $_GET['start'];
	$length = $_GET['length'];
	$backData = array();
	for($i=0;$i<$length;$i++){
		array_push($backData, '内容'.($start+$i));
	}
	$data = array("status"=>0, "backData"=>$backData);
	//sleep for 1 seconds
	sleep(1);  //模拟出等待加载的效果
	//start again
	echo json_encode($data);
?>