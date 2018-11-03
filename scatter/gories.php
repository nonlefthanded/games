<?php
  $songs = explode("\n",trim(file_get_contents('../scattergories.txt')));
  echo json_encode($songs);
?>
