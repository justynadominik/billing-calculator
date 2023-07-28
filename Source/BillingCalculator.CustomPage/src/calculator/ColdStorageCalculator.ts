import { RateConfiguration } from "./RateConfiguration";
import { Calculator } from './Calculator';
import { CalculationResult } from "./CalculationResult";

export class ColdStorageCalculator implements Calculator<ColdStorageCalculationInput> {
  rateConfig : RateConfiguration;  

  constructor(rateConfig: RateConfiguration){
    this.rateConfig  = rateConfig;    
  }

  calculate(input: ColdStorageCalculationInput): CalculationResult {
    let dataInGb = input.dataInGb  + input.textOnlyDocumentsCount/4000;

    const rate = this.rateConfig.getTier(input.reviewPeek)?.rate!;

    return new CalculationResult(dataInGb, dataInGb * rate)
  }
}

export class ColdStorageCalculationInput {
  reviewPeek: number;
  dataInGb: number;
  textOnlyDocumentsCount: number;

  constructor(dataInGb: number, textOnlyDocumentsCount: number, reviewPeek: number) {
    this.dataInGb = dataInGb;
    this.textOnlyDocumentsCount = textOnlyDocumentsCount;
    this.reviewPeek = reviewPeek;
  }
}


