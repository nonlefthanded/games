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
  var questionHtml = _.questions[n].question.replace(/\*(.*?)\*/g, "<b>$1</b>").replace(/_(.*?)_/g, "<i>$1</i>");
  html += "<h2 class='page-header'>" + questionHtml + "</h2>";
  html += "<ul class='list-unstyled' id='answers'>";
  _.questions[n].answers.map(function(a,i){
    return html += "<li class='strikeable' id='answer-" + i + "'><h3 class='transition'>" + (i+1) + "). " + a + "</h3></li>";
  });
  html += "</ul>";
  html += "<hr />";
  html += "<p><a href='javascript:showAnswer(" + (n+1) + ")'>Show Answer</a></p>";
  $('#question').html(html);
}

function showAnswer(questionNumber){
  questionNumber--;
  var q = _.questions[questionNumber];
  $('#answer-' + q.correct_answer_key + ' h3').addClass('bigger correct');
}
