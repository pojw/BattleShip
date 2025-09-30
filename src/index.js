export function fun() {
  return 2;
}
export function read() {
  return 3;
}

export class ship {
  constructor(id, length, hitActin,hits, sunk) {
    (this.id = id), (this.length = length);
    (this.hitActin = hitActin), (this.sunk = sunk),    this.hits=[]
;
    }
    this.hits =for (let i = 0; i < this.length;i++){this.hits}
  length() {
    return this.length;
    },
    hit() {
      
  }
}
let shipTypes = { Carrier: 4, battleship: 4 };
let testing = new ship("fsafd");
//basically need a ship funcitn with the abilyt to know the oritnaition,
//lenght, orintation, one of poisiton hit, how many hit, and if sunk
//hit idea, proably have an area of it and start with null,
//  then replace with hit an dthe array index.