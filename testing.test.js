import { capitalize } from "./modules/capitalize";
import { reverseString } from "./modules/reverseString";

test("all lowercase on capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("all uppercase on capitalize", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("Hello World!")).toBe("!dlroW olleH");
});
