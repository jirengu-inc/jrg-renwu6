<?php
  header("Content-type: ");
  $num = $_GET['num'];
  if($num == 6) {
    $res = array(
      "0" => array(
        'img_url' => "./img/portfolio/dreams.png",
        'short_name' => "Dreams",
        'short_intro' => "Website Design"
      ),
      "1" => array(
        'img_url' => "./img/portfolio/escape.png",
        'short_name' => "Escape",
        'short_intro' => "Website Design"
      ),
      "2" => array(
        'img_url' => "./img/portfolio/golden.png",
        'short_name' => "Golden",
        'short_intro' => "Website Design"
      ),
      "3" => array(
        'img_url' => "./img/portfolio/roundicons.png",
        'short_name' => "Round Icons",
        'short_intro' => "Graphic Design"
      ),
      "4" => array(
        'img_url' => "./img/portfolio/startup-framework.png",
        'short_name' => "Startup Framework",
        'short_intro' => "Website Design"
      ),
      "5" => array(
        'img_url' => "./img/portfolio/treehouse.png",
        'short_name' => "Treehouse",
        'short_intro' => "Website Design"
      )
    );
  } else {
    $res = "refuse";
  }
  echo json_encode($res);
?>
