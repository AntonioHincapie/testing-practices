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