import { GameBoard } from "./Gameboard";
import { ship } from "./ship";
export class Player {
  constructor(player) {
    this.player = player;
    this.gameboard = new GameBoard();
    this.gameboard.createBoard();

    this.ships = [
      new ship("Carrier", 5, "hori"),
      new ship("Battleship", 4, "hori"),
      new ship("Cruiser", 3, "hori"),
      new ship("Submarine", 3, "hori"),
      new ship("Destroyer", 2, "hori"),
    ];
  }
}

//next feature is the players and havng the proper identificaiotn towards them,
//after creating players calss, I wil create the UI for it
