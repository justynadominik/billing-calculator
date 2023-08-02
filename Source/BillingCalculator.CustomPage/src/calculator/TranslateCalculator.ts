import { Calculator } from "./Calculator";
import { RateConfiguration } from "./RateConfiguration";
import { CalculationResult } from './CalculationResult';

export class TranslateCalculator implements Calculator<TranslateCalculatorInput> {
  
  calculate(input: TranslateCalculatorInput): CalculationResult {
    const rate = 0.5;
    return new CalculationResult(input.dataInGb, Number((input.dataInGb * rate).toFixed(2)));
  }  

  constructor(){
  }
}

export class TranslateCalculatorInput {
  dataInGb: number;

  constructor(dataInGb: number) {
    this.dataInGb = dataInGb;
  }
}