import { isWebTarget } from "webpack-dev-server";
import { GameBoard } from "./Gameboard";
import { ship } from "./index";
describe("Gameboard Functions", () => {
  let board;
  beforeEach(() => {
    board = new GameBoard();
    board.createBoard();
    Carrier = new ship("Carrier", 5, "hori");
  });
  it("Creating Boared", () => {
    const expected = Array.from({ length: 10 }, () =>
      new Array(10).fill("blank")
    );
    expect(board.board).toStrictEqual(expected);
  });
  it("Place first ship", () => {
    expect(board.placeShip(Carrier, [0, 0])).toEqual([
      "ship",
      "ship",
      "ship",
      "ship",
      "ship",
      "blank",
      "blank",
      "blank",
      "blank",
      "blank",
    ]);
  });
  it("Place ship at 2,2", () => {
    expect(board.placeShip(Carrier, [2, 2])).toEqual([
      "blank",
      "blank",
      "ship",
      "ship",
      "ship",
      "ship",
      "ship",
      "blank",
      "blank",
      "blank",
    ]);
  });
  it("Place Ship at 3,1", () => {
    expect(board.placeShip(Carrier, [3, 1])).toEqual([
      "blank",
      "blank",
      "blank",
      "ship",
      "ship",
      "ship",
      "ship",
      "ship",
      "blank",
      "blank",
    ]);
  });
  it("place first vertical ship", () => {
    Carrier.changeOrintation();
    expect(board.placeShip(Carrier, [0, 2])).toEqual([
      [
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "ship",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "ship",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "ship",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "ship",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "ship",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
      [
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
        "blank",
      ],
    ]);
  });
  it("Out of bounce on x axis", () => {
    expect(board.placeShip(Carrier, [5, 9])).toEqual("Out of bounce on X-axis");
  });
  it("Out of bounce on y axis", () => {
    Carrier.changeOrintation();

    expect(board.placeShip(Carrier, [0, 5])).toEqual("Out of bounce on Y-axis");
  });
  it("Rieice attack", () => {
    board.placeShip(Carrier, [0, 0]);
    expect(board.reivceAttack([0, 4])).toEqual(true);
  });
});
