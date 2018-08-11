$(document).ready(function(){

  var innerSqr = $("#reset");

  var turns = 0;
  var player = 1;


  $(".square").on("click", change)
  function change() {
    // alert("add something here")
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

}





   $("#reset").on("click",restart)
// this function will reset the board and allow the users to play again.
   function restart() {

     alert("Restart game!");

   }
 })
 // var innerSqr = $(".square", this);
 // innerSqr.addClass(".dot");
