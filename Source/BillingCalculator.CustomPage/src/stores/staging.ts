import { defineStore } from "pinia";
import { ref } from "vue";
import { StagingCalculationInput } from "../calculator/StagingCalculator";

export const usestagingStore = defineStore("staging", () => {
    const stagingBillableFileSize1 = ref(0);
    const stagingBillableFileSize2 = ref(0);
    const stagingBillableFileSize3 = ref(0);
    const stagingBillableFileSize4 = ref(0);
    const stagingBillableFileSize5 = ref(0);

    const stagingData = ref<StagingCalculationInput[]>(
        [
            {
                dataInGb: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                reviewPeek: 0,
            },
            {
                dataInGb: 0,
                reviewPeek: 0,
            },
        ]);

    function changeStagingBillableFileSize1(newValue: string) {
        stagingBillableFileSize1.value = parseInt(newValue);
    }

    function changeStagingBillableFileSize2(newValue: string) {
        stagingBillableFileSize2.value = parseInt(newValue);
    }

    function changeStagingBillableFileSize3(newValue: string) {
        stagingBillableFileSize3.value = parseInt(newValue);
    }

    function changeStagingBillableFileSize4(newValue: string) {
        stagingBillableFileSize4.value = parseInt(newValue)
    }

    function changeStagingBillableFileSize5(newValue: string) {
        stagingBillableFileSize5.value = parseInt(newValue)
    }

    return {
        stagingBillableFileSize1: stagingBillableFileSize1,
        stagingBillableFileSize2: stagingBillableFileSize2,
        stagingBillableFileSize3: stagingBillableFileSize3,
        stagingBillableFileSize4: stagingBillableFileSize4,
        stagingBillableFileSize5: stagingBillableFileSize5,
        changeStagingBillableFileSize1,
        changeStagingBillableFileSize2,
        changeStagingBillableFileSize3,
        changeStagingBillableFileSize4,
        changeStagingBillableFileSize5,
        stagingData : stagingData
    };
  });
