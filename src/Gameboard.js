export class GameBoard {
  constructor() {
    this.board = [];
    this.ships = [];
    this.cantPlace = new Set();
  }

  createBoard() {
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board.push(new Array(10).fill("blank"));
    }
    return this.board;
  }
  checkPlace(name, start) {
    if (name.orintation == "hori") {
      for (let i = start[0]; i < 5 + start[0]; i++) {
        if (this.cantPlace.has(JSON.stringify([i, start[1]]))) {
          return false;
        }
      }
    } else {
      for (let i = start[1]; i < 5 + start[1]; i++) {
        if (this.cantPlace.has(JSON.stringify([start[0], i]))) {
          return false;
        }
      }
      return true;
    }
    return true;
  }
  placeShip(name, start) {
    start[0] = parseInt(start[0]);
    start[1] = parseInt(start[1]);

    if (!this.checkPlace(name, start)) {
      return "Already Placed";
    }
    let hit = 0;
    if (name.orintation == "hori") {
      console.log(start[0], start[1], name.length);
      console.log(start[0] + name.length);
      if (start[0] + name.length > 10) return "Out of bounce on X-axis";
      for (let i = start[0]; i < name.length + start[0]; i++) {
        this.board[start[1]][i] = "ship";
        name.hits[hit] = [i, start[1]];
        name.space([i, start[1]]);

        hit += 1;
      }
      this.ships.push(name);
      this.addNozone(name.noZone);
      console.log(this.cantPlace);
      console.log(name.noZone);

      return this.board[start[1]];
    } else {
      if (!this.checkPlace(name, start)) {
        return "Already Placed";
      }
      if (start[1] + name.length > 10) return "Out of bounce on Y-axis";
      for (let i = start[1]; i < 5 + start[1]; i++) {
        this.board[i][start[0]] = "ship";
        name.hits[hit] = [start[0], i];
        name.space([start[0], i]);

        hit += 1;
      }
      this.ships.push(name);
      this.addNozone(name.noZone);
      console.log(name.noZone);
      console.log(this.cantPlace);
      console.log("f");
      return this.board;
    }
  }
  addNozone(points) {
    for (let point of points) {
      console.log(point);
      this.cantPlace.add(point);
    }
  }
  reivceAttack(point) {
    //checking if it can change teh carrier feature

    if (this.board[point[1]][point[0]] == "ship") {
      console.log("hit");
      for (let ship of this.ships) {
        for (let j of ship.hits) {
          if (point[0] == j[0] && point[1] == j[1]) {
            if (ship.gotHit(point) == "Sunked") {
              console.log("sunked");
              this.board[point[1]][point[0]] = "hit";
              return "Sunked";
            }
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
  sunkAllCheck() {
    for (let i of this.ships) {
      console.log(i);
      if (!i.sunkChecking()) {
        return false;
      }
    }
    return "All Sunked";
  }
}

// next feature will be to not display the board if it not your turn,
//    idea, have player one render theres, player two have it all be blank
//    once you hit and switch turns, then have player 1 blank and show player 2 ships
//
