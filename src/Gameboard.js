export class GameBoard {
  constructor() {
    this.board = [];
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill("blank"));
    }
    return this.board;
  }
  placeShip(name, start) {
    if (name.orintation == "hori") {
      for (let i = start[0]; i < 5 + start[0]; i++) {
        this.board[start[1]][i] = "ship";
      }
      return this.board[start[1]];
    } else {
      for (let i = start[1]; i < 5 + start[1]; i++) {
        this.board[i][start[0]] = "ship";
      }
      return this.board;
    }
  }
}
//next thign to do, have a checking system for placeShip where if it owuld be passed the array then so to far right or left

//place ships at spieific corinditates
//recieve attack pair of codintas,
//  dertmine if hit or miss
//update board with hits an dmisses
//weather all ships have been shnk
//to check for ship sunkeed as in all, I can loop through arrays to find a ship, lableling might be, blank for emoty,
//shotHit , and ship, so if find shpo then false, ,/
//to keep track of when ship sunked, going off array, i can acutally make the ship array be the coridntes of it, and have it determined dynamically,so i can
//make 5 ships name and if it contians corindited hit then remove it and have the hit go up by one, so whe its hit the lengh amoutn sunk and report that back
//i do't ahve to keep exact track of the exact ship jsut the conridnates that got hit
