import { Calculator } from "./Calculator";
import { RateConfiguration } from "./RateConfiguration";
import { CalculationResult } from './CalculationResult';

export class StagingCalculator implements Calculator<StagingCalculationInput> {
  rateConfig : RateConfiguration;

  calculate(input: StagingCalculationInput): CalculationResult {
    const rate = this.rateConfig.getTier(input.reviewPeek)?.rate!;
    return new CalculationResult(input.dataInGb, Number((input.dataInGb * rate).toFixed(2)));
  }  

  constructor(rateConfig: RateConfiguration){
    this.rateConfig  = rateConfig;    
  }
}

export class StagingCalculationInput {
  reviewPeek: number;
  dataInGb: number;

  constructor(dataInGb: number, reviewPeek: number) {
    this.dataInGb = dataInGb;
    this.reviewPeek = reviewPeek;
  }
}