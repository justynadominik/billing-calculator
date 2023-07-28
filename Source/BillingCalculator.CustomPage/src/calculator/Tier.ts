
export class Tier {
  lowerBoundInGB!: number;
  upperBoundInGB!: number | null;
  rate!: number;

  isInTier(reviewSize: number): boolean {
    return reviewSize >= this.lowerBoundInGB && (this.upperBoundInGB == null || reviewSize < this.upperBoundInGB);
  }

  constructor(lowerBoundInGB: number, upperBoundInGB: number | null, rate: number) {
    this.lowerBoundInGB = lowerBoundInGB;
    this.upperBoundInGB = upperBoundInGB;
    this.rate = rate;
  }
}
