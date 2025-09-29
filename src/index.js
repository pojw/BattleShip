export function fun() {
  return 2;
}
export function read() {
  return 3;
}

export class ship {
  constructor(id, length, hit, sunk) {
    (this.id = id), (this.length = length.fun);
    (this.hit = hit), (this.sunk = sunk);
  }
  length() {
    return this.length;
  }
}
let shipTypes = { Carrier: 4, battleship: 4 };
let testing = new ship("fsafd");
