import * as calc from '../code/code';

describe('계산 테스트', () => {
    test('SUM a = 5, b = 10', () => {
        const a = 5;
        const b = 10;

        expect(calc.sum(a, b)).toBe(15);
    });
    test('MINUS a = 5, b = 10', () => {
        const a = 5;
        const b = 10;

        expect(calc.minus(a, b)).toBe(-5);
    });
    test('MUL a = 5, b = 10', () => {
        const a = 5;
        const b = 10;

        expect(calc.multi(a, b)).toBe(50);
    });
    test('DIV a = 5, b = 10', () => {
        const a = 5;
        const b = 10;

        expect(calc.div(a, b)).toBe(0.5);
    });
});