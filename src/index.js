import { GameBoard } from "./Gameboard";
import { Player } from "./player";
import { ship } from "./ship";
import "./styles.css";

class controller {
  constructor() {
    this.content = document.getElementById("content");
    this.player1 = new Player("Human");
    this.player2 = new Player("Robot");
    this.GameBoard("player1");
    this.GameBoard("player2");
    this.placeShipsRandomly();
  }

  GameBoard(currentPlayer) {
    console.log(this.player1.gameboard);
    let gameboard = document.getElementById(currentPlayer);
    gameboard.textContent = "";
    for (let i in this[currentPlayer].gameboard.board) {
      for (let j in this[currentPlayer].gameboard.board[i]) {
        let div = document.createElement("Button");
        let info = this[currentPlayer].gameboard.board[i][j];
        console.log(this[currentPlayer].gameboard.board[i][j]);

        div.textContent = info;
        if (info == "hit") {
          div.classList.add("hitShip");
        }
        if (info == "miss") {
          div.classList.add("miss");
        }
        div.addEventListener("click", () => {
          this[currentPlayer].gameboard.reivceAttack([j, i]);
          console.log(this[currentPlayer].gameboard.board);
          this.GameBoard(currentPlayer);
        });

        div.classList.add("cell");
        gameboard.appendChild(div);
      }
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
