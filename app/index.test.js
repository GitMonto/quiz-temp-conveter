
import tryConvert from "./index.js"


describe("tryConvet", () => {
test("Converts between Celsius and Fahrenheit", () => {
  expect(tryConvert(100, "toFahrenheit")).toBe("212");
})
test("Converts between Fahrenheit and Celsius", () => {
  expect(tryConvert(50, "toCelsius")).toBe("10");
})

test("Convert to Celsius with non-numerical input", () => {
  expect(tryConvert("", "toCelsius")).toBe("");
})
test("Convert to Fahrenheit with non-numerical input", () => {
  expect(tryConvert("", "toFahrenheit")).toBe("");
})
});