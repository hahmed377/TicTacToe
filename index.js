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
function CheckIfWon(symbol) {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}

})




   $("#reset").on("click",restart)
// this function will reset the board and allow the users to play again.
   function restart() {
    location.reload();
}




 // var innerSqr = $(".square", this);
 // innerSqr.addClass(".dot");
