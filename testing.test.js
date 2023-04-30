import { caeserCipher } from "./modules/caesarCipher";
import { calculate } from "./modules/calculate";
import { capitalize } from "./modules/capitalize";
import { reverseString } from "./modules/reverseString";
import { analyzeArray } from "./modules/analyzeArray";

test("all lowercase on capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("all uppercase on capitalize", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("Hello World!")).toBe("!dlroW olleH");
});

test("calculator - adding", () => {
  expect(calculate("add", 2, 4)).toBe(6);
  expect(calculate("add", 100, 4)).toBe(104);
});

test("calculator - adding negative", () => {
  expect(calculate("add", -4, 1)).toBe(-3);
});

test("calculator - subtract", () => {
  expect(calculate("subtract", 2, 4)).toBe(-2);
  expect(calculate("subtract", 100, 8)).toBe(92);
});

test("calculator - subtract negative", () => {
  expect(calculate("subtract", -10, 5)).toBe(-15);
});

test("calculator - divide", () => {
  expect(calculate("divide", 8, 2)).toBe(4);
});

test("calculate - divide by 0", () => {
  expect(() => calculate("divide", 2, 0)).toThrow(Error);
});

test("calculate - multiply", () => {
  expect(calculate("multiply", 2, 10)).toBe(20);
});

test("invalid operation", () => {
  expect(() => calculate("party", 100, 100)).toThrow(Error);
});

test("caeser cipher", () => {
  expect(caeserCipher("Hello", 2)).toBe("Jgnnq");
  expect(caeserCipher("This is a test! :)", 10)).toBe("Drsc sc k docd! :)");
});

test("analyze array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object["average"]).toBe(4);
  expect(object["min"]).toBe(1);
  expect(object["max"]).toBe(8);
  expect(object["length"]).toBe(6);
});
