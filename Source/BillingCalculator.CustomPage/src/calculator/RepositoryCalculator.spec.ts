import RepositoryCalculator, { RepositoryCalculationInput } from './RepositoryCalculator';
import { RateConfiguration } from "./RateConfiguration";
import { Tier } from "./Tier";
import { CalculationResult } from "./CalculationResult";

describe('RepositoryCalculator tests', () => {
  test('Should calculate proper value for repository', () => {
    let config = getSampleTiers();
  
    let s = new RepositoryCalculator(config);

    let result = s.calculate(new RepositoryCalculationInput(10, 1, 0, 10));
    
    expect(result).toEqual(new CalculationResult(9,4.5))
  })

  test('Should calculate proper value for repository', () => {
    let config = getSampleTiers();
  
    let s = new RepositoryCalculator(config);

    let result = s.calculate(new RepositoryCalculationInput(10, 1, 0, 40));
    
    expect(result).toEqual(new CalculationResult(9,0.9))
  })
  

  test('Should calculate proper value for repository with documents', () => {
    let config = getSampleTiers();

    let s = new RepositoryCalculator(config);
    let result = s.calculate(new RepositoryCalculationInput(10, 1, 4000, 10));
    
    expect(result).toEqual(new CalculationResult(10,5))
  })  
})

function getSampleTiers() {
  return new RateConfiguration([
    new Tier(0, 10, 0.6),
    new Tier(10, 20, 0.5),
    new Tier(20, 30, 0.3),
    new Tier(30, 40, 0.2),
    new Tier(40, null, 0.1),
  ]);
}
