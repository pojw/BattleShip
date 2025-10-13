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
        name.hits[hit] = [i, start[1]];
        hit += 1;
      }
      this.ships.push(name);

      return this.board[start[1]];
    } else {
      if (start[1] + name.length >= 10) return "Out of bounce on Y-axis";
      for (let i = start[1]; i < 5 + start[1]; i++) {
        this.board[i][start[0]] = "ship";
        name.hits[hit] = [start[0], i];
        hit += 1;
      }
      this.ships.push(name);
      return this.board;
    }
  }
  reivceAttack(point) {
    //checking if it can change teh carrier feature

    if (this.board[point[1]][point[0]] == "ship") {
      for (let ship of this.ships) {
        for (let j of ship.hits) {
          if (point[0] == j[0] && point[1] == j[1]) {
            if (ship.gotHit(point) == "Sunked") return "Sunked";
            this.board[point[1]][point[0]] = "hit";
            return "Hit";
          }
        }
      }
    }
    if (this.board[point[1]][point[0]] == "hit") return "Already Hit";
    if (this.board[point[1]][point[0]] == "blank") {
      this.board[point[1]][point[0]] = "miss";
      return "miss";
    }
    if (this.board[point[1]][point[0]] == "miss") return "Already Missed";
    return false;
  }
}

//now I have to add a feature to ensure ships dont overlap, and are also not in the zone of each other, so this can be done by
//  a list of ship cornditans that if equal then cant place there
//the only negative of this if they remove it, then well i could just remove entry from list , i could also just have the acutal
//  ship have no otuching zone whihc is the length o fit but also the surrounding
//so when removed, loops thorugh array and removes it
