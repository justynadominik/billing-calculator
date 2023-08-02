import { defineStore } from "pinia";
import { ref } from "vue";

import { BillingDataInput } from "../calculator/CalculatorService";
import { RepositoryCalculationInput } from "../calculator/RepositoryCalculator";
import { ReviewCalculationInput } from "../calculator/ReviewCalculator";
import { ColdStorageCalculationInput } from "../calculator/ColdStorageCalculator";
import { StagingCalculationInput } from "../calculator/StagingCalculator";
import { TranslateCalculatorInput } from "../calculator/TranslateCalculator";

export const useBillableData = defineStore("billableData", () => {
  const data = ref<BillingDataInput>({
    repoData: new RepositoryCalculationInput(0, 0, 0, 0),
    reviewData: new ReviewCalculationInput(0, 0, 0),
    coldStorageData: new ColdStorageCalculationInput(0, 0, 0),
    stagingData: new StagingCalculationInput(0, 0),
    translateData: new TranslateCalculatorInput(0),
  });

  function changeReviewBillableFileSize(billableFileSize: number) {
    data.value.reviewData.dataInGb = Number(billableFileSize);
  }

  function changeReviewTextOnlyDocument(textOnlyDocument: number) {
    data.value.reviewData.textOnlyDocumentsCount = Number(textOnlyDocument);
  }

  function changeRepoBillableFileSize(billableFileSize: number) {
    data.value.repoData.totalBilliableFileSizeInGB = Number(billableFileSize);
  }

  function changeRepoTextOnlyDocument(textOnlyDocument: number) {
    data.value.repoData.textOnlyDocumentsCount = Number(textOnlyDocument);
  }

  function changeRepoLinkedFileSize(linkedFileSize: number) {
    data.value.repoData.linkedBilliableFileSizeInGB = Number(linkedFileSize);
  }

  function changeColdStorageBillableFileSize(billableFileSize: number) {
    data.value.coldStorageData.dataInGb = Number(billableFileSize);
  }

  function changeStagingBillableFileSize(billableFileSize: number) {
    data.value.stagingData.dataInGb = Number(billableFileSize);
  }

  function changeTranslateBillableFileSize(billableFileSize: number) {
    data.value.translateData.dataInGb = Number(billableFileSize);
  }

  return {
    data,
    changeReviewBillableFileSize,
    changeReviewTextOnlyDocument,
    changeRepoBillableFileSize,
    changeRepoTextOnlyDocument,
    changeRepoLinkedFileSize,
    changeColdStorageBillableFileSize,
    changeStagingBillableFileSize,
    changeTranslateBillableFileSize
  };
});
