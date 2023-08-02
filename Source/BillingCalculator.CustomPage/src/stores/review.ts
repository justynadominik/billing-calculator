import { defineStore } from "pinia";
import { ref } from "vue";
import {RepositoryCalculationInput} from "../calculator/RepositoryCalculator";
import {ReviewCalculationInput} from "../calculator/ReviewCalculator";

export const useReviewStore = defineStore("review", () => {
    const reviewBillableFileSize1 = ref(0);
    const reviewBillableFileSize2 = ref(0);
    const reviewBillableFileSize3 = ref(0);
    const reviewBillableFileSize4 = ref(0);
    const reviewBillableFileSize5 = ref(0);

    const reviewData = ref<ReviewCalculationInput[]>(
        [
            {
                dataInGb: 0,
                textOnlyDocumentsCount: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                textOnlyDocumentsCount: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                textOnlyDocumentsCount: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                textOnlyDocumentsCount: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                textOnlyDocumentsCount: 0,
                reviewPeek: 0,
            },
        ]);


    function changeBillableFileSize1(newValue: string) {
        reviewBillableFileSize1.value = parseInt(newValue);
    }

    function changeBillableFileSize2(newValue: string) {
        reviewBillableFileSize2.value = parseInt(newValue);
    }

    function changeBillableFileSize3(newValue: string) {
        reviewBillableFileSize3.value = parseInt(newValue);
    }

    function changeBillableFileSize4(newValue: string) {
        reviewBillableFileSize4.value = parseInt(newValue)
    }

    function changeBillableFileSize5(newValue: string) {
        reviewBillableFileSize5.value = parseInt(newValue)
    }

    return { reviewBillableFileSize1: reviewBillableFileSize1, reviewBillableFileSize2: reviewBillableFileSize2, reviewBillableFileSize3: reviewBillableFileSize3, reviewBillableFileSize4: reviewBillableFileSize4, reviewBillableFileSize5: reviewBillableFileSize5,
        changeBillableFileSize1, changeBillableFileSize2, changeBillableFileSize3, changeBillableFileSize4, changeBillableFileSize5, reviewData : reviewData };
  });
