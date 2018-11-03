$(function() {
  startTime = $('#seconds').html();
  syncNumbers('numberInput','numberText');
  $('#numberInput').on('input', function() {
    syncNumbers('numberInput','numberText');
  });
})
