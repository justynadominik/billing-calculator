import {CalculationService} from './CalculatorService';
import {BillingDataInput, BillingCalculationResult} from './CalculatorService';
import {ColdStorageCalculationInput} from './ColdStorageCalculator';
import {RepositoryCalculationInput} from "./RepositoryCalculator";
import {ReviewCalculationInput} from "./ReviewCalculator";
import {StagingCalculationInput} from "./StagingCalculator";


describe('CalculatorService tests', () => {

    test('calculate should return BillingCalculationResult', () => {
        let s = new CalculationService();

        let result = s.calculate(getSampleDataInput());

        expect(result).toEqual(getSampleBillingCalculationResult());
    })
})
    
    function getSampleDataInput() : BillingDataInput {
        let dataInput = new BillingDataInput();
        dataInput.reviewData = new ReviewCalculationInput(1, 0, 1);
        dataInput.repoData = new RepositoryCalculationInput(10, 1, 0, 1);
        dataInput.coldStorageData = new ColdStorageCalculationInput(10, 0, 1);
        dataInput.stagingData = new StagingCalculationInput(10, 1);

        return dataInput;
    }

    function getSampleBillingCalculationResult() : BillingCalculationResult {
        return {
            reviewResult: {amount: 1.2, dataInGB: 1},
            repoResult: {amount: 5.4, dataInGB: 9},
            coldStorageResult: {amount: 3, dataInGB: 10},
            stagingResult: {amount: 3, dataInGB: 10},
            peekDay: 1
        };
    }


