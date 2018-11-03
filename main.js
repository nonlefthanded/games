$(function() {
  var pages = ['password','countdown','wheel','lightning','scatter','questions','random-letter-generator'];
  // console.log('main.js');
  $('aside').append("<hr /><a href='../'>Games Index</a>");
  pages.map(function(v,k){
    // console.log(v);
    $('aside').append("<br />&rdsh; <a href='../" + v + "'>" + v + "</a>");
  });

  $('body').on('click', '.strikeable', function() {
    $(this).toggleClass( "strikethrough" );
  });

});

function syncNumbers(inputID, textID){
  var number = $('#' + inputID).val();
  $('#'+textID).html(number);
}

function countdownTimer(startTime,textID,stopTimer){
  if (stopTimer) {
    clearInterval ( startTheClock );
    return false;
  } else {
    $('#'+textID).html(startTime);
    startTheClock = setInterval(function(){secondsClock(textID)},1000);
  }

}

function secondsClock(textID){
  // console.log(textID);
  if($('#'+textID).html() > 0){
    $('#'+textID).html($('#'+textID).html()-1);

    totalTime = startTime;
    elapsedTime = $('#'+textID).html();
    percentage = ((1 - (elapsedTime/totalTime))*100).toFixed(2);
    loadingDiv(percentage);

  } else {
    clearInterval ( startTheClock );
  }
}

function loadingDiv(percentage){
  // console.log(percentage);
  $('#loading').css({'width':percentage+'%'});
  if ($('#loading-bg').length == 0){
  $('#loading').before('<div id="loading-bg"></div>');
  }
  // $('#loading-bg').html(percentage + '%');
}
