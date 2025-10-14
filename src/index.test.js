import { fun, read } from "./ship";
import { ship } from "./ship";
test("first function", () => {
  expect(fun()).toBe(2);
});
test("second", () => {
  expect(read()).toBe(3);
});

describe("Ship functins", () => {
  let Carrier;
  beforeEach(() => {
    Carrier = new ship("Carreir", 5, "hori");
  });
  it("Name of ship", () => {
    expect(Carrier.length).toBe(5);
  });
  it("Orintation change", () => {
    expect(Carrier.orintation).toBe("hori");
    Carrier.changeOrintation();
    expect(Carrier.orintation).toBe("vert");
  });
});
