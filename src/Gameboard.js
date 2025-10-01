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
}
