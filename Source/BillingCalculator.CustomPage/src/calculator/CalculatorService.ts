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

class BillingCalculationResult{
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

class CalculationService {
  calculate(dataInput : BillingDataInput) : BillingCalculationResult {
    
    var reviewCalculator = new ReviewCalculator(new RateConfiguration([new Tier(0, null, 1.2)]));    
    var repoCalculator = new RepositoryCalculator(new RateConfiguration([new Tier(0, null, 0.4)]));
    var coldStorageCalculator = new ColdStorageCalculator(new RateConfiguration([new Tier(0, null, 0.3)]));
    var stagingCalculator = new StagingCalculator(new RateConfiguration([new Tier(0, null, 0.3)]));

    var reviewResult = reviewCalculator.calculate(dataInput.reviewData);
    var repoResult = repoCalculator.calculate(dataInput.repoData);
    var coldStorageResult = coldStorageCalculator.calculate(dataInput.coldStorageData);
    var stagingResult = stagingCalculator.calculate(dataInput.stagingData);

    return new BillingCalculationResult(reviewResult, repoResult, coldStorageResult, stagingResult);
  }

  calculateForMonth(data : [BillingDataInput,number][]) : BillingCalculationResult {

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

  getReviewPeekData(data : [BillingCalculationResult, number][]) : [BillingCalculationResult, number]{
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