$(document).ready(function() {


$('body').on("keypress", movePlane1);
$('body').on("keypress", movePlane2);
});
// code in here
var Player = function (name) {
  this.playerName = name;

};

var position1 = 0;
var movePlane1 = function(e) {
  if (e.which === 97 && position1 < 100) {
    position1 += 10;
    $('#plane1').animate({
    left: position1 + "%"
    }, 100);
}
  };

  var position2 = 0;
  var movePlane2 = function(event) {
    if (event.which === 108 && position2 < 100) {
      position2 += 10;
      $('#plane2').animate({
      left: position2 + "%"
      }, 100);
    }

    if(position1 === 100) {
      $("body").append("Player 1 Wins!");
    } else if (position2 === 100) {
      $("body").append("Player 2 Wins!");
      }
    };
