var Illness = require('./../js/illness.js').illnessModule;

var displayDoctors = function(medicalIssue, doctors) {
  doctors.forEach(function(doctor) {
    $('#showDoctors').append("<li>" + doctor.profile.bio + "</li>");
  });
};

$(document).ready(function() {
  var illness = new Illness();
  $('#symptom-form').click(function() {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    illness.getDoctors(medicalIssue, displayDoctors);
  });
});
