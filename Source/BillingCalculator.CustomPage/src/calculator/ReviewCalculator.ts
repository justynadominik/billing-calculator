import { RateConfiguration } from "./RateConfiguration";
import { Calculator } from './Calculator';
import { CalculationResult } from "./CalculationResult";

export class ReviewCalculator implements Calculator<ReviewCalculationInput> {

  rateConfig : RateConfiguration

  calculate(input: ReviewCalculationInput) : CalculationResult {

    let dataInGb = input.dataInGb  + input.textOnlyDocumentsCount/4000;

    let peek = null;
    if(input.reviewPeek == null){
     peek = dataInGb;
    }
    else{
      peek = Math.max(input.reviewPeek, dataInGb);
    }
    
    const rate = this.rateConfig.getTier(peek)?.rate!;

    return new CalculationResult(dataInGb, Number((dataInGb * rate).toFixed(2)));
  }

  constructor(rateConfig: RateConfiguration){
    this.rateConfig  = rateConfig;    
  }
}

export class ReviewCalculationInput {
  reviewPeek: number | null;
  dataInGb: number;
  textOnlyDocumentsCount: number;

  constructor(dataInGb: number, textOnlyDocumentsCount: number, reviewPeek: number) {
    this.dataInGb = dataInGb;
    this.textOnlyDocumentsCount = textOnlyDocumentsCount;
    this.reviewPeek = reviewPeek;
  }
}

