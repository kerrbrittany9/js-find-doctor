var Illness = require('./../js/illness.js').illnessModule;

// var displayDoctors = function(medicalIssue, doctorList) {
//   $('#showDoctors').append("Doctors who treat the following: " + medicalIssue + "are listed below:" + "<ul><li>" + doctorList + "</li></ul>");
// };

$(document).ready(function() {
  var illness = new Illness();
  $('#symptom-form').click(function() {
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    illness.getDoctors(medicalIssue);

  });
});
