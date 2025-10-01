import { isWebTarget } from "webpack-dev-server";
import { GameBoard } from "./Gameboard";

describe("Gameboard Functions", () => {
  let board;
  beforeEach(() => {
    board = new GameBoard();
  });
  it("Creating Boared", () => {
    const expected = Array.from({ length: 10 }, () =>
      new Array(10).fill("blank")
    );
    expect(board.createBoard()).toStrictEqual(expected);
  });
});
