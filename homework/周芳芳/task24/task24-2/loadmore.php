<?php
    header('Content-type:');
    $start=$_GET['start'];
    $len=$_GET['leng'];
    $items=array();

    for($i=0;$i <leng;$i++){
    	array_push($items,'内容'.($start+$i+1));
    }
    echo json_encode($items)
?>