import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { BillingDataInput } from "../calculator/CalculatorService";
import { RepositoryCalculationInput } from "../calculator/RepositoryCalculator";
import { ReviewCalculationInput } from "../calculator/ReviewCalculator";
import { ColdStorageCalculationInput } from "../calculator/ColdStorageCalculator";
import { StagingCalculationInput } from "../calculator/StagingCalculator";

export interface repoModel {
  billableFileSize: number;
  linkedFileSize: number;
  textOnlyDocument: number;
}

export interface reviewModel {
  billableFileSize: number;
  textOnlyDocument: number;
}

export interface coldStorageModel {
  billableFileSize: number;
}

export interface RootState {
  repository: repoModel;
  review: reviewModel;
  coldStorage: coldStorageModel;
}

export const useBillableData = defineStore("billableData", () => {
  // const data = ref<RootState>({
  //   repository: {
  //     billableFileSize: 0,
  //     linkedFileSize: 0,
  //     textOnlyDocument: 0,
  //   },
  //   review: {
  //     billableFileSize: 0,
  //     textOnlyDocument: 0,
  //   },
  //   coldStorage: {
  //     billableFileSize: 0,
  //   },
  // });

  const data = ref<BillingDataInput>({
    repoData: new RepositoryCalculationInput(0, 0, 0, 0),
    reviewData: new ReviewCalculationInput(0, 0, 0),
    coldStorageData: new ColdStorageCalculationInput(0, 0, 0),
    stagingData: new StagingCalculationInput(0, 0),
  });

  function changeReviewBillableFileSize(billableFileSize: number) {
    data.value.reviewData.dataInGb = billableFileSize;
  }

  function changeReviewTextOnlyDocument(textOnlyDocument: number) {
    data.value.reviewData.textOnlyDocumentsCount = textOnlyDocument;
  }

  function changeRepoBillableFileSize(billableFileSize: number) {
    data.value.repoData.totalBilliableFileSizeInGB = billableFileSize;
  }

  function changeRepoTextOnlyDocument(textOnlyDocument: number) {
    data.value.repoData.textOnlyDocumentsCount = textOnlyDocument;
  }

  function changeRepoLinkedFileSize(linkedFileSize: number) {
    data.value.repoData.linkedBilliableFileSizeInGB = linkedFileSize;
  }

  function changeColdStorageBillableFileSize(billableFileSize: number) {
    data.value.coldStorageData.dataInGb = billableFileSize;
  }

  // function changeReviewBillableFileSize(billableFileSize: number) {
  //   data.value.review.billableFileSize = billableFileSize;
  // }

  // function changeReviewTextOnlyDocument(textOnlyDocument: number) {
  //   data.value.review.textOnlyDocument = textOnlyDocument;
  // }

  // function changeRepoBillableFileSize(billableFileSize: number) {
  //   data.value.repository.billableFileSize = billableFileSize;
  // }

  // function changeRepoTextOnlyDocument(textOnlyDocument: number) {
  //   data.value.repository.textOnlyDocument = textOnlyDocument;
  // }

  // function changeRepoLinkedFileSize(linkedFileSize: number) {
  //   data.value.repository.linkedFileSize = linkedFileSize;
  // }

  // function changeColdStorageBillableFileSize(billableFileSize: number) {
  //   data.value.coldStorage.billableFileSize = billableFileSize;
  // }

  return {
    data,
    changeReviewBillableFileSize,
    changeReviewTextOnlyDocument,
    changeRepoBillableFileSize,
    changeRepoTextOnlyDocument,
    changeRepoLinkedFileSize,
    changeColdStorageBillableFileSize,
  };
});
