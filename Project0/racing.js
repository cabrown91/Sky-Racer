$(document).ready(function() {


$('body').on("keypress", movePlane1);
});

// code in here
var Player = function (name) {
  this.playerName = name;

};

var position1 = 0;
var movePlane1 = function(e) {
  if (e.which === 97 && position1 < 100) {
    position1 += 10;
    console.log(position1);
    $('#plane1').animate({
    left: position1 + "%"
    }, 100);

    if(position1 === 100) {
      console.log('player1 wins');
    }
  }
};
