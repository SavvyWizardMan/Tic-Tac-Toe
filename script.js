// const inputs = document.querySelectorAll("input");
// const span = document.querySelector('.player-turn');

// document.querySelector('button').addEventListener('click', () => {

//     for (let i of inputs) {
//         if (i.value === "") {
//             return;
//         }
//     }

//     document.querySelector('dialog').style.zIndex = -1;
//     document.querySelector('.tic-tac-toe-board').style.zIndex = 1;
//     span.innerText = `Player ${inputs[0].value} Turn (X)`;
// });

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

const Gameboard = {
    gameboard: ["/", "/", "/", "/", "/", "/", "/", "/", "/"],
    player1: "X",
    player2: "O",
    playGame: function() {
        let h = 0;
        let prev = 0;
        while(h < 9) {
            let placement = prev;
            let nextPlayer = player();
            let stringPlacement = "";
            const horArr = [[],[],[]];
            const vertArr = [[],[],[]];
            const diagArr = [[],[]];

            if (nextPlayer === this.player2) {
                //player2 is up
                stringPlacement = prompt("player2: choose tile (0-8) [type \"end\" to end]");
            } else {
                //player1 is up
                stringPlacement = prompt("player1: choose tile (0-8) [type \"end\" to end]");
            }

            placement = Number(stringPlacement);
            prev = placement;
            
            if (this.gameboard[placement] === this.player1 || this.gameboard[placement] === this.player2) {
                alert("There is already a piece there");
                continue;
            }

            if (stringPlacement === "end") {
                return;
            } else if (typeof placement !== "number" || isNaN(placement) || (placement < 0 || placement > 8)) {
                alert('that is not a proper index');
                continue;
            } 
            
            this.gameboard.splice(placement, 1, nextPlayer);
            let str = "";

            for (let i = 0; i < this.gameboard.length; i++) {
                if (i % 3 === 0 && i !== 0) {
                    str += "\n"; 
                    str += this.gameboard[i] + " ";
                } else {
                    str += this.gameboard[i] + " ";
                }
            }

            this.gameboard = this.gameboard.filter((e) => e !== " ");

            console.log(str);

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

            for (let i = 0; i < horArr.length; i++) {
                if (horArr[i].every((val) => (val === this.player1)) || horArr[i].every((val) => (val === this.player2))) {
                    alert(nextPlayer + " Has won!");
                    return;
                } 
            }

            for (let i = 0; i < vertArr.length; i++) {
                if (vertArr[i].every((val) => (val === this.player1)) || vertArr[i].every((val) => (val === this.player2))) {
                    alert(nextPlayer + " Has won!");
                    return;
                } 
            }

            for (let i = 0; i < diagArr.length; i++) {
                if (diagArr[i].every((val) => (val === this.player1)) || diagArr[i].every((val) => (val === this.player2))) {
                    alert(nextPlayer + " Has won!");
                    return;
                } 
            }

            h++;
        }
    }
}

Gameboard.playGame();
