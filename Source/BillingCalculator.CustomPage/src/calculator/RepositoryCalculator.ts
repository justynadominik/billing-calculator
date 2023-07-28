import { CalculationResult } from "./CalculationResult";
import { RateConfiguration } from "./RateConfiguration";
import { Calculator } from './Calculator';

export default class RepositoryCalculator implements Calculator<RepositoryCalculationInput> {
  rateConfig : RateConfiguration;

  calculate(input: RepositoryCalculationInput) : CalculationResult {

    let dataInGb = input.totalBilliableFileSizeInGB  + input.textOnlyDocumentsCount/4000 - input.linkedBilliableFileSizeInGB

    const rate = this.rateConfig.getTier(input.reviewPeek)?.rate!;

    return new CalculationResult(dataInGb, dataInGb * rate)
  }

  constructor(rateConfig : RateConfiguration){
    this.rateConfig  = rateConfig;    
  }
}

export class RepositoryCalculationInput {
  totalBilliableFileSizeInGB: number;
  linkedBilliableFileSizeInGB: number;
  textOnlyDocumentsCount: number;
  reviewPeek: number;

  constructor(totalBillable: number, linkedFileSizeInGB: number, textOnlyDocuments: number, reviewPeek: number) {
    this.totalBilliableFileSizeInGB = totalBillable;
    this.textOnlyDocumentsCount = textOnlyDocuments;
    this.linkedBilliableFileSizeInGB = linkedFileSizeInGB;
    this.reviewPeek = reviewPeek;
  }
}

