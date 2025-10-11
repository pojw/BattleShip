import { fun, read } from "./index";
import { ship } from "./index";
test("first function", () => {
  expect(fun()).toBe(2);
});
test("second", () => {
  expect(read()).toBe(3);
});

describe("Ship functins", () => {
  let Carrier;
  beforeEach(() => {
    Carrier = new ship("Carreir", 5);
  });
  it("Name of ship", () => {
    expect(Carrier.length).toBe(5);
  });
});
