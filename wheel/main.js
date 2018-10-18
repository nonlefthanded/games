var guessed = [];
$(function() {
  var _ = {
    'clues' : ['Los+Lobos','Oingo Boingo'],
    'alphabet' : []
  };
  for (i = 65; i < 91; i++) {
    _.alphabet.push(String.fromCharCode(i));
  }
  _['alphabet_html'] = _.alphabet.map(function(letter){
    return '<a href="javascript:vanna(\'' + letter + '\');">' + letter + '</span>';
  }).join(' ');
  _['alphabet_html'] += "<hr /><p><a href='javascript:pat();'>Reveal!</a> | <a href='javascript:unPat();'>Conceal!</a>";

  _['clue'] = _.clues[0];
  _['clue_html'] = _['clue'].split("").map(function(letter){
    if (letter === '+') return '<span class="not-shown spacer">&nbsp;</span>';
    if (letter === ' ') return '<br />';
    return '<span class="not-shown display letter-' + letter.toUpperCase() + '">' + letter + '</span>';
  }).join(' ');

  // console.log(_);
  $('#clue').html(_.clue_html);
  $('#alphabet').html(_.alphabet_html);
});

function vanna(letter){
  console.log('function');
  $('#clue').children().map(function(i){
    setTimeout(function(){
      thisLetter = $('#clue').children().eq(i).html().toUpperCase();
      console.log(thisLetter + '===' + letter);
      if (thisLetter === letter){
        console.log('we are a go!');
        $('#clue').children().eq(i).removeClass('not-shown').addClass('shown');

      }
    },i*200);
  });
  window.guessed.push(letter);
  $('#guessed').html(guessed.join(', '));
}

function pat(){
    $('#clue').children().map(function(i){
      setTimeout(function(){
        thisOne = $('#clue').children().eq(i);
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
