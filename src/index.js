import { GameBoard } from "./Gameboard";
import { Player } from "./player";
import { ship } from "./ship";
import "./styles.css";

class controller {
  constructor() {
    this.startGame();
  }

  GameBoard(currentPlayer) {
    let gameboard = document.getElementById(currentPlayer);
    gameboard.textContent = "";
    for (let i in this[currentPlayer].gameboard.board) {
      for (let j in this[currentPlayer].gameboard.board[i]) {
        let div = document.createElement("Button");
        let info = this[currentPlayer].gameboard.board[i][j];

        div.textContent = info;
        if (info == "hit") {
          div.classList.add("hitShip");
        }
        if (info == "miss") {
          div.classList.add("miss");
        }
        div.addEventListener("click", () => {
          if (info == "blank" || info == "ship") {
            if (this[currentPlayer].turn) {
              let status = this[currentPlayer].gameboard.reivceAttack([j, i]);
              this.GameBoard(currentPlayer);
              if (status == "Hit" || status == "Sunked") {
              } else {
                this.switchTurns();
              }
              if (
                this[currentPlayer].gameboard.sunkAllCheck() == "All Sunked"
              ) {
                alert("all sunked");
              }
            }
          }
        });

        div.classList.add("cell");
        gameboard.appendChild(div);
      }
    }
  }
  startGame() {
    this.content = document.getElementById("content");
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.player1.turn = true;
    this.GameBoard("player1");
    this.GameBoard("player2");
    this.placeShipsRandomly();
    this.shipLocation("player1");
    this.shipLocation("player2");
    this.settings();
  }
  shipLocation(player) {
    let area = document.getElementById(player + "Ships");
    area.textContent = "";
    for (let i of this[player].ships) {
      area.textContent += " " + i.id;
    }
  }
  settings() {
    let area = document.getElementById("settings");
    area.textContent = `${this.player1.player} Wins: ${this.player1.wins}
   \n${this.player2.player} Wins: ${this.player2.wins}
   \n `;
    let button = document.createElement("button");
    button.addEventListener("click", () => {
      alert("hey");
    });
    button.textContent = "Restart";
    area.appendChild(button);
  }
  switchTurns() {
    if (this.player1.turn) {
      this.player1.turn = false;
      this.player2.turn = true;
    } else {
      this.player1.turn = true;
      this.player2.turn = false;
    }
  }
  placeShipsRandomly() {
    this.player1.gameboard.placeShip(this.player1.ships[0], [0, 0]);
    this.player1.gameboard.placeShip(this.player1.ships[1], [2, 2]);
    this.player1.gameboard.placeShip(this.player1.ships[2], [5, 5]);
    this.player1.gameboard.placeShip(this.player1.ships[3], [6, 6]);
    this.player1.gameboard.placeShip(this.player1.ships[4], [7, 3]);
    console.log(this.player1.gameboard);
    this.GameBoard("player1");
  }
}
let game = new controller();
