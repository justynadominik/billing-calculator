import { CalculationResult } from "./CalculationResult";


export interface Calculator<T> {
  calculate(input: T): CalculationResult;
}
