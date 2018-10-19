$(function() {
  $.get( "questions.php", function( data ) {
    _ = {
      'questions' : JSON.parse(data),
      'length'   : JSON.parse(data).length,
      'html'     : '',
      'links'    : []
    };
    _.questions.map(function(q,i){
      var link = "<a href='javascript:showQuestion(" + (i+1) + ")'>" + (i+1) + "</a>";
      _.links.push(link);
    });
    // console.log(_);
    $('#controller').html(_.links.join(' | '));
    showQuestion(1);
  });
})

function showQuestion(n){
  var html = "";
  $('h2 span').html(n);
  n--;
  html += "<h3>" + _.questions[n].question + "</h3>";
  html += "<ul class='list-unstyled' id='answers'>";
  _.questions[n].answers.map(function(a,i){
    return html += "<li class='transition' id='answer-" + i + "'>" + a + "</li>";
  });
  html += "</ul>";
  html += "<p><a href='javascript:showAnswer(" + (n+1) + ")'>Show Answer</a></p>";
  $('#question').html(html);
}

function showAnswer(questionNumber){
  questionNumber--;
  var q = _.questions[questionNumber];
  $('#answer-' + q.correct_answer_key).wrapInner('<b></b>').wrapInner('<big></big>');
}
