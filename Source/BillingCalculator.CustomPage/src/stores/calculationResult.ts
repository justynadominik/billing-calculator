import {defineStore} from "pinia";
import {ref} from "vue";
import {BillingCalculationResult} from "../calculator/CalculatorService";
import {CalculationResult} from "../calculator/CalculationResult";

export const calculationResult = defineStore("calculationResult", () => {
    const calcResult = ref<BillingCalculationResult>(new BillingCalculationResult(
        new CalculationResult(0, 0),
        new CalculationResult(0, 0),
        new CalculationResult(0, 0),
        new CalculationResult(0, 0),
        new CalculationResult(0, 0),
        0));


    function changeResult(result: BillingCalculationResult) {
        calcResult.value= result
    }

  return {
    calcResult, changeResult
  };
});