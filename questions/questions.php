<?php
  $questions = explode("\n\n",trim(file_get_contents('../questions.txt')));

  $questions = array_map(function($el){
    $_ = (object)array(
      'elements'=>explode("\n",$el)
    );
    $_->question = $_->elements[0];
    $_->answers  = array_slice(array_slice($_->elements,1), 0, -1);
    $_->correct_answer_key = $_->elements[count($_->elements) - 1] - 1;
    $_->correct_answer = $_->answers[$_->correct_answer_key];
    unset($_->elements);
    return $_;
    // return $breakApart[count($breakApart)-1];
  },$questions);

  echo json_encode($questions);
?>
