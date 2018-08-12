$(document).ready(function(){

  var innerSqr = $("#reset");

  var player = 1;
  var position = [0,0,0,0,0,0,0,0];




  $(".square").on("click", change)
  function change() {
    var buttonUpdate = $(this).attr("id");

    switch (buttonUpdate) {
      case "0":
        position[0] = player;
        break;
      case "1":
        position[1] = player;
        break;
      case "2":
        position[2] = player;
        break;
      case "3":
        position[3] = player;
        break;
      case "4":
        position[4] = player;
        break;
      case "5":
        position[5] = player;
        break;
      case "6":
        position[6] = player;
        break;
      case "7":
        position[7] = player;
        break;
      case "8":
        position[8] = player;
        break;
      default:
    }
    CheckIfWon();
    console.log(position);
    var squareClicked = $(this);

    if (squareClicked.hasClass("x")||squareClicked.hasClass("o"))
    {
      alert("this square has already been selected");
    }else {
      if (player == 1) {
        squareClicked.addClass("x");

        player = 2;
      }else {
        squareClicked.addClass("o");

        player = 1;
      }
    }
    }
function CheckIfWon() {
  var win = false;
  for (var i = 0; i < position.length; i+=3) {
    if (position[i]==player && position[i+1]==player && position[i+2]==player) {
      win == true;
    }
  }

  for (var i = 0; i < 3; i++) {
    if (position[i]==player && position[i+3]==player && position[i+6]==player) {
      win == true;
    }
  }
  if (position[0]==player && position[4]==player && position[8]==player || position[2]==player && position[4]==player && position[6]==player) {
    win == true;
  }

  var flag = 0;

  for (var i = 0; i < position.length; i++) {
    if (position[i] != 0) {
      flag++;
      if (flag == 9 && win == false) {
        alert("game is a draw")
        restart()
      }
    }

  }
}


$("#reset").on("click",restart)
// this function will reset the board and allow the users to play again.
function restart() {
  location.reload();
}




})




 // var innerSqr = $(".square", this);
 // innerSqr.addClass(".dot");
