import { RepositoryCalculator, RepositoryCalculationInput, CalculationResult } from './BillingCalculator';

describe('RepositoryCalculator tests', () => {
  test('Should calculate proper value for repository', () => {
    let s = new RepositoryCalculator(1/3);

    let result = s.calculate(new RepositoryCalculationInput(10, 1, 0));
    
    expect(result).toEqual(new CalculationResult(9,3))
  })

  test('Should calculate proper value for repository with documents', () => {
    let s = new RepositoryCalculator(1/3);

    let result = s.calculate(new RepositoryCalculationInput(10, 1, 4000 * 3));
    
    expect(result).toEqual(new CalculationResult(12,4))
  })
})