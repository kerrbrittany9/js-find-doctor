var Illness = require('./../js/doctor.js').illnessModule;


$(document).ready(function() {
  var illness = new Illness();
  $('#symptom-form').click(function() {
    var symptom = $('#symptom').val();
    $('#symptom').val("");
    illness.getDoctor(symptom, displayHumidity);

  });
});
