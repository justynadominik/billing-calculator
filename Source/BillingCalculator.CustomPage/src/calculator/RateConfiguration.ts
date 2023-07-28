import { Tier } from "./Tier";


export class RateConfiguration {
  tiers!: Tier[];

  getTier(reviewSize: number): Tier | null {
    let currentTier = null;

    this.tiers.forEach(tier => {
      if (tier.isInTier(reviewSize)) {
        currentTier = tier;
      }
    });

    return currentTier;
  }

  constructor(tiers: Tier[]) {
    this.tiers = tiers;
  }
}
