var turn = true;

function updateTurn() {
    var turnName = document.getElementById("turn");
    if (turn === true) {
        turn = false;
        let string = "Turn Of: " + turn;
        turnName.innerHTML = string;
        changeTurn("x")
        
    } else {
        turn = true;
        let string = "Turn Of: " + turn;
        turnName.innerHTML = string;
        changeTurn("o");
       
    }
}

function changeTurn(turn) {
    let e = document.getElementsByClassName("squared");
    for (i = 0; i < e.length; i++) {
        e[i].onclick = function () {
            updateTurn();
            this.classList.add(turn);
        };
    }
}
