$(function() {
  $.get( "songs.php", function( songs ) {
    _ = {
      'allSongs' : JSON.parse(songs),
      'length'   : JSON.parse(songs).length,
      'randoms'  : [],
      'songs'    : [],
      'tools'    : []
    };
    for(i=0;i<_.length;i++){
      var randomNumber = Math.floor(Math.random() * _.length);
      if (_.randoms.indexOf(randomNumber) === -1 && _.randoms.length < 50){
        _.randoms.push(randomNumber);
      }
      if (i % 5 === 0 && i > 0 && _.randoms.length < 50 ){
        var link = "<a href='javascript:printGroup(" + (i/5) + ")'>" + (i/5) + "</a>";
        if (_.tools.length < 10){
          _.tools.push(link);
        }
      }
    }
    // console.log(_);
    printGroup(1);
    $('#tools').html(_.tools.join(', '));
  });
})

function printGroup(n){
  n--;
  _.songs = [];
  for(i=0;i<5;i++){
    var whichRandom = _.randoms[i+(n*5)];
    songObj = _.allSongs[whichRandom];
    _.songs.push("<li><h3>" + songObj[1] + "<small> (" + songObj[0] + ")</small></h3></li>");
  }
  $('#songs').html('<ul class="list-unstyled">' + _.songs.join(' ') + '</ul>');
}
