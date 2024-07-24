const convert_to_roman_numerals = require('./app');

test('converts 1 to I', () => {
  expect(convert_to_roman_numerals(1)).toBe("I");
});