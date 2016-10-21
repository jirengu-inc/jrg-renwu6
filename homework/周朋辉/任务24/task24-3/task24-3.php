<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-29 18:15:29
 * @version $Id$
 */

	$username= $_POST['username'];
	if ($username == 'zhoupenghui'){
	    $arr = array('status'=>1, 'data'=>"用户名存在");
	    echo json_encode($arr);
	}
	else{
	    $arr = array('status'=>0, 'data'=>"用户名可用");
	    echo json_encode($arr);
	}
?>