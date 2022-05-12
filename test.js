// Test 1 Length

const stringLength = require("./stringLength.js");

test("hello to be 5", () => {
  expect(stringLength("hello")).toEqual(5);
});

test("My Name is to be 10", () => {
  expect(stringLength("My name is")).toEqual(10);
});

test("Case X to be 6", () => {
  expect(stringLength("Case X")).toEqual(6);
});

test("X to be 1", () => {
  expect(stringLength("X")).toEqual(1);
});

// Test 2 Reverse

const reverseString = require("./reverseString.js");

test("Hello to be olleH", () => {
  expect(reverseString("Hello")).toEqual("olleH");
});

test("Hi to be iH", () => {
  expect(reverseString("Hi")).toEqual("iH");
});

// Test 3 Calculator

const calculator = require("./calculator.js");

describe("add", () => {
  test("1+2 to be 3", () => {
    expect(new calculator().add(1, 2)).toBe(3);
  });
  test("4+5 to be 9", () => {
    expect(new calculator().add(4, 5)).toBe(9);
  });
});

describe("subtract", () => {
  test("5-2 to be 3", () => {
    expect(new calculator().subtract(5, 2)).toBe(3);
  });
  test("6-3 to be 3", () => {
    expect(new calculator().subtract(6, 3)).toBe(3);
  });
});

describe("divide", () => {
  test("8/2 to be 4", () => {
    expect(new calculator().divide(8, 2)).toBe(4);
  });
  test("6/3 to be 2", () => {
    expect(new calculator().divide(6, 3)).toBe(2);
  });
});

describe("multipy", () => {
  test("5*2 to be 10", () => {
    expect(new calculator().multiply(5, 2)).toBe(10);
  });
  test("6*3 to be 18", () => {
    expect(new calculator().multiply(6, 3)).toBe(18);
  });
});