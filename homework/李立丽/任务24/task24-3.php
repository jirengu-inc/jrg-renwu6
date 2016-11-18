<?php

$name=$_GET["username"];
if($name=="hunger"){//已存在的用户名
	echo 0;
}else{
	echo 1;
}	
?>