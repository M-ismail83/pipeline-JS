const calculateTotal = require('./index');

test('calculateTotal returns correct total with tip', () => {
  expect(calculateTotal(100, 10)).toBe('110.00'); // 100 + %10 tip = 110
  expect(calculateTotal(200, 15)).toBe('230.00'); // 200 + %15 tip = 230
  expect(calculateTotal(50, 0)).toBe('50.00');    // 0 tip
  expect(calculateTotal(0, 20)).toBe('0.00');     // 0 bill
});