export function fun() {
  return 2;
}
export function read() {
  return 3;
}

export class ship {
  constructor(id, length, orintation) {
    (this.id = id), (this.length = length);

    (this.orintation = orintation),
      (this.hits = new Array(this.length).fill(null));
    this.noZone = new Set();
  }

  lengths() {
    return this.length;
  }
  space(point) {
    this.noZone.add(JSON.stringify(point));
  }

  gotHit(point) {
    for (let i = 0; i < this.hits.length; i++) {
      if (point[0] == this.hits[i][0] && point[1] == this.hits[i][1]) {
        this.hits.splice(i, 1);
      }
    }
    if (this.sunkChecking()) {
      return "Sunked";
    }
  }

  sunkChecking() {
    if (this.hits.length == 0) {
      return true;
    } else return false;
  }
  changeOrintation() {
    if (this.orintation == "hori") {
      this.orintation = "vert";
    } else {
      this.orintation = "hori";
    }
  }
}
let shipTypes = { Carrier: 4, battleship: 4 };
let testing = new ship("fsafd");
//basically need a ship funcitn with the abilyt to know the oritnaition,
//lenght, orintation, one of poisiton hit, how many hit, and if sunk
//hit idea, proably have an area of it and start with null,
//  then replace with hit an dthe array index.
