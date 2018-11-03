$(function() {
  syncNumbers('countdownInput','countdownText');
  $('#countdownInput').on('input', function() {
    syncNumbers('countdownInput','countdownText');
  });
});

function countdownClock(divID){
  startTime = $('#' + divID).html();
  countdownTimer(startTime,divID);
  return false;
}
