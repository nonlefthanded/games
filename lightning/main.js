$(function() {
  $.get( "songs.php", function( songs ) {
    var _ = {
      'allSongs' : JSON.parse(songs),
      'length'   : JSON.parse(songs).length,
      'randoms'  : [],
      'songs'    : [],
      'html'     : ''
    };
    for(i=0;i<50;i++){
      var randomNumber = Math.floor(Math.random() * _.length);
      console.log(_.randoms.indexOf(randomNumber));
      if (_.randoms.indexOf(randomNumber) === -1 && _.randoms.length < 5){
        _.randoms.push(randomNumber);
        _.songs.push(_.allSongs[randomNumber]);
      }
    }
    _.songs.map(function(songObj){
        _.html += "<li><h3>" + songObj[1] + "<small> (" + songObj[0] + ")</small></h3></li>";
    });

    // console.log(_);
    $('#songs').html(_.html);
  });



})
