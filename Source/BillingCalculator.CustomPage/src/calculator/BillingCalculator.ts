export class RepositoryCalculator {
  rate: number;

  calculate(repoData: RepositoryCalculationInput) : CalculationResult {
    //let dataInGb = repoData.linkedBilliableFileSizeInGB + (repoData.totalBilliableFileSizeInGB + repoData.textOnlyDocumentsCount/4000 - repoData.linkedBilliableFileSizeInGB)
    let dataInGb = repoData.totalBilliableFileSizeInGB  + repoData.textOnlyDocumentsCount/4000 - repoData.linkedBilliableFileSizeInGB
    return new CalculationResult(dataInGb, dataInGb * this.rate )
  }

  constructor(rate : number){
    this.rate = rate;
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

export class CalculationResult {
  dataInGB : number;
  amount: number;

  constructor(dataInGB: number, amount: number){
    this.dataInGB = dataInGB;
    this.amount = amount;
  }
}

