import { add, sum, subtract, multiply, divide } from './operations.js';

test('adds 1 + 2 to equal 3 (sum)', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3 (add)', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('throws an error when dividing by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});
