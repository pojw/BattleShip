export class GameBoard {
  constructor() {
    this.board = [];
    this.ships = [];
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill("blank"));
    }
    return this.board;
  }
  placeShip(name, start) {
    let hit = 0;
    if (name.orintation == "hori") {
      if (start[0] + name.length >= 10) return "Out of bounce on X-axis";
      for (let i = start[0]; i < 5 + start[0]; i++) {
        this.board[start[1]][i] = "ship";
        name.hits[hit] = [start[1], i];
        hit += 1;
      }
      this.ships.push(name);

      return this.board[start[1]];
    } else {
      if (start[1] + name.length >= 10) return "Out of bounce on Y-axis";
      for (let i = start[1]; i < 5 + start[1]; i++) {
        this.board[i][start[0]] = "ship";
        name.hits[hit] = [start[i], start[0]];
        hit += 1;
      }
      this.ships.push(name);
      return this.board;
    }
  }
  reivceAttack(point) {
    //checking if it can change teh carrier feature

    for (let ship of this.ships) {
      for (let j of ship.hits) {
        if (point[0] == j[0] && point[1] == j[1]) {
          return true;
        }
      }
    }

    return false;
  }
}

//recieve attack pair of codintas,
// I can intlize array for each ship, so it would be al ist of lists, so if [2,1] in ship array, and if it isthen add hit+=1 and if  hit=length then report sunk
//update the board so it own't be able to hit again and also show as hit
//  dertmine if hit or miss
//update board with hits an dmisses
//weather all ships have been shnk
//to check for ship sunkeed as in all, I can loop through arrays to find a ship, lableling might be, blank for emoty,
//shotHit , and ship, so if find shpo then false, ,/
//to keep track of when ship sunked, going off array, i can acutally make the ship array be the coridntes of it, and have it determined dynamically,so i can
//make 5 ships name and if it contians corindited hit then remove it and have the hit go up by one, so whe its hit the lengh amoutn sunk and report that back
//i do't ahve to keep exact track of the exact ship jsut the conridnates that got hit
