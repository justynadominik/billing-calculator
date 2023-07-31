import {ColdStorageCalculationInput, ColdStorageCalculator} from './ColdStorageCalculator';
import {RateConfiguration} from "./RateConfiguration";
import RepositoryCalculator, {RepositoryCalculationInput} from "./RepositoryCalculator";
import {ReviewCalculationInput, ReviewCalculator} from "./ReviewCalculator";
import {Tier} from "./Tier";
import {StagingCalculationInput, StagingCalculator} from "./StagingCalculator";
import {CalculationResult} from "./CalculationResult";

export class BillingData{
  day!: number;
  reviewSize!: number;
  repoSize!: number;
  coldStorageSize!: number;
  stagingSize!: number;
}

export class BillingDataInput{
  reviewData!: ReviewCalculationInput;
  repoData!: RepositoryCalculationInput;
  coldStorageData!: ColdStorageCalculationInput;
  stagingData!: StagingCalculationInput;
}

export class BillingCalculationResult{
    reviewResult: CalculationResult;
    repoResult: CalculationResult;
    coldStorageResult: CalculationResult;
    stagingResult: CalculationResult;
    peekDay : number;

    constructor(reviewResult: CalculationResult, repoResult: CalculationResult, coldStorageResult: CalculationResult, stagingResult: CalculationResult, peekDay : number = 1){
        this.reviewResult = reviewResult;
        this.repoResult = repoResult;
        this.coldStorageResult = coldStorageResult;
        this.stagingResult = stagingResult;
        this.peekDay = peekDay;
    }
}

export class CalculationService {
  calculate(dataInput : BillingDataInput) : BillingCalculationResult {
    
    var reviewCalculator = new ReviewCalculator(this.getDefaultReviewTiers());    
    var repoCalculator = new RepositoryCalculator(this.getDefaultRepoTiers());
    var coldStorageCalculator = new ColdStorageCalculator(this.getDefaultColdStorageTiers());
    var stagingCalculator = new StagingCalculator(this.getDefaultStagingTiers());

    var reviewResult = reviewCalculator.calculate(dataInput.reviewData);
    var repoResult = repoCalculator.calculate(dataInput.repoData);
    var coldStorageResult = coldStorageCalculator.calculate(dataInput.coldStorageData);
    var stagingResult = stagingCalculator.calculate(dataInput.stagingData);

    return new BillingCalculationResult(reviewResult, repoResult, coldStorageResult, stagingResult);
  }

  getDefaultReviewTiers() : RateConfiguration{
    return new RateConfiguration([new Tier(0, 2, 1.2), new Tier(2, null,  1.0)]);
  }

  getDefaultRepoTiers() : RateConfiguration{
    return new RateConfiguration([new Tier(0, 10, 0.6), new Tier(10, 20, 0.5), new Tier(20, 30, 0.3), new Tier(30, 40, 0.2), new Tier(40, null, 0.1)]);
  }

  getDefaultColdStorageTiers() : RateConfiguration{
    return new RateConfiguration([new Tier(0, 10, 0.3), new Tier(10, 20, 0.2), new Tier(20, 30, 0.1), new Tier(30, null, 0.05)]);
  }

  getDefaultStagingTiers() : RateConfiguration{
    return new RateConfiguration([new Tier(0, 10, 0.3, 1), new Tier(10, 20, 0.2, 2), new Tier(20, 30, 0.1, 3), new Tier(30, null, 0.05, 4)]);
  }

  calculateForMonth(data : [calculationInput: BillingDataInput, day: number][]) : BillingCalculationResult {

    let result : [BillingCalculationResult,number][] = []

    data.forEach((item) => {
      result.push([this.calculate(item[0]), item[1]]);
    });

    var peek = this.getReviewPeekData(result);

    var input = data[peek[1]][0];
    let finalCalculation = this.calculate(input);
    finalCalculation.peekDay = peek[1];

    return finalCalculation;
  }

  getReviewPeekData(data : [calculationInput : BillingCalculationResult, day: number][]) : [calculationInput : BillingCalculationResult, day: number]{
    let max = 0;
    let item = data[0];
    let index = 0;
    for(let i = 0; i < data.length; i++){
      let current = data[i];
      if(current[0].reviewResult.dataInGB > max){
        max = current[0].reviewResult.dataInGB;
        item = current;
        index = i;
      }
    }
    return item;
  }
}