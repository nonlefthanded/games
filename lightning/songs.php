<?php
  $songs = explode("\n",trim(file_get_contents('../songs.txt')));
  $songs = array_map(function($el){
    return explode("|",$el);
  },$songs);
  echo json_encode($songs);
?>
