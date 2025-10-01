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
  it("name of ship", () => {
    expect(Carrier.lengths()).toBe(5);
  });
  it("hit", () => {
    expect(Carrier.gotHit(2)).toEqual([null, null, "hit", null, null]);
  });
  it("False Sunk", () => {
    expect(Carrier.sunkChecking()).toBe(false);
  });
  it("True Sunk", () => {
    expect(Carrier.sunkChecking()).toBe(false);

    Carrier.gotHit(0);
    Carrier.gotHit(1);
    Carrier.gotHit(2);

    Carrier.gotHit(3);
    Carrier.gotHit(4);

    expect(Carrier.sunkChecking()).toBe(true);
  });
});
