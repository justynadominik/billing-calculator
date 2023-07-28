import { CalculationResult } from "./CalculationResult";
import { RateConfiguration } from "./RateConfiguration";

export class RepositoryCalculator {
  reviewPeek: number;
  rateConfig : RateConfiguration;

  calculate(repoData: RepositoryCalculationInput) : CalculationResult {

    let dataInGb = repoData.totalBilliableFileSizeInGB  + repoData.textOnlyDocumentsCount/4000 - repoData.linkedBilliableFileSizeInGB

    const rate = this.rateConfig.getTier(this.reviewPeek)?.rate!;

    return new CalculationResult(dataInGb, dataInGb * rate)
  }

  constructor(reviewPeek : number, rateConfig : RateConfiguration){
    this.reviewPeek = reviewPeek;
    this.rateConfig = rateConfig;
  }
}

export class RepositoryCalculationInput {
  totalBilliableFileSizeInGB : number;
  linkedBilliableFileSizeInGB : number;
  textOnlyDocumentsCount : number;
  
  constructor(totalBillable: number, linkedFileSizeInGB: number, textOnlyDocuments: number){
    this.totalBilliableFileSizeInGB = totalBillable
    this.textOnlyDocumentsCount = textOnlyDocuments
    this.linkedBilliableFileSizeInGB = linkedFileSizeInGB
  }
}


