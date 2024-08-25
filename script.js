
// function Game() {
//     const gameboard = ["","","","","","","","",""];
//     const divs = document.querySelectorAll('.tic-tac-toe-board *');

//     const Gameboard = {
//         gameboard: gameboard,
//         player1: 'X',
//         player2: 'O'
//     }

//     return function playerTurn(player) {
//         divs.forEach((div) => {
//             div.addEventListener('click', () => {

//                 for (let i = 0; i < divs.length; i++) {
//                     gameboard.splice(i, 1, divs[i].innerText);
//                 }

//                 for (let i = 0; i < 2; i++) {
//                     if (player === inputs[0].value) {
//                         div.innerText = Gameboard.player1;
//                         span.innerText = `Player ${inputs[0].value} Turn (X)`;
//                         break;;
//                     } else {
//                         div.innerText = Gameboard.player2;
//                         span.innerText = `Player ${inputs[1].value} Turn (O)`;
//                         break;
//                     }
//                 }
//             });
//         });
//     }
// }

// const startGame = Game();
// startGame((function() {
//     if (div.innerContent === Gameboard.player1) {
        
//     }
// })());

const inputs = document.querySelectorAll("input");
const span = document.querySelector('.player-turn');
document.querySelector('button[type="submit"]').addEventListener('click', () => {

    for (let i of inputs) {
        if (i.value === "") {
            return;
        }
    }

    document.querySelector('dialog').style.zIndex = -1;
    document.querySelector('.tic-tac-toe-board').style.zIndex = 1;
    span.innerText = `Player ${inputs[0].value} Turn (X)`;
});

const Gameboard = {
    gameboard: ["/", "/", "/", "/", "/", "/", "/", "/", "/"],
    player1: "X",
    player2: "O",
    winner: false,
    playGame: function() {
        const divs = document.querySelectorAll('.tic-tac-toe-board *');
        const restartBtn = document.querySelector('.restart');
        let prev = 0;
            divs.forEach((div) => {
                div.addEventListener('click', () => {                       

                    if (div.innerText === this.player1 || div.innerText === this.player2) {
                        alert("There is already a piece there");
                        return;
                    }

                        let placement = prev;
                        let nextPlayer = player();
                        const horArr = [[],[],[]];
                        const vertArr = [[],[],[]];
                        const diagArr = [[],[]];
                        placement = Number(div.getAttribute('data-index'));

                        if (nextPlayer === this.player1) {
                            span.innerText = `Player ${inputs[1].value} Turn (${this.player2})`;
                        } else {
                            span.innerText = `Player ${inputs[0].value} Turn (${this.player1})`
                        }

                        prev = placement;

                        div.innerText = nextPlayer;
                        
                        this.gameboard.splice(placement, 1, nextPlayer);

                        function player() {
                            if (Gameboard.gameboard[placement] === "X") {
                                return Gameboard.player2;
                            } else {
                                return Gameboard.player1;
                            }
                        }

                        // can't think of how to make a loop 
                        horArr[0][0] = this.gameboard[0];
                        horArr[0][1] = this.gameboard[1];
                        horArr[0][2] = this.gameboard[2];
                        horArr[1][0] = this.gameboard[3];
                        horArr[1][1] = this.gameboard[4];
                        horArr[1][2] = this.gameboard[5];
                        horArr[2][0] = this.gameboard[6];
                        horArr[2][1] = this.gameboard[7];
                        horArr[2][2] = this.gameboard[8];

                        vertArr[0][0] = this.gameboard[0];
                        vertArr[0][1] = this.gameboard[3];
                        vertArr[0][2] = this.gameboard[6];
                        vertArr[1][0] = this.gameboard[1];
                        vertArr[1][1] = this.gameboard[4];
                        vertArr[1][2] = this.gameboard[7];
                        vertArr[2][0] = this.gameboard[2];
                        vertArr[2][1] = this.gameboard[5];
                        vertArr[2][2] = this.gameboard[8];

                        diagArr[0][0] = this.gameboard[0];
                        diagArr[0][1] = this.gameboard[4];
                        diagArr[0][2] = this.gameboard[8];
                        diagArr[1][0] = this.gameboard[2];
                        diagArr[1][1] = this.gameboard[4];
                        diagArr[1][2] = this.gameboard[6];
                        // help me

                            if (Gameboard.gameboard.every((val) => (val === Gameboard.player1 || val === Gameboard.player2))) {
                                span.innerText = `Looks like we have a tie!`;
                                this.winner = true;
                            }

                            for (let i = 0; i < horArr.length; i++) {
                                if (horArr[i].every((val) => (val === this.player1)) || horArr[i].every((val) => (val === this.player2))) {
                                    span.innerText = `player ${nextPlayer} has won!`;
                                    this.winner = true;
                                } 
                            }

                            for (let i = 0; i < vertArr.length; i++) {
                                if (vertArr[i].every((val) => (val === this.player1)) || vertArr[i].every((val) => (val === this.player2))) {
                                    span.innerText = `player ${nextPlayer} has won!`;
                                    this.winner = true;
                                } 
                            }

                            for (let i = 0; i < diagArr.length; i++) {
                                if (diagArr[i].every((val) => (val === this.player1)) || diagArr[i].every((val) => (val === this.player2))) {
                                    span.innerText = `player ${nextPlayer} has won!`;
                                    this.winner = true;
                                } 
                            }

                            if (this.winner) {
                                restartBtn.classList.add('flyin');
                                document.querySelector('.cover-box').style.zIndex = 2;
                                restartBtn.style.transform = "scale(1)";
                                restartBtn.style.marginLeft = "auto";
                                restartBtn.style.display = "block";
                            }
            });

            restartBtn.addEventListener('click', () => {
                divs.forEach(div => div.innerText = "");
                span.innerText = `Player ${inputs[0].value} Turn (X)`;
                document.querySelector('.cover-box').style.zIndex = -1;
                restartBtn.style.display = "none";
                restartBtn.style.transform = "scale(0)";
                restartBtn.style.marginLeft = "-9999px";
                this.winner = false;
                this.gameboard = ["/", "/", "/", "/", "/", "/", "/", "/", "/"];
            });
        }); 
    }
}

Gameboard.playGame();
