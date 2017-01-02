<?php
      header("Content-type:");
      $username = $_GET['username'];
      if($username === 'xiaoming'){
      	$ret = array('username'=>'xioaming','password'=>'abcd1234');
      } else {
      	$ret = array('username'=>'lulu','password'=>'123456' );
      }
      echo json_encode($ret);
?>





