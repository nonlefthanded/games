$(function() {
  var _ = {
    'alphabet'    : [],
    'timeBetween' : 40,
    'rolls'       : 50,
    'random'      : {'number':0,'letter':'A'}
  };
  for (i = 65; i < 91; i++) {
    _.alphabet.push(String.fromCharCode(i));
  }
  for (i=0; i<_.rolls;i++){
    setTimeout(function(i){
      //console.log(i);
      _.random.number = Math.floor(Math.random() * 25);
      _.random.letter = _.alphabet[_.random.number];
      // console.log(_.random.number + ' - ' + _.random.letter);
      $('#letter h1').html(_.random.letter);
    },i*_.timeBetween,i);
  }
})
