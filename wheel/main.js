$(function() {
  _ = {
    'answers'  : ['I+Wanna Dance+With Somebody','Text+Message In+A+Bottle','Dancing+Queen Latifah'],
    'alphabet' : [],
    'tools'    : [],
    'guessed'  : []
  };
  for (i = 65; i < 91; i++) {
    _.alphabet.push(String.fromCharCode(i));
  }
  _['alphabet_html'] = _.alphabet.map(function(letter){
    return '<a href="javascript:vanna(\'' + letter + '\');">' + letter + '</span>';
  }).join(' ');
  _['alphabet_html'] += "<hr /><p><a href='javascript:pat();'>Show</a> | <a href='javascript:unPat();'>Hide</a>";
  _.answers.map(function(answer,i){
    var link = "<a href='javascript:changeAnswer(" + (i+1) + ");'>" + (i+1) + "</a>";
    _.tools.push(link);
  });
  // console.log(_);

  $('#alphabet').html(_.alphabet_html);
  $('#tools').html(_.tools.join(', '));
  changeAnswer(1);

  $('#playerOneInput').on('input', function() {
    syncNumbers('playerOneInput','playerOneScore');
  });
  $('#playerTwoInput').on('input', function() {
    syncNumbers('playerTwoInput','playerTwoScore');
  });

});


function vanna(letter){
  spaceTime = 50;
  howManyOccurances = $('.letter-'+letter).length;
  $('#answer').children().map(function(i){
    setTimeout(function(){
      thisLetter = $('#answer').children().eq(i).html().toUpperCase();
      // console.log(thisLetter + '===' + letter);
      if (thisLetter === letter){
        // console.log('we are a go!');
        $('#answer').children().eq(i).removeClass('not-shown').addClass('shown');
      }
    },i*spaceTime);
  });
  _.guessed.push('<b>' + letter + '</b> (' + howManyOccurances +')');
  $('#guessed').html(_.guessed.join(', '));
}

function pat(){
    $('#answer').children().map(function(i){
      setTimeout(function(){
        thisOne = $('#answer').children().eq(i);
        isLetter = !thisOne.hasClass('spacer');
        if(isLetter){
          // console.log(i);
          // console.log(thisOne.html());
          thisOne.removeClass('not-shown').addClass('shown');
          console.log(isLetter);
        }
      },i*200);
    });
}

function unPat(){
  $('.display').removeClass('shown').addClass('not-shown');
}

function changeAnswer(n){
  $('#guessed').html('');
  _.guessed = [];
  n--;
  _['answer'] = _.answers[n];
  _['answer_html'] = _['answer'].split("").map(function(letter){
    if (letter === '+') return '<span class="not-shown spacer">&nbsp;</span>';
    if (letter === ' ') return '<br />';
    return '<span class="not-shown display transition letter-' + letter.toUpperCase() + '">' + letter + '</span>';
  }).join(' ');

  $('#answer').html(_.answer_html);
}
