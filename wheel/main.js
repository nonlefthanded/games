$(function() {
  _ = {
    'answers'  : ['Los+Lobos','Oingo Boingo','This Is Radio Clash','I+Wanna Dance+With Somebody'],
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
  _['alphabet_html'] += "<hr /><p><a href='javascript:pat();'>Reveal!</a> | <a href='javascript:unPat();'>Conceal!</a>";
  _.answers.map(function(answer,i){
    var link = "<a href='javascript:changeAnswer(" + (i+1) + ");'>" + (i+1) + "</a>";
    _.tools.push(link);
  });
  // console.log(_);

  $('#alphabet').html(_.alphabet_html);
  $('#tools').html(_.tools.join(', '));
  changeAnswer(1);
});


function vanna(letter){
  console.log('function');
  $('#answer').children().map(function(i){
    setTimeout(function(){
      thisLetter = $('#answer').children().eq(i).html().toUpperCase();
      // console.log(thisLetter + '===' + letter);
      if (thisLetter === letter){
        // console.log('we are a go!');
        $('#answer').children().eq(i).removeClass('not-shown').addClass('shown');

      }
    },i*200);
  });
  _.guessed.push(letter);
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
  n--;
  console.log(n);
  console.log(_);
  _['answer'] = _.answers[n];
  _['answer_html'] = _['answer'].split("").map(function(letter){
    if (letter === '+') return '<span class="not-shown spacer">&nbsp;</span>';
    if (letter === ' ') return '<br />';
    return '<span class="not-shown display transition letter-' + letter.toUpperCase() + '">' + letter + '</span>';
  }).join(' ');
  $('#answer').html(_.answer_html);
}
