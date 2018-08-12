// load funtion after page is ready.
$(document).ready(function(){
//finds the element id reset
  var innerSqr = $("#reset");
  // variable for players turn
  var player = 1;
  // empty array which will hold the positions of the player
  var position = [0,0,0,0,0,0,0,0];
  // event listener on the class square.
  $(".square").on("click", change)
  // all square have got the same class but ive added ids to identify each square.
  function change() {
    var buttonUpdate = $(this).attr("id");
    // switch case that records numbers to position on the array.
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
    // calls function to see winner
    CheckIfWon();
    //
    var squareClicked = $(this);
    // new var this squareClicked has a class of x or x alert the user
    if (squareClicked.hasClass("x")||squareClicked.hasClass("o"))
    {
      alert("this square has already been selected");
    }else {
      // if nothing is in the class add the class x to it and player will move to player 2 turn
      if (player == 1) {
        squareClicked.addClass("x");
        player = 2;
      }else {
        // same again add class if empty and change the player to player 1.
        squareClicked.addClass("o");
        player = 1;
      }
    }
    }
    // this function will check who has won the game
function CheckIfWon() {
  // function that will check row and coloumns if the player has won
  for (var i = 0; i < position.length; i+=3) {
    // if the player is equal to the rows it will alert player has won
    if (position[i]==player && position[i+1]==player && position[i+2]==player) {
      alert("player " + player + " has won");
    }
  }
  for (var i = 0; i < 3; i++) {
    // checks coloumns if a player has won and alerts users
    if (position[i]==player && position[i+3]==player && position[i+6]==player) {
      alert("player " + player + " has won");
    }
  }
  if (position[0]==player && position[4]==player && position[8]==player || position[2]==player && position[4]==player && position[6]==player) {
    alert("player " + player + " has won");
  }
  // checks game for a draw state
  var flag = 0;
  for (var i = 0; i < position.length; i++) {
    // if the position i is not equal to 1 increment the flag counter
    if (position[i] != 0) {
      flag++;
      // if the flag reaches the 9th turn alert game as a draw.
      if (flag == 9 && win == false) {
        alert("game is a draw")
        restart()
      }
    }
  }
}
// this will look for the id reset and wll restart the game if the user wasnt ready.
$("#reset").on("click",restart)
// this function will reset the board and allow the users to play again.
function restart() {
  location.reload();
}
})
