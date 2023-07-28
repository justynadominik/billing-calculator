import { RateConfiguration } from "./RateConfiguration";
import { Calculator } from './Calculator';
import { CalculationResult } from "./CalculationResult";

export class ReviewCalculator implements Calculator<ReviewCalculationInput> {

  rateConfig : RateConfiguration

  calculate(input: ReviewCalculationInput) : CalculationResult {

    let dataInGb = input.dataInGb  + input.textOnlyDocumentsCount/4000;

    const rate = this.rateConfig.getTier(input.reviewPeek)?.rate!;

    return new CalculationResult(dataInGb, dataInGb * rate)
  }

  constructor(rateConfig: RateConfiguration){
    this.rateConfig  = rateConfig;    
  }
}

export class ReviewCalculationInput {
  reviewPeek: number;
  dataInGb: number;
  textOnlyDocumentsCount: number;

  constructor(dataInGb: number, textOnlyDocumentsCount: number, reviewPeek: number) {
    this.dataInGb = dataInGb;
    this.textOnlyDocumentsCount = textOnlyDocumentsCount;
    this.reviewPeek = reviewPeek;
  }
}

