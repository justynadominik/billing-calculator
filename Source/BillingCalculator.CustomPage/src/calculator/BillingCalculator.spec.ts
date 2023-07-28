import { BillingCalculator } from './BillingCalculator';

describe('Calculator', () => {
  test('Should calculate proper value', () => {
    let s = new BillingCalculator();
    let result = s.calculate(10);
    expect(result).toBe(20)
  })
})