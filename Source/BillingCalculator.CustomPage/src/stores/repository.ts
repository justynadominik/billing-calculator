import { defineStore } from "pinia";
import { ref } from "vue";

export const useRepositoryStore = defineStore("repository", () => {
    const billableFileSize1 = ref(0);
    const billableFileSize2 = ref(0);
    const billableFileSize3 = ref(0);
    const billableFileSize4 = ref(0);
    const billableFileSize5 = ref(0);

    function changeBillableFileSize1(newValue: string) {
        billableFileSize1.value = parseInt(newValue);
    }

    function changeBillableFileSize2(newValue: string) {
        billableFileSize2.value = parseInt(newValue);
    }

    function changeBillableFileSize3(newValue: string) {
        billableFileSize3.value = parseInt(newValue);
    }

    function changeBillableFileSize4(newValue: string) {
        billableFileSize4.value = parseInt(newValue)
    }

    function changeBillableFileSize5(newValue: string) {
        billableFileSize5.value = parseInt(newValue)
    }

    return { billableFileSize1, billableFileSize2, billableFileSize3, billableFileSize4, billableFileSize5,
        changeBillableFileSize1, changeBillableFileSize2, changeBillableFileSize3, changeBillableFileSize4, changeBillableFileSize5 };
  });
