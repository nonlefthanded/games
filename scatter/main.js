$(function() {
  startTime = $('#seconds').html();
  $.get( "gories.php", function( data ) {
    cats = JSON.parse(data);
    cats.map(function(cat){
      $('#scatterGories').append('<li><h3>' + cat + '</h4></li>');
    });
  });

})
