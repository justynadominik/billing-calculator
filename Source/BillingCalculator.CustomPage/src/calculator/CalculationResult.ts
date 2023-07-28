
export class CalculationResult {
  dataInGB: number;
  amount: number;

  constructor(dataInGB: number, amount: number) {
    this.dataInGB = dataInGB;
    this.amount = amount;
  }
}
