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

    const reviewTextOnlyDocuments1 = ref(0);
    const reviewTextOnlyDocuments2 = ref(0);
    const reviewTextOnlyDocuments3 = ref(0);
    const reviewTextOnlyDocuments4 = ref(0);
    const reviewTextOnlyDocuments5 = ref(0);

    function changeReviewBillableFileSize1(newValue: string) {
        reviewBillableFileSize1.value = parseInt(newValue);
    }

    function changeReviewBillableFileSize2(newValue: string) {
        reviewBillableFileSize2.value = parseInt(newValue);
    }

    function changeReviewBillableFileSize3(newValue: string) {
        reviewBillableFileSize3.value = parseInt(newValue);
    }

    function changeReviewBillableFileSize4(newValue: string) {
        reviewBillableFileSize4.value = parseInt(newValue)
    }

    function changeReviewBillableFileSize5(newValue: string) {
        reviewBillableFileSize5.value = parseInt(newValue)
    }

    function changeReviewTextOnlyDocuments1(newValue: string) {
        reviewTextOnlyDocuments1.value = parseInt(newValue);
    }

    function changeReviewTextOnlyDocuments2(newValue: string) {
        reviewTextOnlyDocuments2.value = parseInt(newValue);
    }

    function changeReviewTextOnlyDocuments3(newValue: string) {
        reviewTextOnlyDocuments3.value = parseInt(newValue);
    }

    function changeReviewTextOnlyDocuments4(newValue: string) {
        reviewTextOnlyDocuments4.value = parseInt(newValue)
    }

    function changeReviewTextOnlyDocuments5(newValue: string) {
        reviewTextOnlyDocuments5.value = parseInt(newValue)
    }

    return {
        reviewBillableFileSize1: reviewBillableFileSize1,
        reviewBillableFileSize2: reviewBillableFileSize2,
        reviewBillableFileSize3: reviewBillableFileSize3,
        reviewBillableFileSize4: reviewBillableFileSize4,
        reviewBillableFileSize5: reviewBillableFileSize5,
        changeReviewBillableFileSize1,
        changeReviewBillableFileSize2,
        changeReviewBillableFileSize3,
        changeReviewBillableFileSize4,
        changeReviewBillableFileSize5,
        reviewTextOnlyDocuments1: reviewTextOnlyDocuments1,
        reviewTextOnlyDocuments2: reviewTextOnlyDocuments2,
        reviewTextOnlyDocuments3: reviewTextOnlyDocuments3,
        reviewTextOnlyDocuments4: reviewTextOnlyDocuments4,
        reviewTextOnlyDocuments5: reviewTextOnlyDocuments5,
        changeReviewTextOnlyDocuments1,
        changeReviewTextOnlyDocuments2,
        changeReviewTextOnlyDocuments3,
        changeReviewTextOnlyDocuments4,
        changeReviewTextOnlyDocuments5,
        reviewData : reviewData
    };
  });
