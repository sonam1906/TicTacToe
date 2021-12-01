const cells = document.querySelectorAll(".cell");
let oturn = true;
const turn = document.getElementById("turn");
turn.innerText = "O's Turn";
let flag = 0;

cells.forEach(cell => {
   cell.addEventListener('click', handleClick, {once: true})
})

function handleClick(e) {
   const cell = e.target;
   const currTurn = oturn;
   if (oturn) {
      cell.innerHTML = "O";
   }
   else {
      cell.innerHTML = "X";
   }
   
   // WINNING CONDITION
   winnerOrDrawOrSwap() 
   

}

function winnerOrDrawOrSwap() {

   let b1, b2, b3, b4, b5, b6, b7, b8, b9;
   b1 = document.getElementById("1").innerText;
   b2 = document.getElementById("2").innerText;
   b3 = document.getElementById("3").innerText;
   b4 = document.getElementById("4").innerText;
   b5 = document.getElementById("5").innerText;
   b6 = document.getElementById("6").innerText;
   b7 = document.getElementById("7").innerText;
   b8 = document.getElementById("8").innerText;
   b9 = document.getElementById("9").innerText;

   //Conditions of X
   //x Horizontal
  if (b1 == "X" && b2 == "X" && b3 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b4 == "X" && b5 == "X" && b6 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b7 == "X" && b8 == "X" && b9 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
   }
   //X vertical
  else if (b1 == "X" && b4 == "X" && b7 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b2 == "X" && b5 == "X" && b8 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b3 == "X" && b6 == "X" && b9 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
   }

   //X Diagonal
  else if (b1 == "X" && b5 == "X" && b9 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
  }
  else if (b3 == "X" && b5 == "X" && b7 == "X") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player X wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
   }

   //Conditions of O
   //O Horizontal
  else if (b1 == "O" && b2 == "O" && b3 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b4 == "O" && b5 == "O" && b6 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b7 == "O" && b8 == "O" && b9 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
   }

   //O vertical
  else if (b1 == "O" && b4 == "O" && b7 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b2 == "O" && b5 == "O" && b8 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
  }
  else if (b3 == "O" && b6 == "O" && b9 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("5").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
   }

   //O Diagonal
  else if (b1 == "O" && b5 == "O" && b9 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("3").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("7").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
  }
  else if (b3 == "O" && b5 == "O" && b7 == "O") {
    flag = 1;
     document.getElementById("result").innerHTML = "Player O wins!";

     document.getElementById("1").style.pointerEvents = "none";
     document.getElementById("2").style.pointerEvents = "none";
     document.getElementById("4").style.pointerEvents = "none";
     document.getElementById("6").style.pointerEvents = "none";
     document.getElementById("8").style.pointerEvents = "none";
     document.getElementById("9").style.pointerEvents = "none";
   }
   //Checking Draw
   else if (
     (b1 == "X" || b1 == "O") &&
     (b2 == "X" || b2 == "O") &&
     (b3 == "X" || b3 == "O") &&
     (b4 == "X" || b4 == "O") &&
     (b5 == "X" || b5 == "O") &&
     (b6 == "X" || b6 == "O") &&
     (b7 == "X" || b7 == "O") &&
     (b8 == "X" || b8 == "O") &&
     (b9 == "X" || b9 == "O")
  ) {
    flag = 1;
     document.getElementById("result").innerHTML = "Match Tie";
     turn.innerText = "";
   }
   
    //  SWAP TURNS
   else {
     swapTurn();
   }
   
}


function swapTurn() {

   oturn = !oturn;
   if (oturn) {
      turn.innerText = "O's Turn";
   }
   else {
      turn.innerText = "X's Turn";
   }
}



// RESTART
function restart() {
  cells.forEach(cell => {
    cell.innerText = "";
    oturn = true;
    turn.innerText = "O's Turn";
     cell.addEventListener("click", handleClick, { once: true });
  })

}