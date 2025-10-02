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
  }

  lengths() {
    return this.length;
  }

  gotHit(index) {
    this.hits[index] = "hit";
    return this.hits;
  }

  sunkChecking() {
    for (let i = 0; i < this.length; i++) {
      if (this.hits[i] == "hit") {
        continue;
      } else {
        return false;
      }
    }
    return true;
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
