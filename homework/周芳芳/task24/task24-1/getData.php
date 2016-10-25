<?php
      header("Content-type:application/json")
      $username = $_GET['username'];
      if($username === 'xiaoming'){
      	$ret = array('username'=>'xioaming','password'=>'abcd1234');
      } else {
      	$ret = array('username'=>'blank','password'=>'blank' );
      }
      echo json_encode($ret);
?>


