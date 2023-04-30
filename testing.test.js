import { capitalize } from "./capitalize";

test("all lowercase on capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("all uppercase on capitalize", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});
