import {
  ColdStorageCalculationInput,
  ColdStorageCalculator,
} from "./ColdStorageCalculator";
import { RateConfiguration } from "./RateConfiguration";
import RepositoryCalculator, {
  RepositoryCalculationInput,
} from "./RepositoryCalculator";
import { ReviewCalculationInput, ReviewCalculator } from "./ReviewCalculator";
import { Tier } from "./Tier";
import {
  StagingCalculationInput,
  StagingCalculator,
} from "./StagingCalculator";
import {
  TranslateCalculatorInput,
  TranslateCalculator,
} from "./TranslateCalculator";
import { CalculationResult } from "./CalculationResult";

export class BillingData {
  day!: number;
  reviewSize!: number;
  repoSize!: number;
  coldStorageSize!: number;
  stagingSize!: number;
}

export class BillingDataInput {
  reviewData!: ReviewCalculationInput;
  repoData!: RepositoryCalculationInput;
  coldStorageData!: ColdStorageCalculationInput;
  stagingData!: StagingCalculationInput;
  translateData!: TranslateCalculatorInput;
}

export class BillingCalculationResult {
  reviewResult: CalculationResult;
  repoResult: CalculationResult;
  coldStorageResult: CalculationResult;
  stagingResult: CalculationResult;
  translateResult: CalculationResult;
  peekDay: number;

  constructor(
    reviewResult: CalculationResult,
    repoResult: CalculationResult,
    coldStorageResult: CalculationResult,
    stagingResult: CalculationResult,
    translateResult: CalculationResult,
    peekDay: number = 1
  ) {
    this.reviewResult = reviewResult;
    this.repoResult = repoResult;
    this.coldStorageResult = coldStorageResult;
    this.stagingResult = stagingResult;
    this.translateResult = translateResult;
    this.peekDay = peekDay;
  }

  totalCost(): number {
    return (
        this.reviewResult.amount +
        this.repoResult.amount +
        this.coldStorageResult.amount +
        this.stagingResult.amount +
        this.translateResult.amount
    );
  }
}

export class CalculationService {
  calculate(dataInput: BillingDataInput): BillingCalculationResult {
    var reviewCalculator = new ReviewCalculator(this.getDefaultReviewTiers());
    var repoCalculator = new RepositoryCalculator(this.getDefaultRepoTiers());
    var translateCalculator = new TranslateCalculator();
    var coldStorageCalculator = new ColdStorageCalculator(
      this.getDefaultColdStorageTiers()
    );
    var stagingCalculator = new StagingCalculator(
      this.getDefaultStagingTiers()
    );

    var translateResult = translateCalculator.calculate(dataInput.translateData);
    var reviewResult = reviewCalculator.calculate(dataInput.reviewData);
    dataInput.repoData.reviewPeek = reviewResult.amount;
    dataInput.stagingData.reviewPeek = reviewResult.amount;
    dataInput.coldStorageData.reviewPeek = reviewResult.amount;

    var repoResult = repoCalculator.calculate(dataInput.repoData);
    var coldStorageResult = coldStorageCalculator.calculate(
      dataInput.coldStorageData
    );
    var stagingResult = stagingCalculator.calculate(dataInput.stagingData);


    return new BillingCalculationResult(
      reviewResult,
      repoResult,
      coldStorageResult,
      stagingResult,
      translateResult
    );
  }

  getDefaultReviewTiers(): RateConfiguration {
    return new RateConfiguration([
      new Tier(0, 3, 10),
      new Tier(3, 5, 8.1),
      new Tier(5, 20, 6),
      new Tier(20, 35, 5.5),
      new Tier(35, 100, 5),
      new Tier(100, null, 3)
    ]);
  }

  getDefaultRepoTiers(): RateConfiguration {
    return new RateConfiguration([
      new Tier(0, 3, 3.3),
      new Tier(3, 5, 2.7),
      new Tier(5, 20, 2),
      new Tier(20, 35, 1.7),
      new Tier(35, 100, 1.6),
      new Tier(100, null, 1)
    ]);
  }

  getDefaultColdStorageTiers(): RateConfiguration {
    return new RateConfiguration([
      new Tier(0, 3, 2.5),
      new Tier(3, 5, 2),
      new Tier(5, 20, 1.5),
      new Tier(20, 35, 1.3),
      new Tier(35, 100, 1.2),
      new Tier(100, null, 0.75)
    ]);
  }

  getDefaultStagingTiers(): RateConfiguration {
    return new RateConfiguration([
      new Tier(0, 100, 0.3, 10),
      new Tier(100, 200, 0.2, 20),
      new Tier(200, 300, 0.1, 30),
      new Tier(300, null, 0.05, 40),
    ]);
  }

  calculateForMonth(
    data: [calculationInput: BillingDataInput, day: number][]
  ): BillingCalculationResult {
    let result: [BillingCalculationResult, number][] = [];

    data.forEach((item) => {
      result.push([this.calculate(item[0]), item[1]]);
    });

    var peek = this.getReviewPeekData(result);
    var stagingPeek = this.getStagingPeekData(result);

    var input = data.find((item) => item[1] == peek[1])![0];
    let finalCalculation = this.calculate(input);
    finalCalculation.peekDay = peek[1];
    finalCalculation.stagingResult = stagingPeek[0].stagingResult;

    return finalCalculation;
  }

  getReviewPeekData(
    data: [calculationInput: BillingCalculationResult, day: number][]
  ): [calculationInput: BillingCalculationResult, day: number] {
    let max = 0;
    let item = data[0];
    let index = 0;
    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      if (current[0].reviewResult.dataInGB > max) {
        max = current[0].reviewResult.dataInGB;
        item = current;
        index = i;
      }
    }
    return item;
  }

  getStagingPeekData(
    data: [calculationInput: BillingCalculationResult, day: number][]
  ): [calculationInput: BillingCalculationResult, day: number] {
    let max = 0;
    let item = data[0];
    let index = 0;
    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      if (current[0].stagingResult.dataInGB > max) {
        max = current[0].stagingResult.dataInGB;
        item = current;
        index = i;
      }
    }
    return item;
  }
}
