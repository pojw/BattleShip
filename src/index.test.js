import { fun, read } from "./index";
test("first function", () => {
  expect(fun()).toBe(2);
});
test("second", () => {
  expect(read()).toBe(3);
});
