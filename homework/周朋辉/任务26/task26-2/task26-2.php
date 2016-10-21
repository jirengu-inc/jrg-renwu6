<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-21 16:01:52
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
	echo json_encode($data);  //用于对变量进行JSON编码，该函数如果执行成功返回JSON数据，否则返回false
	//这里的结果是将数组变量变成{'status': 0, 'backData': ['3的内容', '4的内容', '5的内容', '6的内容', '7的内容']}  JSON格式的字符串数据
?>