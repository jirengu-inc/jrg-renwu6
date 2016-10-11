<?php
	header("content-type:text/html;charset='utf-8'");
	$username = $_GET["username"];
	if($username === "hunger"){
		echo 1;
	}else{
		echo 0;
	}
?>