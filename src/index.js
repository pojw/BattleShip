import { GameBoard } from "./Gameboard";
import { Player } from "./player";
import { ship } from "./ship";
import "./styles.css";

class controller {
  constructor() {
    this.startGame();
  }

  GameBoard(currentPlayer) {
    let otherplayer = "";
    if (currentPlayer == "player1") {
      otherplayer = "player2";
    } else {
      otherplayer = "player1";
    }
    let gameboard = document.getElementById(otherplayer);
    gameboard.textContent = "";

    for (let i in this[otherplayer].gameboard.board) {
      for (let j in this[otherplayer].gameboard.board[i]) {
        let info = this[otherplayer].gameboard.board[i][j];

        let div = document.createElement("Button");

        if (info == "hit") {
          div.textContent = info;

          div.classList.add("hitShip");
        }
        if (info == "miss") {
          div.textContent = info;

          div.classList.add("miss");
        }
        div.addEventListener("click", () => {
          if (info == "blank" || info == "ship") {
            if (this[currentPlayer].turn) {
              let status = this[otherplayer].gameboard.reivceAttack([j, i]);
              this.GameBoard(currentPlayer);
              if (status == "Hit" || status == "Sunked") {
              } else {
                this.switchTurns(currentPlayer);
              }
              if (this[otherplayer].gameboard.sunkAllCheck() == "All Sunked") {
                alert("all sunked");
              }
            }
          }
        });

        div.classList.add("cell");
        gameboard.appendChild(div);
      }
    }
    //other side empty

    let gameboard2 = document.getElementById(currentPlayer);
    gameboard2.textContent = "";
    for (let i in this[currentPlayer].gameboard.board) {
      for (let j in this[currentPlayer].gameboard.board[i]) {
        let div = document.createElement("Button");
        div.classList.add("cell");
        let info = this[currentPlayer].gameboard.board[i][j];
        if (info == "ship") {
          div.textContent = info;
        }
        if (info == "hit") {
          div.classList.add("hitShip");
          div.textContent = info;
        }
        if (info == "miss") {
          div.classList.add("miss");
          div.textContent = info;
        }
        gameboard2.appendChild(div);
      }
    }
  }
  startGame() {
    this.content = document.getElementById("content");
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.player1.turn = true;
    this.shipLocation("player1");
    this.shipLocation("player2");
    this.placeShipsRandomly();

    this.GameBoard("player1");

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
      this.reset();
    });
    button.textContent = "Restart";
    area.appendChild(button);
  }
  switchTurns(currentPlayer) {
    this[currentPlayer].turn = false;

    setTimeout(() => {
      //eventlauyyy come back and set a blcoking screen saying is other player ready
      if (currentPlayer == "player1") {
        this.player2.turn = true;

        this.GameBoard("player2");
      } else {
        this.player1.turn = true;
        this.GameBoard("player1");
      }
    }, 1000);
  }

  placeShipsRandomly() {
    this.player1.gameboard.placeShip(this.player1.ships[0], [0, 0]);
    this.player1.gameboard.placeShip(this.player1.ships[1], [2, 2]);
    this.player1.gameboard.placeShip(this.player1.ships[2], [5, 5]);
    this.player1.gameboard.placeShip(this.player1.ships[3], [6, 6]);
    this.player1.gameboard.placeShip(this.player1.ships[4], [7, 3]);
    this.player2.gameboard.placeShip(this.player2.ships[0], [0, 0]);
    this.player2.gameboard.placeShip(this.player2.ships[1], [2, 2]);
    this.player2.gameboard.placeShip(this.player2.ships[2], [5, 5]);
    this.player2.gameboard.placeShip(this.player2.ships[3], [6, 6]);
    this.player2.gameboard.placeShip(this.player2.ships[4], [7, 3]);
    console.log(this.player1.gameboard);
  }
  reset() {
    this.content = document.getElementById("content");
    this.player1.gameboard.createBoard();
    this.player2.gameboard.createBoard();

    this.player2.turn = true;
    this.GameBoard("player1");
    this.placeShipsRandomly();
    this.shipLocation("player1");
    this.shipLocation("player2");
    this.settings();
  }
}
let game = new controller();

//make it so once your turn, your stuff is visbale and oppenat side blank
//create a form , maybe dropdonw
//so dropdown will show list of names, and cordinate you want it to start, and vertical or horizitaln,
//you will use these to plug into player1.gameboard.placeship, and if returns good then remove ship from list,
//same thing for right side
//  once created this, will come back to the ui of the game, which will consiss tof chanign the colors of the shps hit and sunked, as well as the misses,
//maybe add blue background and a emogijo of an explosin for missed,
