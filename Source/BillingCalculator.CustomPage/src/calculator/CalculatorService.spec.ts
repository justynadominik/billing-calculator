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

    test('calculateForMonth should return data for peek day', () => {
        let s = new CalculationService();

        let result = s.calculateForMonth(getSampleDataInput2Days());

        expect(result).toEqual(getSampleBillingCalculationResult2Days());
    })

})
    
    function getSampleDataInput2Days() : [BillingDataInput, number][] {
        let day1 = getSampleDataInput();
        let day2 = new BillingDataInput();
        day2.reviewData = new ReviewCalculationInput(10, 0, 10);
        day2.repoData = new RepositoryCalculationInput(10, 1, 0, 10);
        day2.coldStorageData = new ColdStorageCalculationInput(10, 0, 10);
        day2.stagingData = new StagingCalculationInput(10, 10);
        return [[day1, 1], [day2, 2]];
    }

    

    function getSampleDataInput() : BillingDataInput {
        let dataInput = new BillingDataInput();
        dataInput.reviewData = new ReviewCalculationInput(1, 0, 1);
        dataInput.repoData = new RepositoryCalculationInput(10, 1, 0, 1);
        dataInput.coldStorageData = new ColdStorageCalculationInput(10, 0, 1);
        dataInput.stagingData = new StagingCalculationInput(10, 1);

        return dataInput;
    }

    function getSampleBillingCalculationResult2Days() : BillingCalculationResult {
        return {
            reviewResult: {amount: 10, dataInGB: 10},
            repoResult: {amount: 4.5, dataInGB: 9},
            coldStorageResult: {amount: 2, dataInGB: 10},
            stagingResult: {amount: 1.6, dataInGB: 10},
            peekDay: 2
        };
    }

    function getSampleBillingCalculationResult() : BillingCalculationResult {
        return {
            reviewResult: {amount: 1.2, dataInGB: 1},
            repoResult: {amount: 5.4, dataInGB: 9},
            coldStorageResult: {amount: 3, dataInGB: 10},
            stagingResult: {amount: 2.7, dataInGB: 10},
            peekDay: 1
        };
    }


